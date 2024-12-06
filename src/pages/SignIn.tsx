import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '@/components/signin/SignInForm';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';

const SignIn: React.FC = () => {
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage].signin;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md relative">
        <Link 
          to="/" 
          className="absolute top-4 left-4 text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">{t.backToHome}</span>
        </Link>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {t.subtitle}
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;