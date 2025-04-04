import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

/**
The Button component is a flexible, reusable interface element built on top of Bootstrap 5. It enhances the standard Bootstrap button with custom styling options, icon support, and improved interaction design, making it ideal for modern React applications.

Designed with scalability and accessibility in mind, the component supports:
- All standard Bootstrap variants and sizes
- Additional props like outline, square, shadow, iconStart, and iconEnd
- Seamless integration with Bootstrap Icons
- Custom styles via modular SCSS
- Full compatibility with native button attributes (type, disabled, onClick, etc.)

Whether you're building simple forms, complex dashboards, or action-heavy interfaces, this button adapts to your design and interaction needs.
 */
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
  iconStart,
  iconEnd,
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
    iconStart || iconEnd ? styles['btn-icon-wrapper'] : '',
    className
  );

  return (
    <button className={btnClass} onClick={onClick} disabled={disabled} {...props}>
      {iconStart && <i className={`bi bi-${iconStart} ${styles['btn-icon']}`} aria-hidden="true" />}
      {children}
      {iconEnd && <i className={`bi bi-${iconEnd} ${styles['btn-icon']}`} aria-hidden="true" />}
    </button>
  );
};
