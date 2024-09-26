import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 w-full"
    >
      {text}
    </button>
  );
};

export default Button;
