import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';
import InputField from '@/components/shared/InputField';

interface SignInFormData {
  email: string;
  password: string;
}

const createSignInSchema = (t: any) => z.object({
  email: z.string().email(t.errors.invalidEmail),
  password: z.string().min(8, t.errors.passwordMin),
});

const SignInForm: React.FC = () => {
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage].signin.form;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(createSignInSchema(t)),
    mode: 'onChange'
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
      // Aquí iría la lógica de inicio de sesión
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="space-y-4">
          <InputField
            id="email"
            label={t.email}
            type="email"
            register={register('email')}
            error={errors.email}
          />

          <InputField
            id="password"
            label={t.password}
            type="password"
            register={register('password')}
            error={errors.password}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-purple-500 dark:hover:bg-purple-600"
          >
            {isSubmitting ? t.submitting : t.submit}
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        {t.noAccount}{' '}
        <Link 
          to="/signup" 
          className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
        >
          {t.signUp}
        </Link>
      </p>
    </>
  );
};

export default SignInForm; 