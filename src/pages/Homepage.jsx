import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold">Welcome to FreeWill</h1>
        <p className="mt-4 text-lg">Plan your future with ease</p>
        <Link to="/get-started" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded">
          Get Started
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
