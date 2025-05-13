import React, { useState } from "react";
import { Product } from "../types/Products";
import logoPresent from "./images/logoPresent.png";

export const ProductCard = ({ product }: { product: Product }) => {

  const [hovered, setHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (

    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#F7F7F7",
        borderRadius: "10px",
        alignContent: "center",
        boxShadow: hovered ? "0 8px 20px rgba(0, 0, 0, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.05)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease-in-out"
        }}>

      <img
        src={product.image_url}
        alt={product.name}
        style={{
          width: "90%",
          padding: "10px 10px 10px 18px"
          }}/>

      <h2 style={{
        fontSize: "21px",
        fontWeight: "700",
        paddingBottom: "10px",
        paddingLeft: "10px" }}>{product.name}</h2>

      <div>

        <span style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#667479",
          paddingLeft: "10px",
          paddingRight: "10px" }}> Type: {product.product_type}</span>
          
          •

        <span style={{
          paddingLeft: "10px",
          fontSize: "16px",
          fontWeight: "700",
          color: "#667479" }}> Size: {product.size}</span>

      </div>

      <p style={{
        paddingLeft: "10px",
        fontSize: "16px",
        fontWeight: "700",
        paddingTop: "10px",
        paddingBottom: "20px" }}>{product.price.toLocaleString('vi-VN')} VND</p>

      <button
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          padding: "10px",
          marginLeft: "17px",
          backgroundColor: buttonHovered ? "#f5dba4" : "#FCEED5",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          gap: "8px",
          transition: "background-color 0.3s ease" 
          }}>

        <img
          src={logoPresent}
          style={{
            width: "20px",
            paddingRight: "10px"
            }}/>
          
          •

        <p style={{
          fontSize: "15px",
          fontWeight: "700",
          paddingLeft: "10px",
          margin: 0 }}> Free Toy & Free Shaker </p>

      </button>

    </div>

  )

}
