'use client';

import React from 'react';
import { Button } from './button';

interface DialogButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'secondary';
}

export const DialogButton: React.FC<DialogButtonProps> = ({
  children,
  variant = 'secondary',
  className = '',
  ...props
}) => (
  <Button
    type="button"
    variant={variant}
    className={`text-orange-400 hover:text-orange-300 hover:bg-gray-800/80 ${className}`}
    {...props}
  >
    {children}
  </Button>
);
