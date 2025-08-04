import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">MyApp</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/explore" className="hover:text-blue-500">Explore</Link></li>
          <li><Link to="/userdashboard" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          <li><Link to="/login" className="hover:text-blue-500">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
