import { useState } from "react";

export default function Input({ label, placeholder, type, bg }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-64">
      <label
        className={`absolute left-2 top-2 text-gray-500 transition-all ${
          isFocused || value ? "top-0 text-xs text-blue-500" : "top-2 text-base"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        className={`bg-[${bg}] w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
