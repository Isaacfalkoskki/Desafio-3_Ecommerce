import arrowRight from "./images/arrowRight.png"
import bannerAdoptionSection from "./images/BannerAdoptionSection.png"
import bannerPartners from "./images/bannerPartners.png"
import logoAdoption from "./images/logoAdoption.png"
import playLogo from "./images/playLogo.png"

export default function AdoptionSection() {
  return (
    <>

      <div style={{
        paddingLeft: "200px",
        paddingTop: "70px",
        paddingRight: "200px"
      }}>

        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start"
        }}>

          <div>
            <h2 style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#000000"
            }}>
              Proud to be part of
              <strong style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "#003459"
              }}> Pet Sellers</strong>
            </h2>
          </div>

          <div>
            <a href="#" style={{
              textDecoration: "none"
            }}>
              <button style={{
                border: "2px solid #003459",
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
                color: "#003459",

              }}>
                View all our sellers
                <img src={arrowRight} style={{
                  height: "10px"
                }} />
              </button>
            </a>

          </div>

        </header>

        <div>
          <img src={bannerPartners} style={{
            width: "100%",
            paddingTop: "20px",
            paddingBottom: "20px"
          }} />
        </div>

        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <img src={bannerAdoptionSection} style={{
            height: "100%",
            width: "100%",
            display: "block",
            zIndex: 0
          }} />

          <div style={{
            paddingLeft: "100px",
            position: "absolute",
            top: "20%",
            left: "10px",
            zIndex: 1,
            color: "#003459",
            textAlign: "left",

          }}>
            <h1 style={{
              fontSize: "52px",
              fontWeight: "800",
              paddingBottom: "20px"
            }}>Adoption <img src={logoAdoption} /></h1>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "700",
              paddingBottom: "20px"
            }}>We need help. so do they.</h2>
            <p style={{
              fontSize: "15px",
              fontWeight: "500",
              paddingBottom: "50px",
              lineHeight: "20px"
            }}>
              Adopt a pet and give it a home, <br />
              it will be love you back unconditionally.
            </p>

            <div style={{
              display: "flex",
              gap: "20px"
            }}>


              <a
                href="#"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
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
                Explore Now
              </a>

              <a
                href="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    border: "1px solid black",
                    padding: "15px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    backgroundColor: "transparent",
                    borderRadius: "30px",
                    cursor: "pointer",
                    gap: "10px",
                    transition: "all 0.3s ease",
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
                  }}
                >
                  View Intro
                  <img
                    src={playLogo}
                    style={{
                      height: "20px",
                    }}
                  />
                </button>
              </a>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}