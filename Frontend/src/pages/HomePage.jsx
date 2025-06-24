import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../assets/bk.mp4';
import NearestOutlet from '../components/NearestOutlet';


const HomePage = () => {
  
  return (
    <div className="relative min-h-screen text-white">
      {/* 🔴 Full-page Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

      {/* ✅ Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Welcome to MyRestaurant</h1>
          <p className="text-xl mb-6 drop-shadow-sm">Delicious meals delivered fresh to your doorstep!</p>
          <Link to="/login">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
              Explore Our Menu 🍽️
            </button>
          </Link>
        </section>

        <NearestOutlet />

        {/* Features Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-300 mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md">
              <img src="https://img.icons8.com/fluency/48/delivery.png" alt="Fast Delivery" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your food delivered hot and fresh in under 30 minutes anywhere in town.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md">
              <img src="https://img.icons8.com/fluency/48/ingredients.png" alt="Quality Ingredients" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p>Our chefs use only the best handpicked ingredients to prepare your meals.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md">
              <img src="https://img.icons8.com/fluency/48/restaurant-table.png" alt="Dine In or Take Away" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dine-In or Takeaway</h3>
              <p>Visit us in person or order online — the choice is yours.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-black bg-opacity-50">
          <h2 className="text-3xl font-bold text-center text-red-300 mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <div>
              <div className="text-5xl mb-4">📋</div>
              <h4 className="text-lg font-semibold mb-2">1. Browse Menu</h4>
              <p>Explore a variety of cuisines and dishes crafted by top chefs.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🛒</div>
              <h4 className="text-lg font-semibold mb-2">2. Add to Cart</h4>
              <p>Choose your favorites and add them to the cart with a click.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold mb-2">3. Place Order</h4>
              <p>Checkout in seconds and enjoy your food at home or office.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-300">Hungry Already?</h2>
          <p className="mb-6 text-lg">Get started now and treat yourself to something delicious!</p>
          <Link to="/login">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg">
              View Menu 🍕
            </button>
          </Link>
        </section>


        {/* Contact & Location Section */}
        <section className="py-16 px-6 bg-black bg-opacity-10 backdrop-blur-md text-white">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-10">📍 Visit or Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4">
              <p><span className="font-semibold">Address:</span> 123 Foodie Street, Nagpur, Maharashtra 440001</p>
              <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold">Email:</span> contact@myrestaurant.com</p>
              <p><span className="font-semibold">Opening Hours:</span> 10:00 AM - 11:00 PM (All days)</p>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-64">
              <iframe
                title="MyRestaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.826017005251!2d79.08815417457444!3d21.11620568592836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c07284c998e1%3A0x77e8bfb5bc34461a!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow"
              ></iframe>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-black bg-opacity-70 text-white text-center py-6">
          <p>&copy; {new Date().getFullYear()} MyRestaurant. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
