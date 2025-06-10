import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
};

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2 | 3;
}

const BentoItem: React.FC<BentoItemProps> = ({ 
  children, 
  className = '',
  colSpan = 1,
  rowSpan = 1 
}) => {
  const colSpanClass = {
    1: 'sm:col-span-1',
    2: 'sm:col-span-2',
    3: 'sm:col-span-3'
  }[colSpan];

  const rowSpanClass = {
    1: 'sm:row-span-1',
    2: 'sm:row-span-2',
    3: 'sm:row-span-3'
  }[rowSpan];

  return (
    <div className={`${colSpanClass} ${rowSpanClass} ${className}`}>
      {children}
    </div>
  );
};

export { BentoGrid, BentoItem }; 