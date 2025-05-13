import headerDog from "./images/header-dog.png"
import logoMonito from "./images/logoMonito.png"
import lupa from "./images/lupa.png"
import logoVnd from "./images/logoVnd.png"
import arrowBottom from "./images/arrowBottom.png"
import playLogo from "./images/playLogo.png"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div id="home"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden"
      }}>

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
      }}>

      </div>

      <div style={{
        position: "relative",
        zIndex: 1,
        padding: "2rem",
        color: "#fff"
      }}>

        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem 2rem",
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
                  color: "#003459"
                }}>Home</Link>
            </li>

            <li>
              <Link to="/filtros"
                style={{
                  textDecoration: "none",
                  paddingLeft: "50px",
                  color: "#003459"
                }}>Category</Link>
            </li>

            <li>
              <Link to="/knowledge"
                style={{
                  textDecoration: "none",
                  paddingLeft: "50px",
                  color: "#003459"
                }}>About</Link>
            </li>

            <li>
              <Link to="/contato"
                style={{
                  textDecoration: "none",
                  paddingLeft: "50px",
                  marginRight: "50px",
                  color: "#003459"
                }}>Contact</Link>
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
                }} />

              <input
                placeholder="Search something here!"
                type="text"
                style={{
                  borderRadius: "15px",
                  padding: "10px 10px 10px 30px",
                  border: "1px solid #ccc",
                  width: "250px"
                }} />

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

                <img src={arrowBottom} style={{
                  height: "10px"
                }} /></a>

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
          }}>Having a pet means you have more joy, a new friend, a happy <br /> person who will always be with you to have fun. We have 200+ <br /> different pets that can meet your needs!</p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}>

            <a href="#"
              style={{
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
                gap: "10px",
                transition: "all 0.3s ease"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.borderColor = "#00BFFF";
                  e.currentTarget.style.color = "#00BFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "black";
                  e.currentTarget.style.color = "black";
                }}>
                View Intro
                <img src={playLogo}
                  style={{
                    height: "20px"
                  }} />
              </button>
            </a>

            <a href="#"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
                color: "white",
                backgroundColor: "#002A48",
                padding: "10px 30px",
                borderRadius: "30px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#00BFFF";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#002A48";
                e.currentTarget.style.transform = "scale(1)"; 
              }}>
              Explore Now
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}
