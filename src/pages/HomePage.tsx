import React from 'react';
import { FaRobot, FaHotel, FaUtensils, FaRoute, FaRegLightbulb } from 'react-icons/fa';
import Hero from '@/components/Hero';
import { BenefitCard, FeatureCard, TestimonialCard } from '@/components/home';
import Button from '@/components/shared/Button';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/translations';

const HomePage: React.FC = () => {
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage];

  const benefitIcons = [
    <FaRobot className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400" />,
    <FaRoute className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400" />,
    <FaRegLightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400" />
  ];

  const featureIcons = [
    <FaHotel className="w-8 h-8 text-purple-600 dark:text-purple-300" />,
    <FaUtensils className="w-8 h-8 text-purple-600 dark:text-purple-300" />,
    <FaRoute className="w-8 h-8 text-purple-600 dark:text-purple-300" />
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Sección de Beneficios */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 dark:text-white">
            {t.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {t.benefits.cards.map((card, index) => (
              <BenefitCard 
                key={index}
                icon={benefitIcons[index]}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 dark:text-white">
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.features.cards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={featureIcons[index]}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 dark:text-white">
            {t.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard
              text="La IA me ayudó a planear el viaje perfecto. ¡Cada recomendación fue excelente!"
              author="María García"
              location="Madrid, España"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />
            <TestimonialCard
              text="Ahorré tanto tiempo en la planificación. La app hizo todo el trabajo pesado por mí."
              author="Carlos Ruiz"
              location="Buenos Aires, Argentina"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            />
            <TestimonialCard
              text="Descubrí lugares increíbles que nunca hubiera encontrado por mi cuenta."
              author="Ana Martínez"
              location="México DF, México"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-800 dark:to-blue-700 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Button 
            variant="primary" 
            className="bg-white dark:bg-gray-800 text-purple-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-500"
          >
            {t.cta.button}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 