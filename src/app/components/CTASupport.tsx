// src/components/CTASupport.tsx
import { forwardRef } from 'react';

const CTASupport = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    // Give it a more substantial fixed height, e.g., similar to ProductTeaserBox or a bit taller
    // Let's aim for a height that makes the column visually balanced.
    // e.g., h-64, h-72, or use min-h-* and let content/padding define it more.
    // For now, let's use a min-height and padding.
    <div
      ref={ref}
      className="glass-card w-full max-w-sm mt-8 p-0 overflow-hidden relative flex items-center justify-center"
      style={{ minHeight: '200px' }} // Example fixed min-height, adjust as needed
    >
      {/* Animation Layer 1 */}
      <div className="absolute inset-0 animate-flowingLinesA opacity-25 bg-simple-flow-1 [background-size:200px_200px]"></div>

      {/* Animation Layer 2 */}
      <div className="absolute inset-0 animate-flowingLinesB opacity-20 bg-simple-flow-2 [background-size:250px_250px]"></div>

      {/* Optional: Subtle overall color wash or inner shadow to add depth */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5 opacity-50"></div>

      {/* You could add a very subtle, almost invisible text/icon here if desired */}
      {/* <p className="relative z-10 font-amiko text-xs text-off-white/20">DATA FLOW</p> */}
    </div>
  );
});

CTASupport.displayName = 'CTASupport';
export default CTASupport;