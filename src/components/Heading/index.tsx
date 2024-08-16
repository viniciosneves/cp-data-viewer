import React from 'react';
import classNames from 'classnames';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyle = 'text-gray-900 font-bold';
  
  const levelStyles = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  const combinedClassName = classNames(baseStyle, levelStyles[level], className);

  return <Tag className={combinedClassName}>{children}</Tag>;
};

export default Heading;
