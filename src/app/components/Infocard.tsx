import React from 'react';

interface InfocardProps {
  content: React.ReactNode;
  onClose: () => void;
  colorClass: string;
  textColorClass: string;
  currentCardId: string | null;
}

const Infocard: React.FC<InfocardProps> = ({ content, onClose, colorClass, textColorClass, currentCardId }) => {
  return (
    <div className={`relative p-8 rounded-glass flex flex-col w-full transition-all duration-500 ease-in-out transform ${colorClass} ${textColorClass}`}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-off-white hover:text-markit-orange transition-colors duration-200"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div key={currentCardId} className="flex-grow overflow-y-auto custom-scrollbar prose prose-invert max-w-none transition-opacity duration-300">
        {content}
      </div>
    </div>
  );
};

export default Infocard; 