import React from 'react';

const GlassCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={`
        bg-white bg-opacity-10 backdrop-filter backdrop-blur-md
        border border-white border-opacity-15 rounded-3xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard; 