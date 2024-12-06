import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLanguage } from '@/store/features/languageSlice';

const LanguageToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

  return (
    <div className="fixed top-4 left-4 flex gap-2 z-50">
      <button
        onClick={() => dispatch(setLanguage('es'))}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${
          currentLanguage === 'es' ? 'border-purple-500 scale-110' : 'border-transparent hover:border-gray-300'
        }`}
        aria-label="Español"
      >
        <img
          src="https://flagicons.lipis.dev/flags/4x3/es.svg"
          alt="Español"
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => dispatch(setLanguage('en'))}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${
          currentLanguage === 'en' ? 'border-purple-500 scale-110' : 'border-transparent hover:border-gray-300'
        }`}
        aria-label="English"
      >
        <img
          src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
          alt="English"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageToggle; 