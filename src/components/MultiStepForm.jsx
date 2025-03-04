import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    maritalStatus: "",
    spouseName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && (
        <div>
          <label className="block">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full" />
          <label className="block mt-4">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" />
          <button onClick={nextStep} className="mt-4 bg-blue-500 text-white px-4 py-2">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label className="block">Marital Status</label>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="border p-2 w-full">
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
          {formData.maritalStatus === "Married" && (
            <>
              <label className="block mt-4">Spouse Name</label>
              <input type="text" name="spouseName" value={formData.spouseName} onChange={handleChange} className="border p-2 w-full" />
            </>
          )}
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2">Back</button>
            <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2">Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3 className="text-xl">Review Your Details</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
          {formData.maritalStatus === "Married" && <p><strong>Spouse Name:</strong> {formData.spouseName}</p>}
          <button onClick={prevStep} className="mt-4 bg-gray-500 text-white px-4 py-2">Back</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
