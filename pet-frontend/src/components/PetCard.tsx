import React, { useEffect, useState } from 'react';
import { Pet } from '../types/Pet';

interface Props {
  pet: Pet;
}

const fetchPets = async () => {
  try {
    const response = await fetch('/pets');
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    throw error;
  }
}


 

const PetCard:React.FC<Props> = ({ pet: Pet }) => {

  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPets()
      .then(setPets)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);



  return (
    <ul>

      {pets.map((pet) => (
<li key={pet.id}>{pet.name} ({pet.price})</li>

      ))}
</ul>
 
  )
  
}

export default PetCard


/*
const PetCard: React.FC<Props> = ({ pet }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden p-3">
    <img src={pet.imageUrl} alt={pet.name} className="h-48 w-full object-cover rounded-md mb-2" />
    <p className="text-sm text-gray-500">{pet.code}</p>
    <h3 className="font-bold">{pet.name}</h3>
    <p className="text-gray-600">{pet.gender} • {pet.age}</p>
    <p className="text-blue-600 font-bold">{pet.price.toLocaleString()} VND</p>
  </div>
);

export default PetCard;*/