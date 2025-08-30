import * as React from "react";

export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700 ${className}`}
    >
      {children}
    </span>
  );
}
