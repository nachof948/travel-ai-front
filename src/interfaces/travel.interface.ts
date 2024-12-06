export interface Option {
  value: string;
  label: string;
}

export interface TravelSelectionProps {
  onCountrySelect: (option: Option | null) => void;
  onCitySelect: (option: Option | null) => void;
  selectedCountry: Option | null;
  selectedCity: Option | null;
} 