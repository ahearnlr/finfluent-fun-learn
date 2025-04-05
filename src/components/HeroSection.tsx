import React from 'react';
import { PiggyBank, Leaf, Coins } from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto py-6 md:py-16 px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Mascot and Floating Elements */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative">
          {/* Squirrel Mascot */}
          <div className="w-60 h-60 md:w-80 md:h-80 bg-finfluent-mint rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/975cda0b-5035-4cbb-a4fa-a689d06b3ac4.png" 
              alt="Fin the Squirrel" 
              className="w-48 md:w-64 object-contain mix-blend-multiply"
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-0 right-0 animate-float">
            <PiggyBank className="w-12 h-12 text-finfluent-orange" />
          </div>
          <div className="absolute bottom-12 left-0 animate-float" style={{ animationDelay: '0.5s' }}>
            <Leaf className="w-10 h-10 text-green-500" />
          </div>
          <div className="absolute bottom-0 right-12 animate-float" style={{ animationDelay: '1s' }}>
            <Coins className="w-10 h-10 text-finfluent-brown" />
          </div>
        </div>
      </div>
      
      {/* Text and CTA */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
          {t('hero.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-lg">
          {t('hero.description')}
        </p>
        <div className="bg-finfluent-brown p-1 rounded-full">
          <WaitlistForm buttonClassName="text-white bg-finfluent-purple hover:bg-finfluent-purple/90 rounded-full px-8 py-6 text-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
