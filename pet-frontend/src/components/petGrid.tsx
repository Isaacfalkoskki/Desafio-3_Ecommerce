// Exemplo de um componente pai que renderiza os PetCards
import { Pet } from "../types/Pet";
import { PetCard } from "./PetCard";

export const PetGrid = ({ pets }: { pets: Pet[] }) => {
    // Limita a 8 pets
    const limitedPets = pets.slice(0, 8);
  
    return (
      <div style={{
          paddingTop: "30px",
      paddingBottom: "70px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "20px"
      }}>
        {limitedPets.map(pet => (
          <PetCard key={pet.sku} pet={pet} />
        ))}
      </div>
    );
  };