import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/shared/Button';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage].hero;

  const handleStartAdventure = () => {
    navigate('/signup');
  };

  return (
    <div className="relative h-[calc(100vh-0px)] min-h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://media.admagazine.com/photos/648205c5d6ffbb9c781e2789/16:9/w_2560%2Cc_limit/Avio%25CC%2581n.jpg')`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 dark:from-black/80 dark:via-black/60 dark:to-black/80 z-[1] transition-colors duration-500" />
      
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white w-full max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fade-in-delay max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
            <Button 
              variant="primary" 
              onClick={handleStartAdventure}
              className="dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {t.startButton}
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="dark:border-gray-400 dark:hover:bg-gray-800"
            >
              {t.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 