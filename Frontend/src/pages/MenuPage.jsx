


// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { useEffect, useRef } from 'react';
// import ReviewSection from '../components/ReviewSection';

// const sampleMenu = [
//   {
//     id: 1,
//     name: 'Margherita Pizza',
//     category: 'Mains',
//     price: 299,
//     description: 'Classic cheese pizza with tomato sauce and basil.',
//     image: 'https://source.unsplash.com/400x300/?pizza',
//     tags: ['veg', 'mild', 'medium'],
//   },
//   {
//     id: 2,
//     name: 'Spicy Chicken Wings',
//     category: 'Starters',
//     price: 199,
//     description: 'Crispy wings with hot sauce.',
//     image: 'https://source.unsplash.com/400x300/?spicy-chicken',
//     tags: ['non-veg', 'spicy', 'medium'],
//   },
//   {
//     id: 3,
//     name: 'Paneer Tikka',
//     category: 'Starters',
//     price: 179,
//     description: 'Grilled paneer cubes with spices.',
//     image: 'https://source.unsplash.com/400x300/?paneer',
//     tags: ['veg', 'spicy', 'low'],
//   },
//   {
//     id: 4,
//     name: 'Butter Chicken',
//     category: 'Mains',
//     price: 349,
//     description: 'Creamy chicken curry.',
//     image: 'https://source.unsplash.com/400x300/?butter-chicken',
//     tags: ['non-veg', 'mild', 'high'],
//   },
// ];

// const categories = ['All', 'Starters', 'Mains', 'Desserts'];

// const MenuPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [recommended, setRecommended] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const { addToCart } = useCart();

//   const filteredMenu = selectedCategory === 'All'
//     ? sampleMenu
//     : sampleMenu.filter(item => item.category === selectedCategory);

//   const handleRecommendation = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const type = form.type.value;
//     const spice = form.spice.value;
//     const budget = form.budget.value;

//     const result = sampleMenu.filter(
//       item =>
//         item.tags.includes(type) &&
//         item.tags.includes(spice) &&
//         item.tags.includes(budget)
//     );
//     setRecommended(result);
//   };


//   const recognitionRef = useRef(null);

// const startVoiceSearch = () => {
//   if (!('webkitSpeechRecognition' in window)) {
//     alert('Speech Recognition is not supported in this browser.');
//     return;
//   }

//   const recognition = new window.webkitSpeechRecognition(); // Only supported in Chrome
//   recognition.lang = 'en-IN';
//   recognition.interimResults = false;
//   recognition.maxAlternatives = 1;

//   recognition.onresult = (event) => {
//     const spoken = event.results[0][0].transcript.toLowerCase();
//     setSelectedCategory('All');
//     const matchedItem = sampleMenu.find(item =>
//       item.name.toLowerCase().includes(spoken)
//     );
//     if (matchedItem) {
//       alert(`Found: ${matchedItem.name}`);
//     } else {
//       alert(`No match found for "${spoken}"`);
//     }
//   };

//   recognition.onerror = (err) => {
//     alert('Voice search error: ' + err.error);
//   };

//   recognition.start();
// };



//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Our Menu</h2>

//       {/* Category Filter */}
//       <div className="flex justify-center mb-4 space-x-4">
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-full border ${
//               selectedCategory === category
//                 ? 'bg-red-500 text-white'
//                 : 'bg-white text-red-500 border-red-500'
//             } hover:bg-red-600 hover:text-white transition`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>


//         <div className="text-center mb-6">
//               <button
//                 onClick={startVoiceSearch}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
//               >
//                 🎤 Voice Search Menu
//               </button>
//         </div>




//       {/* AI Recommender Toggle */}
//       <div className="text-center mb-6">
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow"
//         >
//           🤖 Recommend Me a Meal
//         </button>
//       </div>

//       {/* AI Recommender Form */}
//       {showForm && (
//         <form
//           onSubmit={handleRecommendation}
//           className="bg-white max-w-xl mx-auto p-4 rounded-lg shadow mb-6"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <select name="type" required className="border p-2 rounded">
//               <option value="">Type</option>
//               <option value="veg">Veg</option>
//               <option value="non-veg">Non-Veg</option>
//             </select>
//             <select name="spice" required className="border p-2 rounded">
//               <option value="">Spice Level</option>
//               <option value="mild">Mild</option>
//               <option value="spicy">Spicy</option>
//             </select>
//             <select name="budget" required className="border p-2 rounded">
//               <option value="">Budget</option>
//               <option value="low">Under ₹200</option>
//               <option value="medium">₹200–₹300</option>
//               <option value="high">Above ₹300</option>
//             </select>
//           </div>
//           <div className="mt-4 text-right">
//             <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//               Get Suggestion
//             </button>
//           </div>
//         </form>
//       )}

//       {/* Recommendations */}
//       {recommended.length > 0 && (
//         <div className="mb-10">
//           <h3 className="text-2xl font-semibold mb-4 text-center text-green-600">Recommended for you</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {recommended.map(item => (
//               <div key={item.id} className="bg-white p-4 shadow rounded-lg">
//                 <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-2" />
//                 <h4 className="font-semibold text-red-600">{item.name}</h4>
//                 <p className="text-sm text-gray-600">{item.description}</p>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="font-bold">₹{item.price}</span>
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Normal Menu Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredMenu.map(item => (
//           <div key={item.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
//             <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h4 className="text-xl font-semibold text-red-600">{item.name}</h4>
//               <p className="text-sm text-gray-600 mb-2">{item.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold">₹{item.price}</span>
//                 <button
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
//                   onClick={() => addToCart(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//               <ReviewSection itemId={item.id} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuPage;















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Starters', 'Mains', 'Desserts'];

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  useEffect(() => {
  const fetchMenu = async () => {
    try {
      const { data } = await axios.get('/api/menu');
      setMenuItems(data);
    } catch (error) {
      console.error('❌ Error fetching menu:', error.message);
    }
  };

  fetchMenu();
}, []);

  const filteredMenu = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Our Menu</h2>

      <div className="flex justify-center mb-8 space-x-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? 'bg-red-500 text-white'
                : 'bg-white text-red-500 border-red-500'
            } hover:bg-red-600 hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMenu.map(item => (
          <div key={item._id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-red-600">{item.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹{item.price}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMenu.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No items in this category.</p>
      )}
    </div>
  );
};

export default MenuPage;




