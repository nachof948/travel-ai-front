import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ThemeToggle from './components/shared/ThemeToggle';
import LanguageToggle from './components/shared/LanguageToggle';
import TravelSelectionPage from '@/pages/TravelSelectionPage';

const App: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <ThemeToggle />
        <LanguageToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/travel-selection" element={<TravelSelectionPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
