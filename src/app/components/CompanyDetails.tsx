// src/components/CompanyDetails.tsx
import { forwardRef } from 'react';

// type CompanyDetailsProps = {}; // No extra props needed for now

const CompanyDetails = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="glass-card h-full w-full p-4 flex flex-col justify-center">
      <h2 className="font-krona text-base text-off-white uppercase tracking-wide mb-3">
        What We're <span className="text-markit-orange">Building</span>
      </h2>
      <div className="space-y-2 font-amiko text-xs text-off-white">
        <p className="leading-relaxed">
          MarkIt is building the <span className="text-markit-orange font-bold">programmable data layer</span> for the next generation of markets.
        </p>
        <p className="leading-relaxed">
          We unify <span className="italic">structured</span> and <span className="italic">unstructured</span> trade data — signals, sentiment, analytics — into a single paradigm built for traders, quant systems, and enterprises.
        </p>
        <p className="text-markit-orange/70 italic leading-relaxed mt-4">
          No dashboards. No noise. Just raw insight.
        </p>
      </div>
    </div>
  );
});

CompanyDetails.displayName = 'CompanyDetails';
export default CompanyDetails;