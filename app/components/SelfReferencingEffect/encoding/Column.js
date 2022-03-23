import React from 'react';

export function Column({ title, bgColor, children, color, width }) {
  return (
    <div className="Column" style={{ background: bgColor, width, minHeight: 120 }}>
      <div className="Column__title" style={{ color }}>
        {title}
      </div>
      {children}
    </div>
  );
}
