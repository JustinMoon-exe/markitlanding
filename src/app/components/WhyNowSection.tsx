// src/components/WhyNowSection.tsx
import { forwardRef } from 'react';

const WhyNowSection = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="glass-card h-full w-full p-4 flex flex-col justify-center"
  >
    <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
      Why <span className="text-markit-orange">Now</span>
    </h2>
    <p className="font-amiko text-sm text-off-white leading-relaxed mb-2">
      This year&apos;s sudden <span className="font-bold text-markit-orange">tariff spikes</span> on electronics and automotive parts forced thousands of firms to eat into margins and halt shipments at major ports.
    </p>
    <p className="font-amiko text-sm text-off-white leading-relaxed mb-2">
      Emerging free-trade zones and new bilateral agreements mean duty rules shift overnight.
    </p>
    <p className="font-amiko text-sm text-off-white leading-relaxed mb-2">
      At the same time, companies are demanding a <span className="italic text-markit-maroon">single source of truth</span> for compliance—today&apos;s AI classification layer is tomorrow&apos;s full trade-data platform.
    </p>
    <p className="font-amiko text-sm text-markit-orange/70 italic leading-relaxed">
      With MarkIt, you adapt to every regulation change the moment it&apos;s announced.
    </p>
  </div>
));

WhyNowSection.displayName = 'WhyNowSection';
export default WhyNowSection;
