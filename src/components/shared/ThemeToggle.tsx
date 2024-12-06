import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/features/themeSlice';

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 
                 transition-all duration-500 hover:scale-110 z-50 shadow-lg"
      aria-label="Toggle theme"
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <FaSun
          className={`absolute w-full h-full text-yellow-500 transition-all duration-500
                     ${isDarkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
        />
        <FaMoon
          className={`absolute w-full h-full text-blue-500 transition-all duration-500
                     ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle; 