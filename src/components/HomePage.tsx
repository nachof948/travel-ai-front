import React from 'react';
import Hero from './Hero';
import { FaRobot, FaHotel, FaUtensils, FaRoute, FaRegLightbulb } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Sección de Beneficios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            ¿Por qué elegir TravelIA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <BenefitCard 
              icon={<FaRobot className="w-12 h-12 text-purple-600" />}
              title="IA Personalizada"
              description="Recomendaciones únicas basadas en tus preferencias y estilo de viaje"
            />
            <BenefitCard 
              icon={<FaRoute className="w-12 h-12 text-purple-600" />}
              title="Itinerarios Inteligentes"
              description="Optimización automática de rutas y horarios para aprovechar al máximo tu tiempo"
            />
            <BenefitCard 
              icon={<FaRegLightbulb className="w-12 h-12 text-purple-600" />}
              title="Descubrimientos Únicos"
              description="Encuentra joyas ocultas y experiencias locales auténticas"
            />
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Todo lo que necesitas en un solo lugar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaHotel className="w-8 h-8" />}
              title="Hoteles Seleccionados"
              description="Encuentra el alojamiento perfecto según tus preferencias y presupuesto"
            />
            <FeatureCard
              icon={<FaUtensils className="w-8 h-8" />}
              title="Restaurantes Locales"
              description="Descubre la gastronomía local con recomendaciones personalizadas"
            />
            <FeatureCard
              icon={<FaRoute className="w-8 h-8" />}
              title="Excursiones Únicas"
              description="Actividades y tours adaptados a tus intereses"
            />
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Lo que dicen nuestros viajeros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="La IA me ayudó a planear el viaje perfecto. ¡Cada recomendación fue excelente!"
              author="María García"
              location="Madrid, España"
            />
            <TestimonialCard
              text="Ahorré tanto tiempo en la planificación. La app hizo todo el trabajo pesado por mí."
              author="Carlos Ruiz"
              location="Buenos Aires, Argentina"
            />
            <TestimonialCard
              text="Descubrí lugares increíbles que nunca hubiera encontrado por mi cuenta."
              author="Ana Martínez"
              location="México DF, México"
            />
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            ¿Listo para comenzar tu próxima aventura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a miles de viajeros que ya están disfrutando de experiencias únicas con TravelIA
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Comenzar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 