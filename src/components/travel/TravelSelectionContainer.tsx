import React from 'react';
import { AsyncPaginate } from '@select/react-select-async-paginate';
import countries from 'world-countries';
import cities from 'cities.json';
import { Option, TravelSelectionProps } from '@/interfaces/travel.interface';
import DestinationSelect from './DestinationSelect';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';

const TravelSelectionContainer: React.FC<TravelSelectionProps> = ({
  onCountrySelect,
  onCitySelect,
  selectedCountry,
  selectedCity
}) => {
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage].travelSelection;

  const loadCountries = (inputValue: string) =>
    new Promise<Option[]>((resolve) => {
      const formattedCountries = countries.map(country => ({
        value: country.cca2,
        label: country.name.common,
        // Guardamos información adicional que nos será útil
        latlng: country.latlng,
        region: country.region,
        subregion: country.subregion
      })).filter(country =>
        country.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      resolve(formattedCountries);
    });

  const loadCities = (inputValue: string) =>
    new Promise<Option[]>((resolve) => {
      if (!selectedCountry) {
        resolve([]);
        return;
      }

      // @ts-ignore - cities.json tiene una estructura diferente
      const citiesOfCountry = cities.filter(
        city => city.country === selectedCountry.value
      ).map(city => ({
        value: city.name,
        label: city.name,
        // Guardamos información adicional
        lat: city.lat,
        lng: city.lng,
        population: city.population
      })).filter(city =>
        city.label.toLowerCase().includes(inputValue.toLowerCase())
      )
      // Ordenar por población para mostrar primero las ciudades más grandes
      .sort((a, b) => (b.population || 0) - (a.population || 0))
      // Limitar a las primeras 100 ciudades más grandes
      .slice(0, 100);

      resolve(citiesOfCountry);
    });

  const handleCountryChange = (option: Option | null) => {
    onCountrySelect(option);
    onCitySelect(null);
  };

  return (
    <div className="space-y-6">
      <DestinationSelect
        label={t.selectCountry}
        placeholder={t.countryPlaceholder}
        loadOptions={loadCountries}
        onChange={handleCountryChange}
        value={selectedCountry}
      />

      {selectedCountry && (
        <DestinationSelect
          label={t.selectCity}
          placeholder={t.cityPlaceholder}
          loadOptions={loadCities}
          onChange={onCitySelect}
          value={selectedCity}
        />
      )}
    </div>
  );
};

export default TravelSelectionContainer; 