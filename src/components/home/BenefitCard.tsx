import React from 'react';
import { IBenefitCard } from '@/interfaces/home.interface';

const BenefitCard: React.FC<IBenefitCard> = ({ icon, title, description }) => (
  <div className="group relative cursor-pointer p-[2px] rounded-lg transition-all duration-300">
    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 rounded-lg animated-gradient"></div>
    </div>
    <div className="relative bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-full transition-all duration-300
                    group-hover:shadow-xl backdrop-blur-sm text-center z-10">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default BenefitCard; 