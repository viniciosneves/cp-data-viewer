import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
}

const Select: React.FC<SelectProps> = ({ id, children, ...rest }) => {
    return (
        <select
            {...rest}
            id={id}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
            {children}
        </select>
    );
};

export default Select;