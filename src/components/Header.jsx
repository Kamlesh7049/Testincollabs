import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">FreeWill</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-700">Home</Link></li>
          <li><Link to="/get-started" className="text-gray-700">Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
