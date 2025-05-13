import React from 'react';
import arrowRight from "./images/arrowRight.png"
import bannerPetSection from "./images/BannerPetSection.png"
import playLogo from "./images/playLogo.png"
import { PetList } from './PetList'

export default function PetSection() {

  return (

    <>

      <div style={{
        paddingLeft: "200px",
        paddingTop: "70px",
        paddingRight: "200px"
      }}>

        <p style={{
          fontSize: "16px",
          fontWeight: "500",
          paddingBottom: "10px"
        }}> Whats new? </p>

        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start"
        }}>

          <div>

            <h2 style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#003459"
            }}> Take A Look At Some Of Our Pets </h2>

          </div>

          <div>

            <a href="#"
              style={{
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
                gap: "10px"
              }}
                onClick={() => window.open('/filtros', "_blank")}> View More

                <img src={arrowRight}
                  style={{
                    height: "10px"
                  }} />

              </button>

            </a>

          </div>

        </header>

        <PetList />

        <div style={{
          position: "relative",
          width: "100%",
          height: "auto",
          paddingTop: "70px"
        }}>

          <img src={bannerPetSection}
            style={{
              height: "100%",
              width: "100%",
              display: "block",
              zIndex: 0
            }} />

          <div style={{
            paddingRight: "100px",
            position: "absolute",
            top: "20%",
            right: "10px",
            zIndex: 1,
            color: "#003459",
            textAlign: "right",
          }}>

            <h1 style={{
              fontSize: "52px",
              fontWeight: "800",
              paddingBottom: "20px"
            }}>One More Friend</h1>

            <h2 style={{
              fontSize: "36px",
              fontWeight: "700",
              paddingBottom: "20px"
            }}>Thousand More Fun!</h2>

            <p style={{
              fontSize: "15px",
              fontWeight: "500",
              paddingBottom: "20px",
              lineHeight: "20px"
            }}> Having a pet means you have more joy, a new friend, a happy person <br /> who will always be with you to have fun. We have 200+ different pets <br /> that can meet your needs! </p>

            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px"
            }}>

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
                  transition: "all 0.3s ease",
                  display: "inline-block",
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


            </div>

          </div>

        </div>

      </div>

    </>

  )

}
