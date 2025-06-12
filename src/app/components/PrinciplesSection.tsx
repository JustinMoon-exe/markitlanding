// src/components/PrinciplesSection.tsx
import { forwardRef } from 'react';

const PrinciplesSection = () => {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-center">
      <ul className="font-amiko text-lg text-off-white space-y-4 leading-relaxed">
        <li className="flex items-start">
          <span className="text-markit-orange mr-2">→</span>
          <span>Absolute accuracy trumps volume</span>
        </li>
        <li className="flex items-start">
          <span className="text-markit-orange mr-2">→</span>
          <span>Contextual intelligence over raw feeds</span>
        </li>
        <li className="flex items-start">
          <span className="text-markit-orange mr-2">→</span>
          <span>Speed converts insight into edge</span>
        </li>
      </ul>
    </div>
  );
};

PrinciplesSection.displayName = 'PrinciplesSection';
export default PrinciplesSection;
