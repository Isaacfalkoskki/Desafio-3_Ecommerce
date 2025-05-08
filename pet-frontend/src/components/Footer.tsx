import React from 'react';
import logoFacebook from "./images/logoFacebook.png"
import logoTwitter from "./images/logoTwitter.png"
import logoInstagram from "./images/logoInstagram.png"
import logoYoutube from "./images/logoYoutube.png"
import logoMonito from "./images/logoMonito.png"

export default function Footer() {
  return (
    <>
    
  {/* BLOCO 1: Formulário */}
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
  )
}
