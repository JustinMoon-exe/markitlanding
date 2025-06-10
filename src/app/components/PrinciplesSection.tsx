// src/components/PrinciplesSection.tsx
import { forwardRef } from 'react';

const PrinciplesSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="glass-card h-full w-full p-4 flex flex-col justify-center">
      <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
        What We <span className="text-markit-orange">Believe</span>
      </h2>
      <ul className="font-amiko text-xs text-off-white space-y-1.5 leading-relaxed">
        <li className="flex items-start">
          <span className="mr-2 text-markit-orange">→</span>
          <span>Clean data enables <span className="font-bold">bold</span> decisions.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-markit-orange">→</span>
          <span>Financial tools should be <span className="italic">programmable</span>.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-markit-orange">→</span>
          <span>Less <span className="text-markit-orange/70">noise</span>. More <span className="font-bold">edge</span>.</span>
        </li>
      </ul>
    </div>
  );
});

PrinciplesSection.displayName = 'PrinciplesSection';
export default PrinciplesSection;