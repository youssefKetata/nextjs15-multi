"use client";

import { Dispatch } from "react";

export default function Sidebar({
  isRTL = false,
  isOpen,
  setIsOpen,
  draggableMarkup,
  parent,
}: {
  isRTL: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  draggableMarkup: JSX.Element | null;
  parent: string | null;
}) {
  return (
    <div
      className={`bg-dark-foreground text-white w-64 fixed top-0 h-full transition-all duration-300 ease-in-out ${
        isRTL ? "right-0" : "left-0"
      } ${
        isOpen
          ? "translate-x-0"
          : isRTL
          ? "translate-x-full"
          : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <ul className="mt-4">
          <li className="mb-2">Home</li>
          <li className="mb-2">About</li>
          <li className="mb-2">Contact</li>
        </ul>
        {/* widgets */}
        <div className="p-4">
          <h2 className="text-xl font-bold">Sidebar</h2>
          <div className="mt-4 space-y-4">
          {parent === null ? draggableMarkup : null}
          </div>
        </div>
        {/* close */}
        <button
          onClick={() => setIsOpen(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
            Close Sidebar
        </button>
      </div>
    </div>
  );
}
