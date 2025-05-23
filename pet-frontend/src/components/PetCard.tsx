import React, { useState } from "react";
import { Pet } from "../types/Pet";

export const PetCard = ({ pet }: { pet: Pet }) => {
  const [hovered, setHovered] = useState(false);

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
      }}
    >
      <a
        key={pet.sku}
        href={`/pets/${pet.sku}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit"
        }}
      >
        <img
          src={pet.image_url}
          alt={pet.name}
          style={{
            width: "90%",
            padding: "10px 10px 10px 18px"
          }}
        />
      </a>

      <h2
        style={{
          fontSize: "21px",
          fontWeight: "700",
          paddingBottom: "10px",
          paddingLeft: "10px"
        }}
      >
        {pet.name}
      </h2>

      <div>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#667479",
            paddingLeft: "10px",
            paddingRight: "10px"
          }}
        >
          Gene: {pet.gender === "MALE" ? "Male" : "Female"}
        </span>
        •
        <span
          style={{
            paddingLeft: "10px",
            fontSize: "16px",
            fontWeight: "700",
            color: "#667479"
          }}
        >
          Age: {pet.age.toString().padStart(2, "0")} months
        </span>
      </div>

      <p
        style={{
          paddingLeft: "10px",
          fontSize: "16px",
          fontWeight: "700",
          paddingTop: "10px",
          paddingBottom: "20px"
        }}
      >
        {pet.price.toLocaleString("vi-VN")} VND
      </p>
    </div>
  );
};
