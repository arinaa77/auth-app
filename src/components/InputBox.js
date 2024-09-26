import React from 'react';

const InputBox = ({ type, placeholder, value, onChange }) => {
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
