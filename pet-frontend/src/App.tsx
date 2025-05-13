import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./components/Styles/fonts.css"
import Home from './components/Home'
import PetSection from './components/petSection'
import ProductSection from './components/ProductSection'
import AdoptionSection from './components/AdoptionSection'
import KnowledgeSection from './components/KnowledgeSection'
import Footer from './components/Footer'
import PetFilterPage from './components/PetFilterPage'
import { PetDetailsPage } from './components/PetDetailPage'
import ContactForm from './components/FormPage'

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
  )
}

export default function App() {
  return (
    <Router>
     
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/filtros" element={<PetFilterPage />} />
          <Route path="/pets/:sku" element={<PetDetailsPage />} />
          <Route path="/contato" element={<ContactForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/knowledge" element={<KnowledgeSection />} />

        </Routes>
     
    </Router>
  );
}
