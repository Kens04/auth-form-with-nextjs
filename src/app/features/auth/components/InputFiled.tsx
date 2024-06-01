import React from "react";

interface InputFiledProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

const InputFiled = ({name, label, type, placeholder}: InputFiledProps) => {
  return (
    <div>
      <label htmlFor={name} className="text-gray-700 text-sm font-bold mb-1 block mt-4">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="border rounded w-full shadow py-3 px-4 text-gray-700 leading-tight focus:outline-none"
      />
    </div>
  );
};

export default InputFiled;
