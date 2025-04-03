import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size,
  outline,
  className,
  ...props
}) => {
  const btnClass = classNames(
    'btn',
    outline ? `btn-outline-${variant}` : `btn-${variant}`,
    size ? `btn-${size}` : '',
    className
  );

  return (
    <button 
      className={btnClass} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};
