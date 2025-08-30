
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Dashboard from '@/components/Dashboard';
import SmartContractVisualization from '@/components/SmartContractVisualization';
import ImpactSection from '@/components/ImpactSection';
import SecuritySection from '@/components/SecuritySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <Dashboard />
        <SmartContractVisualization />
        <ImpactSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
