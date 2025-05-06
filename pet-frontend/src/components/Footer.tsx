import React from 'react';

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
    justifyContent: "center"
  }}>
    <nav style={{
      display: "flex",
      gap: "20px",
      listStyle: "none",
      fontSize: "16px",
      fontWeight: "700"
    }}>
      <li><a style={{ textDecoration: "none", paddingLeft: "50px" }} href="#home">Home</a></li>
      <li><a style={{ textDecoration: "none", paddingLeft: "50px" }} href="#category">Category</a></li>
      <li><a style={{ textDecoration: "none", paddingLeft: "50px" }} href="#about">About</a></li>
      <li><a style={{ textDecoration: "none", paddingLeft: "50px", marginRight: "50px"}} href="#contact">Contact</a></li>
    </nav>
  </div>






    </>
  )
}
