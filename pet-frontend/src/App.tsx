import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import PetSection from './components/petSection';
import ProductSection from './components/ProductSection';
import AdoptionSection from './components/AdoptionSection';
import KnowledgeSection from './components/KnowledgeSection';
import Footer from './components/Footer';
import PetFilterPage from './components/PetFilterPage';
import {PetDetailsPage} from './components/PetDetailPage'; // ✅ certifique-se que esse caminho está certo

function MainPage() {
  return (
    <>
      <Home />
      <PetSection />
      <ProductSection />
      <AdoptionSection />
      <KnowledgeSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/filtros" element={<PetFilterPage />} />
          <Route path="/pets/:sku" element={<PetDetailsPage />} /> {/* ✅ agora está dentro de <Routes> */}
        </Routes>
      </div>
    </Router>
  );
}
