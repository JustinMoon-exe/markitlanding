import { forwardRef } from 'react';

const TopoMap = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="glass-card h-full w-full relative overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-markit-orange/5 to-markit-maroon/5" />
      
      {/* Animated topo lines - Layer 1 (faster) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-flowingLinesA bg-simple-flow-1 [background-size:200px_200px]" />
      </div>

      {/* Animated topo lines - Layer 2 (slower, different direction) */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 animate-flowingLinesB bg-simple-flow-2 [background-size:250px_250px]" />
      </div>

      {/* Animated topo lines - Layer 3 (more subtle) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-flowingLinesC bg-simple-flow-1 [background-size:300px_300px]" />
      </div>

      {/* Animated highlight boxes */}
      <div className="absolute inset-0">
        <div className="absolute w-6 h-6 bg-markit-orange/15 animate-pulse rounded-sm" style={{ top: '25%', left: '35%' }} />
        <div className="absolute w-6 h-6 bg-markit-maroon/15 animate-pulse rounded-sm" style={{ top: '65%', left: '65%' }} />
        <div className="absolute w-6 h-6 bg-markit-orange/15 animate-pulse rounded-sm" style={{ top: '45%', left: '15%' }} />
        <div className="absolute w-6 h-6 bg-markit-maroon/15 animate-pulse rounded-sm" style={{ top: '85%', left: '45%' }} />
        <div className="absolute w-6 h-6 bg-markit-orange/15 animate-pulse rounded-sm" style={{ top: '10%', left: '80%' }} />
        <div className="absolute w-6 h-6 bg-markit-maroon/15 animate-pulse rounded-sm" style={{ top: '70%', left: '5%' }} />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-10 bg-noise" />
    </div>
  );
});

TopoMap.displayName = 'TopoMap';
export default TopoMap; 