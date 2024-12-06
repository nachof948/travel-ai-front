import React, { useState } from 'react';
import { InputFieldProps } from '@/interfaces/signup.interface';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const InputField: React.FC<InputFieldProps> = ({ 
  id, 
  label, 
  type, 
  register, 
  error, 
  onChange 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          {...register}
          type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
          id={id}
          onChange={onChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center pr-3"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            )}
          </button>
        )}
      </div>
      {error && !isPasswordField && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error.message}</p>
      )}
    </div>
  );
};

export default InputField; 