import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { PasswordValidationProps, ValidationItemProps } from '@/interfaces/signup.interface';

const ValidationItem: React.FC<ValidationItemProps> = ({ isValid, text }) => (
  <div className="flex items-center space-x-2">
    {isValid ? (
      <FaCheck className="text-green-500" />
    ) : (
      <FaTimes className="text-red-500" />
    )}
    <span className={`text-sm ${isValid ? 'text-green-500' : 'text-red-500'}`}>
      {text}
    </span>
  </div>
);

const PasswordValidation: React.FC<PasswordValidationProps> = ({ password, validations, t }) => {
  return (
    <div className="mt-2 space-y-2">
      <ValidationItem 
        isValid={validations.minLength} 
        text={t.validations.minLength} 
      />
      <ValidationItem 
        isValid={validations.hasUpperCase} 
        text={t.validations.upperCase} 
      />
      <ValidationItem 
        isValid={validations.hasLowerCase} 
        text={t.validations.lowerCase} 
      />
      <ValidationItem 
        isValid={validations.hasNumber} 
        text={t.validations.number} 
      />
      <ValidationItem 
        isValid={validations.hasSpecialChar} 
        text={t.validations.specialChar} 
      />
    </div>
  );
};

export default PasswordValidation; 