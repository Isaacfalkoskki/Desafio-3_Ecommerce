import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pet } from '../types/Pet';
import { PetGrid } from '../components/petGrid'; // Importando PetGrid

export const PetList = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    console.log("🔍 Buscando pets...");
    axios.get('http://localhost:3000/pets')
      .then((res) => {
        console.log("✅ Dados recebidos:", res.data);
        setPets(res.data);
      })
      .catch((err) => {
        console.error("❌ Erro ao buscar pets:", err);
      });
  }, []);

  return (
    <div className="p-6">
      <PetGrid pets={pets} /> {/* Passando todos os pets para PetGrid */}
    </div>
  );
};