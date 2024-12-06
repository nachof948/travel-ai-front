import React from 'react';
import AsyncSelect from 'react-select/async';
import { Option } from '@/interfaces/travel.interface';

interface DestinationSelectProps {
  label: string;
  placeholder: string;
  loadOptions: (inputValue: string) => Promise<Option[]>;
  onChange: (option: Option | null) => void;
  value: Option | null;
}

const DestinationSelect: React.FC<DestinationSelectProps> = ({
  label,
  placeholder,
  loadOptions,
  onChange,
  value
}) => {
  return (
    <div>
      <label className="block mb-2 text-lg">
        {label}
      </label>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={onChange}
        value={value}
        className="text-gray-800"
        placeholder={placeholder}
        isClearable
      />
    </div>
  );
};

export default DestinationSelect; 