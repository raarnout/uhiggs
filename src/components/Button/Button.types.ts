import React from 'react';

export type BootstrapVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export type BootstrapSize = 'sm' | 'md' | 'lg';

export type BootstrapOutline = true | false;

export type BootstrapDisabled = true | false;

export type BootstrapBlock = true | false;

export type Square = true | false;

export type Pill = true | false;

export type Shadow = true | false;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BootstrapVariant;
  size?: BootstrapSize;
  outline?: BootstrapOutline;
  disabled?: BootstrapDisabled;
  block?: BootstrapBlock;
  square?: Square;
  pill?: Pill;
  shadow?: Shadow;
  iconStart?: string;
  iconEnd?: string;
  className?: string;
}
