import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GetStarted = () => {
  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto my-10 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold text-center">Get Started</h2>
        <MultiStepForm />
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;
