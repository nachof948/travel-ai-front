import { ReactNode } from 'react';

export interface FormData {
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

export interface PasswordValidationProps {
  password: string;
  validations: PasswordValidations;
  t: {
    validations: {
      minLength: string;
      upperCase: string;
      lowerCase: string;
      number: string;
      specialChar: string;
    };
  };
}

export interface ValidationItemProps {
  isValid: boolean;
  text: string;
} 