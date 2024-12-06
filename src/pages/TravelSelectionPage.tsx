import React, { useState } from 'react';
import { Option } from '@/interfaces/travel.interface';
import TravelSelectionContainer from '@/components/travel/TravelSelectionContainer';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';

const TravelSelectionPage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Option | null>(null);
  const [selectedCity, setSelectedCity] = useState<Option | null>(null);
  
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage].travelSelection;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t.title}
          </h1>
          
          <TravelSelectionContainer
            onCountrySelect={setSelectedCountry}
            onCitySelect={setSelectedCity}
            selectedCountry={selectedCountry}
            selectedCity={selectedCity}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelSelectionPage; 