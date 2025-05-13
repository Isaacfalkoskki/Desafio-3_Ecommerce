import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Pet } from "../types/Pet";
import logoMonito from "./images/logoMonito.png";
import lupa from "./images/lupa.png";
import logoVnd from "./images/logoVnd.png";
import arrowRight from "./images/arrowRight.png";
import arrowBottom from "./images/arrowBottom.png";
import chatLogo from "./images/chatLogo.png";
import logoHeart from "./images/logoHeart.png";
import logoGuarantee from "./images/logoGuarantee.png";
import logoShare from "./images/logoShare.png";
import logoFacebookGray from "./images/loogoFacebookGray.png";
import logoTwitterGray from "./images/logoTwitterGray.png";
import logoInstagramGray from "./images/logoInstagramGray.png";
import logoYoutubeGray from "./images/logoYoutubeGray.png";
import { ImageCarousel } from "./ImageCarousel";
import Footer from "./Footer";

const images = [
  "/imagesLovely/imageLovely1.png",
  "/imagesLovely/imageLovely2.png",
  "/imagesLovely/imageLovely3.png",
  "/imagesLovely/imageLovely4.png",
  "/imagesLovely/imageLovely5.png",
];

export const PetDetailsPage = () => {
  const { sku } = useParams<{ sku: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [randomPets, setRandomPets] = useState<Pet[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    if (!sku) {
      setError("SKU não encontrado.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/pets/${sku}`)
      .then((res) => res.json())
      .then((data) => {
        setPet(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setError("Erro ao carregar os dados do pet");
        setLoading(false);
      });
  }, [sku]);

  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((res) => res.json())
      .then((data: Pet[]) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setRandomPets(shuffled.slice(0, 4));
      });
  }, []);

  if (loading) 
    return <div>Carregando pet...</div>;

  if (error) 
    return <div>{error}</div>;

  if (!pet) 
    return <div>Pet não encontrado.</div>;

  return (
    <>

      <header style={{ 
        display: "flex", 
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

            <img src={lupa} 
            alt="Search" 
            style={{ 
              position: "absolute", 
              left: "10px", 
              top: "50%", 
              transform: "translateY(-50%)", 
              height: "16px", 
              pointerEvents: "none" 
              }}/>

            <input 
            placeholder="Search something here!" 
            type="text" 
            style={{ 
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
            color: "#002A48"
          }}>VND</p>

          <button style={{
            border: "none"
          }}>
            <a href="#">
              <img src={arrowBottom}
                style={{
                  height: "10px"
                }} /></a>

          </button>

        </div>

      </header>

      <div style={{ 
        paddingLeft: "350px", 
        paddingRight: "300px", 
        paddingTop: "30px" 
        }}>

        <div style={{ 
          display: "flex", 
          gap: "40px", 
          padding: "40px" 
          }}>

          <div>

            <img 
            src={pet.image_url} 
            alt={pet.name} 
            style={{ width: "400px", 
            borderRadius: "10px", 
            paddingBottom: "20px" 
            }}/>

            <div style={{ 
              display: "flex", 
              justifyContent: "space-around", 
              alignItems: "center", 
              backgroundColor: "#FFE7BA", 
              padding: "5px 10px", 
              marginBottom: "20px", 
              borderRadius: "10px", 
              fontSize: "10px" 
              }}>

              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "10px"
                }}>

                <img src={logoHeart} />

                <p>100% health guarantee for pets</p>

              </div>

              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "10px" }}>

                <img src={logoGuarantee} />

                <p>100% guarantee of pet identification</p>

              </div>

            </div>

            <div style={{ 
              display: "flex", 
              alignContent: "center", 
              gap: "10px" 
              }}>

              <img src={logoShare} />

              <p style={{ 
                color: "#002A48", 
                fontSize: "15px", 
                fontWeight: "700", 
                paddingRight: "10px" }}>Share:</p>
                
              <a href="#"><img src={logoFacebookGray} /></a>
              <a href="#"><img src={logoTwitterGray} /></a>
              <a href="#"><img src={logoInstagramGray} /></a>
              <a href="#"><img src={logoYoutubeGray} /></a>

            </div>

          </div>

          <div>

            <p style={{ 
              fontSize: "15px", 
              fontWeight: "500", 
              paddingBottom: "25px" 
              }}>

              <Link to="/" 
              style={{ 
                textDecoration: "none", 
                paddingRight: "10px", 
                color: "#667479" }}>Home</Link>

              <img src={arrowRight} 
              style={{ 
                paddingRight: "10px" 
                }}/>

              <Link to="/filtros" 
              style={{ 
                textDecoration: "none", 
                paddingRight: "10px", 
                color: "#667479" }}>Dog</Link>

              <img src={arrowRight} 
              style={{ 
                paddingRight: "10px" 
                }}/>

              <a href="#" style={{ 
                textDecoration: "none", 
                color: "#667479" }}>{pet.name}</a>

            </p>

            <p style={{ 
              color: "#99A2A5", 
              fontSize: "15px", 
              fontWeight: "500", 
              paddingBottom: "10px" }}>SKU #{pet.sku}</p>

            <h1 style={{ 
              fontSize: "24px", 
              fontWeight: "700", 
              paddingBottom: "10px" }}>{pet.name}</h1>

            <h2 style={{ 
              fontSize: "20px", 
              fontWeight: "700", 
              paddingBottom: "25px" }}>{pet.price} VND</h2>

            <div style={{
              display: "flex",
              gap: "20px"
            }}>

              <a
                href="/contato"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#002A48",
                  padding: "15px 30px",
                  borderRadius: "30px",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#00BFFF";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#002A48";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Contact us
              </a>

              <a
                href="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    border: "2px solid #002A48",
                    padding: "15px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: "transparent",
                    borderRadius: "30px",
                    cursor: "pointer",
                    gap: "10px",
                    transition: "all 0.3s ease",
                    color: "#002A48",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.borderColor = "#00BFFF";
                    e.currentTarget.style.color = "#00BFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "#002A48";
                    e.currentTarget.style.color = "#002A48";
                  }}
                >
                  <img
                    src={chatLogo}
                    style={{
                      height: "20px",
                    }}
                  />
                  Chat with Monito
                </button>
              </a>


            </div>

            <table style={{ 
              marginTop: "20px", 
              lineHeight: "2", 
              color: "#667479", 
              fontSize: "15px", 
              fontWeight: "500" 
              }}>

              <tbody>

                <tr>
                  <td style={{ 
                    paddingRight: "200px" }}>SKU:</td><td>{pet.sku}
                  </td>
                </tr>

                <tr>
                  <td>
                    Gender:
                  </td>

                  <td>
                    {pet.gender === "FEMALE" ? "Female" : "Male"}
                  </td>
                </tr>

                <tr>
                  <td>
                    Age:
                  </td>

                    <td>
                      {pet.age} months
                    </td>
                </tr>
              
                <tr>
                  <td>
                    Size:
                  </td>

                  <td>
                    {pet.size}
                  </td>
                </tr>

                <tr>
                  <td>
                    Vaccinated:
                  </td>
                  
                  <td>
                    {pet.vaccinated ? "Yes" : "No"}
                  </td>
                </tr>

                <tr>
                  <td>
                    Dewormed:
                  </td>
                  
                  <td>
                    {pet.dewormed ? "Yes" : "No"}
                  </td>
                </tr>

                <tr>
                  <td>
                    Cert:
                  </td>

                  <td>
                    {pet.cert ? "Yes" : "No"}
                  </td>
                </tr>

                <tr>
                  <td>
                    Microchip:
                  </td>
                  
                  <td>
                    {pet.microchip ? "Yes" : "No"}
                  </td>
                </tr>

                <tr>
                  <td>
                    Location:
                  </td>
                  
                  <td>
                    {pet.location}
                  </td>
                </tr>

                <tr>
                  <td>
                    Published Date:
                  </td>
                  
                  <td>
                    {pet.created_at}
                  </td>
                </tr>

                <tr>
                  <td>
                    Additional Information:
                  </td>

                  <td>
                    {pet.additional_information}
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        <div>

          <h2 style={{ 
            fontSize: "25px", 
            fontWeight: "700", 
            color: "#003459" }}>Our lovely customer</h2>

          <ImageCarousel images={images} />

        </div>

        <div style={{ 
          paddingTop: "70px", 
          paddingRight: "200px" 
          }}>

          <p style={{ 
            fontSize: "16px", 
            fontWeight: "500", 
            paddingBottom: "10px" }}>What's new?</p>

          <header style={{ 
            display: "flex", 
            justifyContent: "space-between",
             alignItems: "start" 
             }}>

            <div>

              <h2 style={{ 
                fontSize: "24px", 
                fontWeight: "700", 
                color: "#003459" }}>See more puppies</h2>

            </div>

          </header>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            paddingTop: "20px"
          }}>

            {randomPets.map((pet) => (
              <div key={pet.sku} style={{
                backgroundColor: "#F7F7F7",
                borderRadius: "10px",
                alignContent: "center",
                width: "230px"
              }}>

                <a href={`/pets/${pet.sku}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}>

                  <img src={pet.image_url}
                    alt={pet.name}
                    style={{
                      width: "90%",
                      padding: "10px 10px 10px 10px"
                      }}/>

                </a>

                <h2 style={{
                  fontSize: "21px",
                  fontWeight: "700",
                  paddingBottom: "10px",
                  paddingLeft: "10px" }}>{pet.name}</h2>

                <div>

                  <span style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#667479",
                    paddingLeft: "10px",
                    paddingRight: "10px" }}>Gene: {pet.gender === 'MALE' ? 'Male' : 'Female'}</span>
                    
                    •

                  <span style={{
                    paddingLeft: "10px",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#667479" }}>Age: {pet.age.toString().padStart(2, '0')} months</span>

                </div>

                <p style={{
                  paddingLeft: "10px",
                  fontSize: "16px",
                  fontWeight: "700",
                  paddingTop: "10px",
                  paddingBottom: "20px" }}> {pet.price.toLocaleString('vi-VN')} VND

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

   <Footer />
   
   </>

  );
};
