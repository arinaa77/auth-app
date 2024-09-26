import React from 'react';

const PasswordBox = ({ value, onChange }) => {
  return (
    <input
      type="password"
      placeholder="Password"
      value={value}
      onChange={onChange}
      className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};

export default PasswordBox;
