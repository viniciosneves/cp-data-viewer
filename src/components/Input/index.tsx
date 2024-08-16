import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<InputProps> = ({ id, type = 'text', ...rest }) => {
  return (
    <input
      id={id}
      type={type}
      {...rest}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    />
  );
};

export default Input;