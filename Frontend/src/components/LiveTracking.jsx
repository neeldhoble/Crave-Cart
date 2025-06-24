import React, { useEffect, useState } from 'react';

const steps = ['Order Placed', 'Preparing', 'Out for Delivery', 'Delivered'];

const LiveTracking = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep(prev => prev + 1), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-600">📦 Live Order Tracking</h2>
      <ul className="space-y-3 max-w-md mx-auto">
        {steps.map((step, index) => (
          <li
            key={step}
            className={`py-2 px-4 rounded-full font-medium transition ${
              index === currentStep
                ? 'bg-yellow-400 text-black'
                : index < currentStep
                ? 'bg-green-500 text-white'
                : 'bg-gray-300'
            }`}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveTracking;
