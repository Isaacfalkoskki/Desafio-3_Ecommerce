import { useState } from 'react';
import logoMonito from "./images/logoMonito.png"
import lupa from "./images/lupa.png"
import logoVnd from "./images/logoVnd.png"
import arrowBottom from "./images/arrowBottom.png"
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    email: '',
    cidade: '',
    estado: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:3000/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    alert('Formulário enviado com sucesso!');
  };

  return (
    <>

      <header style={{ display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "1rem 2rem" 
        }}>

        <img src={logoMonito} height={50} alt="Logo Monito" />

        <nav style={{ 
          display: "flex", 
          gap: "20px", 
          listStyle: "none", 
          fontSize: "16px", 
          fontWeight: "700" 
          }}>

          <li>
            <Link to="/" 
            style={{ 
              textDecoration: "none", 
              paddingLeft: "50px", 
              color: "#003459" }}>Home</Link>
          </li>

          <li>
            <Link to="/filtros" 
            style={{ 
              textDecoration: "none", 
              paddingLeft: "50px", 
              color: "#003459" }}>Category</Link>
          </li>

          <li>
            <Link to="/knowledge" 
            style={{ 
              textDecoration: "none", 
              paddingLeft: "50px", 
              color: "#003459" }}>About</Link>
          </li>

          <li>
            <Link to="/contato" 
            style={{ 
              textDecoration: "none", 
              paddingLeft: "50px", 
              marginRight: "50px", 
              color: "#003459" }}>Contact</Link>
          </li>

        </nav>

        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "20px" 
          }}>

          <div style={{ 
            position: "relative", 
            display: "inline-block" 
            }}>

            <img src={lupa} alt="Search" style={{ 
              position: "absolute", 
              left: "10px", 
              top: "50%", 
              transform: "translateY(-50%)", 
              height: "16px", 
              pointerEvents: "none" 
              }}/>

            <input placeholder="Search something here!" type="text" style={{ 
              borderRadius: "15px", 
              padding: "10px 10px 10px 30px", 
              border: "1px solid #ccc", 
              width: "250px" 
              }}/>

          </div>

          <button
            style={{
              backgroundColor: "#003459",
              padding: "10px 20px",
              borderRadius: "15px",
              border: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#005C99";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#003459";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Join the community
            </a>
          </button>

          <img src={logoVnd}
            style={{
              height: "50px"
            }} />

          <p style={{ 
            fontSize: "16px", 
            fontWeight: "500",
            color: "#002A48" }}>VND</p>

          <button style={{ 
            border: "none" 
            }}><a href="#"><img src={arrowBottom} 
            style={{
            height: "10px" }}/></a></button>

        </div>

      </header>

      <div style={{ 
        paddingLeft: "350px", 
        paddingRight: "300px", 
        paddingTop: "30px" 
        }}>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#003459",
            display: 'grid',
            gridTemplateAreas: `"Name Telefone"`,
            gap: "20px 40px",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            borderRadius: "10px"
          }}>

          <div style={{ 
            gridArea: "Name" 
            }}>

            <label 
            htmlFor="nomeCompleto" 
            style={{
              display: "block", 
              marginBottom: "4px", 
              color: "white",
              fontSize: "20px",
              fontWeight: "700"
            }}>Full Name</label>

            <input 
            name="nomeCompleto" 
            placeholder="Enter your full name" 
            onChange={handleChange} 
            required 
            style={{ 
              width: "100%", 
              padding: "8px", 
              borderRadius: "15px", 
              border: "none" 
              }}/>

          </div>

          <div>

            <label 
            htmlFor="telefone" 
            style={{
              display: "block", 
              marginBottom: "4px", 
              color: "white",
              fontSize: "20px",
              fontWeight: "700" }}>Phone Number</label>

            <input 
            name="telefone" 
            placeholder="Enter your contact phone number" 
            onChange={handleChange} 
            required 
            style={{ 
              width: "80%", 
              padding: "8px", 
              borderRadius: "15px", 
              border: "none" 
              }}/>

          </div>

          <div style={{ 
            gridColumn: "1 / -1" 
            }}>

            <label 
            htmlFor="email" 
            style={{
              display: "block", 
              marginBottom: "4px", 
              color: "white",
              fontSize: "20px",
              fontWeight: "700" }}>Email</label>

            <input 
            name="email" 
            type="email" 
            placeholder="Enter your Email" 
            onChange={handleChange} 
            required 
            style={{ 
              width: "90%", 
              padding: "8px", 
              borderRadius: "15px", 
              border: "none" 
              }}/>

          </div>

          <div>

            <label 
            htmlFor="cidade" 
            style={{
              display: "block", 
              marginBottom: "4px", 
              color: "white",
              fontSize: "20px",
              fontWeight: "700" }}>City</label>

            <input 
            name="cidade" 
            placeholder="Enter your city" 
            onChange={handleChange} 
            required 
            style={{ 
              width: "100%", 
              padding: "8px", 
              borderRadius: "15px", 
              border: "none" 
              }}/>

          </div>

          <div>

            <label 
            htmlFor="estado" 
            style={{
              display: "block", 
              marginBottom: "4px", 
              color: "white",
              fontSize: "20px",
              fontWeight: "700" }}>State</label>

            <input 
            name="estado" 
            placeholder="Enter your local state" 
            onChange={handleChange} 
            required 
            style={{ 
              width: "60%", 
              padding: "8px", 
              borderRadius: "15px", 
              border: "none" 
              }}/>

          </div>

          <button
            type="submit"
            style={{
              gridColumn: "1 / -1",
              backgroundColor: "#3E3E3E",
              color: "white",
              fontSize: "20px",
              fontWeight: "700",
              padding: "12px",
              border: "none",
              borderRadius: "5px",
              marginTop: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5E5E5E";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3E3E3E";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Send
          </button>


        </form>

      </div>

    <Footer />
    </>
  );
}
