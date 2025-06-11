// src/components/PrinciplesSection.tsx
import { forwardRef } from 'react';

const PrinciplesSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="glass-card h-full w-full p-4 flex flex-col justify-center"
    >
      <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
        What We <span className="text-markit-orange">Believe</span>
      </h2>
      <ul className="font-amiko text-sm text-off-white space-y-2 leading-relaxed">
        <li>→ Absolute accuracy trumps volume.</li>
        <li>→ Contextual intelligence over raw feeds.</li>
        <li>→ Speed converts insight into edge.</li>
      </ul>
    </div>
  );
});

PrinciplesSection.displayName = 'PrinciplesSection';
export default PrinciplesSection;
