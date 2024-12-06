import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';
import PasswordValidation from './PasswordValidation';
import { SignUpFormData, PasswordValidations, InputFieldProps } from '@/interfaces/signup.interface';

// Separar el schema de validación
const createSignUpSchema = (t: any) => z.object({
  fullName: z.string()
    .min(3, t.errors.nameMin)
    .max(50, t.errors.nameMax),
  email: z.string()
    .email(t.errors.invalidEmail),
  password: z.string()
    .min(8, t.errors.passwordMin)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      t.errors.passwordRequirements),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: t.errors.passwordMismatch,
  path: ["confirmPassword"],
});

// Componente para el campo de entrada reutilizable
const InputField: React.FC<InputFieldProps> = ({ 
  id, 
  label, 
  type, 
  register, 
  error, 
  onChange 
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      {...register}
      type={type}
      id={id}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    {error && (
      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error.message}</p>
    )}
  </div>
);

const SignUpForm: React.FC = () => {
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage].signup.form;
  
  const [passwordValidations, setPasswordValidations] = React.useState<PasswordValidations>({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const [showValidations, setShowValidations] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(createSignUpSchema(t)),
    mode: 'onChange'
  });

  const password = useWatch({
    control,
    name: 'password',
    defaultValue: ''
  });

  // Mover la lógica de validación a una función separada
  const updatePasswordValidations = React.useCallback((password: string) => {
    setPasswordValidations({
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[@$!%*?&]/.test(password),
    });
  }, []);

  React.useEffect(() => {
    updatePasswordValidations(password);
  }, [password, updatePasswordValidations]);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      // Aquí iría la lógica de registro
      console.log(data);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    register('password').onChange(e);
    const value = e.target.value;
    if (value.length > 0 && !showValidations) {
      setShowValidations(true);
    } else if (value.length === 0) {
      setShowValidations(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="space-y-4">
        <InputField
          id="fullName"
          label={t.fullName}
          type="text"
          register={register('fullName')}
          error={errors.fullName}
        />

        <InputField
          id="email"
          label={t.email}
          type="email"
          register={register('email')}
          error={errors.email}
        />

        <div>
          <InputField
            id="password"
            label={t.password}
            type="password"
            register={register('password')}
            error={errors.password}
            onChange={handlePasswordChange}
          />
          {showValidations && (
            <PasswordValidation 
              password={password}
              validations={passwordValidations}
              t={t}
            />
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {t.confirmPassword}
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            id="confirmPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword.message}</p>
          )}
        </div>
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
  );
};

export default SignUpForm; 