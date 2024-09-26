import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
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
