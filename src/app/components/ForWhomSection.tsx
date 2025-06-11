// src/components/ForWhomSection.tsx
import { forwardRef } from 'react';

const ForWhomSection = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="glass-card h-full w-full p-4 flex flex-col justify-center"
  >
    <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
      Who We&apos;re <span className="text-markit-maroon">Serving</span>
    </h2>
    <p className="font-amiko text-xs text-off-white leading-relaxed">
      From importers racing to meet new duty rates, to global manufacturers optimizing cost forecasts:
    </p>
    <p className="font-amiko text-xs text-markit-maroon/70 italic mt-3 leading-relaxed">
      If you move goods, MarkIt makes compliance effortless.
    </p>
  </div>
));

ForWhomSection.displayName = 'ForWhomSection';
export default ForWhomSection;
