// src/components/CompanyDetails.tsx
import { forwardRef } from 'react';

const CompanyDetails = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="glass-card h-full w-full p-4 flex flex-col justify-center"
  >
    <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
      What We&apos;re <span className="text-markit-orange">Building</span>
    </h2>
    <p className="font-amiko text-xs text-off-white leading-relaxed">
      An <span className="font-bold text-markit-orange">AI engine</span> that instantly classifies every product SKU for <span className="italic">tariff codes</span>, turning complex HS numbers into one-click compliance decisions.  
      We surface real-time duty rates and country-of-origin rules so you never miss a regulation update.
    </p>
    <p className="font-amiko text-xs text-markit-orange/70 italic mt-4 leading-relaxed">
      Faster customs clearance. Fewer duty surprises.
    </p>
  </div>
));

CompanyDetails.displayName = 'CompanyDetails';
export default CompanyDetails;
