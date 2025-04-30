import React from 'react';

const AdoptionSection: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-yellow-100 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl font-bold text-blue-900">Adoption 🐾</h2>
        <p className="text-lg text-gray-700 mt-2">We Need Help. So Do They.</p>
        <p className="text-sm text-gray-600 mt-1">Join us to help animals find loving homes and receive the care they deserve.</p>
      </div>
      <img src="/images/adoption.jpg" alt="Adoption hands" className="w-60 md:w-80 object-cover" />
    </section>
  );
};

export default AdoptionSection;
