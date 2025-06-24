import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SpinWheel from '../components/SpineWheel';
import LiveTracking from '../components/LiveTracking';




const statuses = ['Order Received', 'Being Prepared', 'Out for Delivery', 'Delivered'];

const OrderSuccessPage = () => {
  const location = useLocation();
  const scheduledAt = location.state?.scheduledAt;
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < statuses.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 3000); // 3 sec per status

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Order Placed!</h1>
      <p className="text-lg text-gray-700 mb-4">Thank you for ordering from us.</p>

      <LiveTracking />
      <SpinWheel />

      {scheduledAt && (
        <p className="mb-6 text-gray-600">
          <strong>Scheduled for:</strong> {new Date(scheduledAt).toLocaleString()}
        </p>
      )}

      {/* <div className="max-w-xl mx-auto mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-red-500">Order Status</h3>
        <div className="space-y-2">
          {statuses.map((status, index) => (
            <div key={index} className="flex items-center justify-start gap-3">
              <div
                className={`w-4 h-4 rounded-full ${
                  index <= currentStep ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></div>
              <p
                className={`${
                  index === currentStep
                    ? 'font-semibold text-green-600'
                    : 'text-gray-600'
                }`}
              >
                {status}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default OrderSuccessPage;
