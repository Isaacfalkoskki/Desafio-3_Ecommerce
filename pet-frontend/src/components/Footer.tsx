import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-50 py-6 px-6 mt-10">
      <form className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-lg border border-gray-300 w-full sm:w-auto"
        />
        <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded-lg">Subscribe Now</button>
      </form>
      <p className="text-sm text-gray-600 text-center">© 2025 Monito. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
