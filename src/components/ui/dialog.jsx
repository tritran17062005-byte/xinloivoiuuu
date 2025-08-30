import * as React from "react";

export function Dialog({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
        {children}
        <button
          className="mt-4 w-full rounded-lg bg-pink-500 text-white py-2 hover:bg-pink-600"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h3 className="text-lg font-bold">{children}</h3>;
}

export function DialogDescription({ children }) {
  return <p className="text-sm text-gray-600">{children}</p>;
}

export function DialogTrigger({ asChild, children }) {
  return children;
}

export function DialogContent({ children }) {
  return <div>{children}</div>;
}
