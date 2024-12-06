import React from 'react';
import SignInForm from '@/components/signin/SignInForm';

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Inicia sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Ingresa tus credenciales para continuar
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn; 