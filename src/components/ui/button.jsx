import * as React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium shadow-sm transition bg-pink-500 text-white hover:bg-pink-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
