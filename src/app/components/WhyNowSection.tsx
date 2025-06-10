// src/components/WhyNowSection.tsx
import { forwardRef } from 'react';

const WhyNowSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="glass-card h-full w-full p-4 flex flex-col justify-center">
      <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
        Why <span className="text-markit-orange">Now</span>
      </h2>
      <div className="space-y-2">
        <p className="font-amiko text-xs text-off-white leading-relaxed">
          Markets move <span className="text-markit-orange font-bold">faster</span> than ever. Data is everywhere, but context is fragmented.
        </p>
        <p className="font-amiko text-xs text-off-white leading-relaxed">
          We believe <span className="italic">signal extraction</span> — not signal collection — will define the next generation of financial infrastructure.
        </p>
        <p className="font-amiko text-xs text-markit-orange/70 italic leading-relaxed mt-4">
          The future of trading is being written in code.
        </p>
      </div>
    </div>
  );
});

WhyNowSection.displayName = 'WhyNowSection';
export default WhyNowSection;