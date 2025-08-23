
export interface Video {
  id: number;
  title: string;
  description: string;
  videoId: string; // YouTube or Vimeo Video ID
  platform: 'youtube' | 'vimeo';
  pdfUrl?: string;
}

export interface MbeChapter {
  id: number;
  title: string;
  pdfUrl: string;
}

export interface BibleStudyLesson {
  id: number;
  title: string;
  pdfUrl: string;
}
