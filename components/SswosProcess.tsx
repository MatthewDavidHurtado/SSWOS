import React, { useState } from 'react';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-gray-500 transition-transform duration-300 ease-in-out group-hover:text-gray-400 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);


interface PhaseCardProps {
  phase: string;
  title: string;
  description?: string;
  tasks?: string[];
  transferText?: string;
  transferTarget?: string;
}


const PhaseCard: React.FC<PhaseCardProps> = ({ phase, title, description, tasks, transferText, transferTarget }) => {
  return (
    <div className="bg-brand-dark/30 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-brand-gold/20 hover:border-gray-700">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
        {/* Phase Label */}
        <div className="w-full lg:w-1/4 flex-shrink-0">
          <h3 className="text-5xl lg:text-6xl font-serif text-gray-600 font-light tracking-wider">
            Phase <span className="text-brand-gold">{phase}</span>
          </h3>
        </div>

        {/* Content */}
        <div className="flex-grow border-t-2 lg:border-t-0 lg:border-l-2 border-dashed border-gray-700 pt-6 lg:pt-0 lg:pl-8 w-full">
          <p className="text-2xl font-semibold text-brand-light-gold font-serif tracking-wide">{title}</p>
          {description && <p className="mt-2 text-gray-300 max-w-xl">{description}</p>}
          {tasks && (
            <ul className="mt-4 space-y-2 text-gray-300 list-inside">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-gold mr-3 mt-1">&#8211;</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Transfer Note */}
        {transferText && (
          <div className="w-full lg:w-auto text-left lg:text-right flex-shrink-0 self-start lg:self-center mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-3 bg-black/30 px-4 py-2 rounded-full border border-gray-700">
              <span className="text-sm text-gray-400 font-semibold whitespace-nowrap">{transferText}</span>
              <ArrowRightIcon />
              <span className="text-sm text-brand-light-gold font-bold whitespace-nowrap">{transferTarget}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const SswosProcess = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 sm:py-24 animate-fade-in-up">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clickable Header */}
        <div 
          className="text-center mb-8 sm:mb-10 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          aria-expanded={isExpanded}
          aria-controls="sswos-process-content"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsExpanded(!isExpanded); }}
        >
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-gold tracking-wider group-hover:text-brand-light-gold transition-colors">
              The SSWOS Process
            </h2>
            <ChevronIcon isExpanded={isExpanded} />
          </div>
          <blockquote className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            <p className="italic">"And if Christ be in you, the body is dead because of sin; but the Spirit is life because of righteousness."</p>
            <cite className="block not-italic text-sm text-gray-500 mt-2">— Romans 8:10 (KJV)</cite>
          </blockquote>
        </div>

        {/* Collapsible Content */}
        <div
          id="sswos-process-content"
          className={`grid transition-all duration-700 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
            <div className="overflow-hidden">
                <div className="space-y-10 pt-4">
                <PhaseCard
                    phase="I"
                    title="Bio code + Mentor x 3 Weeks+"
                    description={`This removes the (issues) within you that the "lines of force" attach to—a connection that stems from an unconscious propensity to react.`}
                    transferText={`From "Physical"`}
                    transferTarget={`To "Mental"`}
                />

                <PhaseCard
                    phase="II"
                    title="Daily Spiritual Regimen"
                    tasks={[
                    "1 chapter of F. L. Rawson / Day",
                    "10 pages of M.B.E. / Day",
                    "1 Bible Study / Day",
                    "15-Minutes Meditation / Day",
                    "3+ Treatments / Day",
                    ]}
                    transferText={`Transfer to`}
                    transferTarget={`"Spirit."`}
                />
                
                <PhaseCard
                    phase="III"
                    title="Demonstrate + Graduate / Serve"
                    description="Apply the learned principles in daily life to achieve tangible results, graduate from the program, and serve others with your newfound understanding and capabilities."
                />
                </div>
            </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SswosProcess;