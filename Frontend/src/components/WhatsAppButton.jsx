import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '9529187029';
  const message = encodeURIComponent('Hi, I need help with my order from MyRestaurant!');
  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="https://img.icons8.com/color/64/whatsapp--v1.png"
        alt="Chat on WhatsApp"
        className="w-14 h-14 hover:scale-110 transition duration-300 shadow-lg rounded-full"
      />
    </a>
  );
};

export default WhatsAppButton;
