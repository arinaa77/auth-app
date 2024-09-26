import React from 'react';

interface InputBoxProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};

export default InputBox;

