import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
} 