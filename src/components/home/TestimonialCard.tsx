import React from 'react';
import { ITestimonialCard } from '@/interfaces/home.interface';

const TestimonialCard: React.FC<ITestimonialCard> = ({ text, author, location, image }) => (
  <div className="group relative cursor-pointer p-[2px] rounded-lg transition-all duration-300">
    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 rounded-lg animated-gradient"></div>
    </div>
    <div className="relative bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-full transition-all duration-300
                    group-hover:shadow-xl backdrop-blur-sm z-10">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-purple-500">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic">"{text}"</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800 dark:text-gray-200">{author}</p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{location}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard; 