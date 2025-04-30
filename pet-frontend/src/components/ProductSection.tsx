import React from 'react';

const products = [
  { name: 'Reflex Plus Cat Food', price: '140,000 VND', image: '/images/product1.jpg' },
  { name: 'Cat Scratching Ball', price: '120,000 VND', image: '/images/product2.jpg' },
  { name: 'Cute Pet Toy', price: '60,000 VND', image: '/images/product3.jpg' },
];

const ProductSection: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
              <button className="mt-2 px-3 py-1 text-sm bg-yellow-400 text-white rounded-full">Free Toy & Free Shaker</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
