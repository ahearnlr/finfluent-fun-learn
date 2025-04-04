
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FinancialTopics from '@/components/FinancialTopics';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FinancialTopics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
