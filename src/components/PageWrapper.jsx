import React from 'react';

export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`w-full flex-grow flex flex-col ${className}`}>
      {children}
    </div>
  );
}
