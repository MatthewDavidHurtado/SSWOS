import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

type Portal = 'rawson' | 'eddy' | 'bible';

interface ProgressState {
  [itemId: string]: boolean;
}

// Generate a persistent user ID for this device
const getUserId = (): string => {
  let userId = localStorage.getItem('sswos_user_id');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('sswos_user_id', userId);
  }
  return userId;
};

export const useProgress = (portal: Portal) => {
  const [progress, setProgress] = useState<ProgressState>({});
  const [loading, setLoading] = useState(true);
  const userId = getUserId();

  // Load progress from Supabase on mount
  useEffect(() => {
    loadProgress();
  }, [portal]);

  const loadProgress = async () => {
    try {
      setLoading(true);

      // Try to load from Supabase first
      const { data, error } = await supabase
        .from('user_progress')
        .select('item_id, completed')
        .eq('user_id', userId)
        .eq('portal', portal);

      if (error) {
        console.error('Error loading progress from Supabase:', error);
        // Fall back to localStorage
        loadFromLocalStorage();
      } else if (data) {
        const progressMap: ProgressState = {};
        data.forEach(item => {
          progressMap[item.item_id] = item.completed;
        });
        setProgress(progressMap);
      }
    } catch (err) {
      console.error('Error in loadProgress:', err);
      loadFromLocalStorage();
    } finally {
      setLoading(false);
    }
  };

  const loadFromLocalStorage = () => {
    const key = `progress_${portal}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing stored progress:', e);
      }
    }
  };

  const toggleProgress = async (itemId: string) => {
    const newCompleted = !progress[itemId];

    // Optimistically update UI
    setProgress(prev => ({
      ...prev,
      [itemId]: newCompleted
    }));

    // Save to localStorage immediately
    const key = `progress_${portal}`;
    const newProgress = { ...progress, [itemId]: newCompleted };
    localStorage.setItem(key, JSON.stringify(newProgress));

    // Try to save to Supabase
    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          portal,
          item_id: itemId,
          completed: newCompleted,
          completed_at: newCompleted ? new Date().toISOString() : null
        }, {
          onConflict: 'user_id,portal,item_id'
        });

      if (error) {
        console.error('Error saving progress to Supabase:', error);
      }
    } catch (err) {
      console.error('Error in toggleProgress:', err);
    }
  };

  const isCompleted = (itemId: string): boolean => {
    return progress[itemId] || false;
  };

  const getCompletionCount = (): number => {
    return Object.values(progress).filter(Boolean).length;
  };

  return {
    isCompleted,
    toggleProgress,
    getCompletionCount,
    loading
  };
};
