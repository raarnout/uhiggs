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

export type BootstrapSize = 'sm' | 'lg';

export type BootstrapOutline = true | false;

export type BootstrapSquare = true | false;

export type BootstrapPill = true | false;

export type BootstrapShadow = true | false;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BootstrapVariant;
  size?: BootstrapSize;
  outline?: BootstrapOutline;
  square?: BootstrapSquare;
  pill?: BootstrapPill;
  shadow?: BootstrapShadow;
  className?: string;
}
