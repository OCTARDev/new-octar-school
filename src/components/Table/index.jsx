import React from 'react';

export default function ResponsiveTable({ children, className }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
        <table className="min-w-full">
           {children}
        </table>
    </div>
  )
}
