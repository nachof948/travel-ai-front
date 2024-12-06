import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';
import SignUpForm from '@/components/signup/SignUpForm';
import { useForm } from 'react-hook-form';

const SignUp: React.FC = () => {
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage].signup;
  const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    watch 
  } = useForm();

  const password = watch("password");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp; 