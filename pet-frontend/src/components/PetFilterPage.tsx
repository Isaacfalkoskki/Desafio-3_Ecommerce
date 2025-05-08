import React, { useEffect, useState } from 'react';
import logoMonito from "./images/logoMonito.png";
import lupa from "./images/lupa.png";
import logoVnd from "./images/logoVnd.png";
import arrowBottom from "./images/arrowBottom.png";
import arrowRigth from "./images/arrowRight.png";
import bannerFilterPet from "./images/bannerFilterPet.png";
import playLogoWhite from "./images/LogoPlayWhite.png";
import logoFacebook from "./images/logoFacebook.png"
import logoTwitter from "./images/logoTwitter.png"
import logoInstagram from "./images/logoInstagram.png"
import logoYoutube from "./images/logoYoutube.png"



import { Pet } from '../types/Pet';
import PetFilter from './PetFilter';
import { PetCard } from './PetCard';

export default function PetFilterPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filters, setFilters] = useState({
    gender: [] as string[],
    size: [] as string[],
    vaccinated: [] as string[],
  });

  const fetchPets = async (activeFilters: typeof filters) => {
    const queryParams = new URLSearchParams();
    
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value.length) {
        queryParams.set(key, value.join(',')); // Garante que múltiplas seleções sejam enviadas corretamente
      }
    });

    const response = await fetch(`http://localhost:3000/pets?${queryParams.toString()}`);
    const data = await response.json();
    setPets(data);
  };

  useEffect(() => {
    fetchPets({ gender: [], size: [], vaccinated: [] });
  }, []);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    fetchPets(newFilters);
  };

  return (
    <>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 2rem" }}>
        <img src={logoMonito} height={50} alt="Logo Monito" />
        <nav style={{ display: "flex", gap: "20px", listStyle: "none", fontSize: "16px", fontWeight: "700" }}>
          <li><a style={{ textDecoration: "none", paddingLeft: "50px", color: "#003459" }} href="#home">Home</a></li>
          <li><a style={{ textDecoration: "none", paddingLeft: "50px", color: "#003459" }} href="#category">Category</a></li>
          <li><a style={{ textDecoration: "none", paddingLeft: "50px", color: "#003459" }} href="#about">About</a></li>
          <li><a style={{ textDecoration: "none", paddingLeft: "50px", marginRight: "50px", color: "#003459" }} href="#contact">Contact</a></li>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img src={lupa} alt="Search" style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", height: "16px", pointerEvents: "none" }} />
            <input placeholder="Search something here!" type="text" style={{ borderRadius: "15px", padding: "10px 10px 10px 30px", border: "1px solid #ccc", width: "250px" }} />
          </div>
          <button style={{ backgroundColor: "#003459", padding: "10px 20px", borderRadius: "15px", border: "none" }}>
            <a style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} href="#">Join the community</a>
          </button>
          <img src={logoVnd} style={{ height: "50px" }} />
          <p style={{ fontSize: "16px", fontWeight: "500", color: "#002A48" }}>VND</p>
          <button style={{ border: "none" }}><a href="#"><img src={arrowBottom} style={{ height: "10px" }} /></a></button>
        </div>
      </header>

      <div style={{ paddingLeft: "300px", paddingRight: "300px", paddingTop: "30px" }}>
        <div>
          <a href="#" style={{ textDecoration: "none", fontSize: "15px", fontWeight: "500", color: "#667479", paddingRight: "10px" }}>Home</a>
          <img src={arrowRigth} style={{ paddingRight: "10px" }} />
          <a href="#" style={{ textDecoration: "none", fontSize: "15px", fontWeight: "500", color: "#667479", paddingRight: "10px" }}>Dog</a>
          <img src={arrowRigth} style={{ paddingRight: "10px" }} />
          <a href="#" style={{ textDecoration: "none", fontSize: "15px", fontWeight: "500", color: "#667479", paddingRight: "10px" }}>Small Dog</a>
        </div>
        <div>
          <div style={{ position: "relative", width: "100%", height: "auto", paddingTop: "10px" }}>
            <img src={bannerFilterPet} style={{ height: "100%", width: "100%", display: "block", zIndex: 0 }} />
            <div style={{ paddingRight: "100px", position: "absolute", top: "20%", right: "10px", zIndex: 1, color: "#FDFDFD", textAlign: "right" }}>
              <h1 style={{ fontSize: "52px", fontWeight: "800", paddingBottom: "20px" }}>One More Friend</h1>
              <h2 style={{ fontSize: "36px", fontWeight: "700", paddingBottom: "20px" }}>Thousand More Fun!</h2>
              <p style={{ fontSize: "15px", fontWeight: "500", paddingBottom: "20px", lineHeight: "20px" }}>
                Having a pet means you have more joy, a new friend, a happy person <br /> who will always be with you to have fun. We have 200+ different pets <br /> that can meet your needs!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '2rem 300px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        <PetFilter onFilterChange={handleFilterChange} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', flexGrow: 1 }}>
          {pets.map((pet) => (
            <PetCard key={pet.sku} pet={pet} />
          ))}
        </div>
      </div>
      <div style={{
    backgroundColor: "#FFE7BA",
    borderRadius: "20px 20px 0 0",
    display: "flex",
    justifyContent: "center",
    padding: "30px",
    marginTop: "50px",
    paddingTop: "80px"
  }}>
    <div style={{
      backgroundColor: "#003459",
      borderRadius: "20px",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    }}>
      <p style={{ 
        color: "white",
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "36px",
        margin: 0 
      }}>
        Register now so you don't miss <br /> our programs
      </p>

      <div style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px"
      }}>
        <input
          type="email"
          placeholder="Enter your Email"
          style={{
            border: "1px solid black",
            padding: "10px 100px 10px 10px",
            marginRight: "10px",
            borderRadius: "5px",
            flex: 1
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#003459",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "500"
          }}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  </div>

  {/* BLOCO 2: Navegação */}
  <div style={{
    backgroundColor: "#FFE7BA", // mesmo fundo para integrar visualmente
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-around",
    paddingLeft: "300px",
    paddingRight: "400px",
    paddingBottom: "60px"
    
  }}>
    <nav style={{
      display: "flex",
      gap: "20px",
      listStyle: "none",
      fontSize: "16px",
      fontWeight: "700",
    }}>
      <li><a style={{ 
        textDecoration: "none", 
        paddingRight: "50px", 
        paddingLeft: "100px",
        color: "#00171F" }} href="#home">Home</a></li>
      <li><a style={{ 
        textDecoration: "none", 
        paddingRight: "50px",
        color: "#00171F" }} href="#category">Category</a></li>
      <li><a style={{ 
        textDecoration: "none", 
        paddingRight: "50px",
        color: "#00171F" }} href="#about">About</a></li>
      <li><a style={{ 
        textDecoration: "none",
        color: "#00171F" }} href="#contact">Contact</a></li>
    </nav>

    <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "40px"
    }}>
<img src={logoFacebook} />
<img src={logoTwitter} />
<img src={logoInstagram} />
<img src={logoYoutube} />


    </div>
   
  </div>


<footer style={{
  backgroundColor: "#FFE7BA",
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "300px",
  paddingRight: "400px",
  borderTop: "1px solid black",
  
}}>

<p style={{
  fontSize: "14px",
  fontWeight: "500",
  color: "#667479",
  paddingLeft: "100px"
}}>&copy; 2022 Monito. All rights reserved.</p>

<img src={logoMonito} style={{
  width: "150px"
}}/>

<div>
  <a href="#" style={{
    textDecoration: "none", 
    color: "#667479",
    paddingRight: "30px"
  }}>Terms of Service</a>

  <a href="#" style={{
    textDecoration: "none", 
    color: "#667479",
  }}>Privacy Policy</a>
</div>


</footer>
    </>
  );
}