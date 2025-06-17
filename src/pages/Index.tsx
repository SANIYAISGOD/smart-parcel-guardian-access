
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Dashboard } from '@/components/Dashboard';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;
