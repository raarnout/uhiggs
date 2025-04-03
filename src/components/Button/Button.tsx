import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss'; 

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size,
  outline = false,
  disabled = false,
  block = false,
  square = false,
  pill = false,
  shadow = false,
  className,
  ...props
}) => {
  const btnClass = classNames(
    'btn',
    outline ? `btn-outline-${variant}` : `btn-${variant}`,
    size ? `btn-${size}` : '',
    square ? styles['btn-square'] : '',
    pill ? styles['btn-pill'] : '',
    shadow ? styles['btn-shadowed'] : '', 
    block ? `w-100 d-block` : '',
    className
  );

  return (
    <button 
      className={btnClass} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
