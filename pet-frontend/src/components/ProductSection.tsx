import React from 'react';
import { ProductsList } from './ProductList';
import arrowRight from "./images/arrowRight.png";


export default function ProductSection() {
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
          }}> Hard to choose right products for your pets? </p>

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
              }}> Our Products </h2>

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

                <img src={arrowRight} style={{
                  height: "10px"
                  }}/>

              </button>

            </a>

          </div>

        </header>

      </div>

      <ProductsList />

    </>

  )
}