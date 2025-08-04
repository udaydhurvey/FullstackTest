import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to MyApp
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover, explore, and connect with amazing content.
        </p>
        <Link
          to="/explore"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
