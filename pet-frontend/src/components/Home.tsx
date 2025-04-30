import headerDog from "./images/header-dog.png"
import logoMonito from "./images/logoMonito.png"
import lupa from "./images/lupa.png"
import logoVnd from "./images/logoVnd.png"
import arrowBottom from "./images/arrowBottom.png"
import playLogo from './images/playLogo.png'
export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Imagem de fundo */}
      <div style={{
        backgroundImage: `url(${headerDog})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0
      }}></div>

      {/* Conteúdo por cima */}
      <div style={{
        position: "relative",
        zIndex: 1,
        padding: "2rem",
        color: "#fff" // Para visualizar melhor em cima da imagem
      }}>

<header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 2rem",
    
  }}
>
  <img src={logoMonito} height={50} alt="Logo Monito" />

  <nav style={{ display: "flex", gap: "20px", listStyle: "none", fontSize: "16px", fontWeight: "700" }}>
    <li><a style={{ textDecoration: "none", paddingLeft: "50px" }} href="#home">Home</a></li>
    <li><a style={{ textDecoration: "none", paddingLeft: "50px" }} href="#category">Category</a></li>
    <li><a style={{ textDecoration: "none", paddingLeft: "50px" }} href="#about">About</a></li>
    <li><a style={{ textDecoration: "none", paddingLeft: "50px", marginRight: "50px"}} href="#contact">Contact</a></li>
  </nav>

  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
    <div style={{ position: "relative", display: "inline-block" }}>
  <img
    src={lupa}
    alt="Search"
    style={{
      position: "absolute",
      left: "10px",
  
      top: "50%",
      transform: "translateY(-50%)",
      height: "16px",
      pointerEvents: "none"
    }}
  />
  <input
    placeholder="Search something here!"
    type="text"
    style={{
      borderRadius: "15px",
      padding: "10px 10px 10px 30px", // espaço à esquerda para a lupa
      border: "1px solid #ccc",
      width: "250px"
    }}
  />
</div>

    <button
      style={{
        backgroundColor: "#003459",
        padding: "10px 20px",
        borderRadius: "15px",
        border: "none"
      }}
    >
      <a style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} href="#">
        Join the community
      </a>
    </button>

<img src={logoVnd} style={{
  height: "50px"
}}/>
<p style={{
  fontSize: "16px", 
  fontWeight: "500",
  color: "#002A48"
}}>VND</p>
<button style={{
  border: "none"
}}>
  <a href="#"><img src={arrowBottom} style={{
  height: "10px"
}}/></a>
  
</button>


  </div>
</header>

<div style={{
   display: "flex",
   flexDirection: "column",
   alignItems: "flex-start", 
   paddingTop: "100px", 
   paddingLeft: "300px" 
}}>

<h1 style={{
  fontSize: "60px",
  fontWeight: "800",
  color: "#002A48"
}}>One More Friend</h1>

<h2 style={{
  fontSize: "46px",
  fontWeight: "700",
  color: "#002A48"
}}>Thousands more fun!</h2>

<p style={{
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  marginTop: "20px",
  paddingBottom: "40px",
  color: "#002A48"
}}>Having a pet means you have more joy, a new friend, a happy <br /> person who will always be with you to have fun. We have 200+ <br/> different pets that can meet your needs!</p>


<div style={{
  display: "flex",
  alignItems: "center",
  gap: "20px" 
}}>
  <a href="#" style={{
    textDecoration: "none"
  }}>
    <button style={{
      border: "1px solid black",
      padding: "10px 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontWeight: "500",
      backgroundColor: "transparent",
      borderRadius: "30px",
      cursor: "pointer",
      gap: "10px"
    }}>
      View Intro
      <img src={playLogo} style={{
        height: "20px"
      }} />
    </button>
  </a>

  <a href="#" style={{
    fontSize: "16px",
    fontWeight: "500",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#002A48",
    padding: "10px 30px",
    borderRadius: "30px",
    
  
    
  }}>
    Explore Now
  </a>
</div>

</div>


      </div>
    </div>
  );
}
