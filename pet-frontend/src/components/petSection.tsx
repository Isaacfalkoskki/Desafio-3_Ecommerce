import React from 'react';

const pets = [
  { id: 'M021', name: 'Pomeranian White', price: '6,000,000 VND', image: '/images/pet1.jpg' },
  { id: 'M502', name: 'Poodle Tiny Yellow', price: '6,200,000 VND', image: '/images/pet2.jpg' },
  { id: 'M102', name: 'Poodle Tiny Sepia', price: '4,600,000 VND', image: '/images/pet3.jpg' },
  { id: 'M512', name: 'Alaskan Malamute Grey', price: '8,900,000 VND', image: '/images/pet4.jpg' },
];

const PetSection: React.FC = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Take A Look At Some Of Our Pets</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={pet.image} alt={pet.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{pet.name}</h3>
              <p className="text-sm text-gray-600">{pet.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetSection;
