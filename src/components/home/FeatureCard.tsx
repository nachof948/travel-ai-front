import React from 'react';
import { IFeatureCard } from '@/interfaces/home.interface';

const FeatureCard: React.FC<IFeatureCard> = ({ icon, title, description }) => (
  <div className="group relative cursor-pointer p-[2px] rounded-lg transition-all duration-300">
    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 rounded-lg animated-gradient"></div>
    </div>
    <div className="relative bg-white dark:bg-gray-700 p-6 rounded-lg h-full transition-all duration-300
                    group-hover:shadow-xl backdrop-blur-sm z-10">
      <div className="text-purple-600 dark:text-purple-300 mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default FeatureCard; 