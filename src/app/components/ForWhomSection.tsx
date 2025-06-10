// src/components/ForWhomSection.tsx
import { forwardRef } from 'react';

const ForWhomSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="glass-card h-full w-full p-4 flex flex-col justify-center">
      <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
        Who We're <span className="text-markit-maroon">Building</span> For
      </h2>
      <div className="space-y-2">
        <p className="font-amiko text-xs text-off-white leading-relaxed">
          <span className="text-markit-maroon font-bold">Traders</span>. <span className="text-markit-maroon font-bold">Quants</span>. <span className="text-markit-maroon font-bold">Analysts</span>. <span className="text-markit-maroon font-bold">Builders</span>. Anyone who's tired of noise, and ready to operate in clarity.
        </p>
        <p className="font-amiko text-xs text-markit-maroon/70 italic leading-relaxed">
          If you think in code, we speak your language.
        </p>
      </div>
    </div>
  );
});

ForWhomSection.displayName = 'ForWhomSection';
export default ForWhomSection;