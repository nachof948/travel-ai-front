import { ReactNode } from 'react';

export interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordValidations {
  minLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

export interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  register: any;
  error?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} 