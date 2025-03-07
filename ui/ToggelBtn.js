"use client";
import { useState } from "react";

export default function ToggelBtn() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      className={`relative cursor-pointer w-14 h-7 flex items-center rounded-full p-1 transition-colors ${
        enabled ? "bg-green-400" : "bg-gray-300"
      }`}
      onClick={() => setEnabled(!enabled)}
    >
      <span
        className={`block w-5 h-5 bg-white rounded-full shadow-md transform transition ${
          enabled ? "translate-x-7" : "translate-x-0"
        }`}
      />
      <span className="ml-2 text-sm">{enabled ? "" : ""}</span>
    </button>
  );
}
