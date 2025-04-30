import React from 'react';
import Home from './components/Home';
import PetSection from './components/petSection';
import ProductSection from './components/ProductSection';
import AdoptionSection from './components/AdoptionSection';
import KnowledgeSection from './components/KnowledgeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Home />
      <PetSection />
      <ProductSection />
      <AdoptionSection />
      <KnowledgeSection />
      <Footer />
    </div>
  );
};
