// import React, { useState } from 'react';

// const rewards = [
//   '10% OFF 🍕',
//   '₹50 Cashback 💸',
//   'Free Dessert 🍨',
//   'Surprise Gift 🎁',
//   'No Win 😅',
//   '5% OFF 🔥',
//   'Buy 1 Get 1 Free 🍔',
//   'Free Delivery 🚚',
// ];

// const SpinWheel = () => {
//   const [spinning, setSpinning] = useState(false);
//   const [result, setResult] = useState(null);

//   const handleSpin = () => {
//     if (spinning) return;

//     setSpinning(true);
//     const randomIndex = Math.floor(Math.random() * rewards.length);

//     setTimeout(() => {
//       setSpinning(false);
//       setResult(rewards[randomIndex]);
//     }, 3000); // 3 seconds spin time
//   };

//   return (
//     <div className="text-center p-6">
//       <h3 className="text-2xl font-bold mb-4 text-red-600">🎲 Spin & Win</h3>
//       <div
//         className={`w-40 h-40 rounded-full mx-auto flex items-center justify-center border-4 border-dashed border-red-500 text-xl font-bold ${
//           spinning ? 'animate-spin-slow' : ''
//         }`}
//       >
//         {spinning ? 'Spinning...' : '🎯'}
//       </div>
//       <button
//         onClick={handleSpin}
//         disabled={spinning}
//         className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
//       >
//         {spinning ? 'Please wait...' : 'Spin Now'}
//       </button>

//       {result && (
//         <div className="mt-6 text-lg font-semibold text-green-700">
//           🎉 You got: <span className="underline">{result}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SpinWheel;




import React, { useState } from 'react';

const rewards = [
  '10% OFF 🍕',
  '₹50 Cashback 💸',
  'Free Dessert 🍨',
  'Surprise Gift 🎁',
  'No Win 😅',
  '5% OFF 🔥',
  'Buy 1 Get 1 Free 🍔',
  'Free Delivery 🚚',
];

const colors = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
  '#9966FF', '#FF9F40', '#8BC34A', '#E91E63',
];

const SpinWheel = () => {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    if (spinning) return;

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const degreesPerSegment = 360 / rewards.length;
    const newAngle = 360 * 5 + randomIndex * degreesPerSegment + degreesPerSegment / 2;

    setSpinning(true);
    setAngle(prev => prev + newAngle);

    setTimeout(() => {
      setSpinning(false);
      setResult(rewards[randomIndex]);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center py-8 text-center">
      <h3 className="text-3xl font-bold mb-4 text-red-600">🎲 Spin the Wheel</h3>

      {/* Pointer */}
      <div className="relative w-[260px] h-[260px]">
        <div className="absolute top-[-20px] left-[50%] transform -translate-x-1/2 z-10">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-500"></div>
        </div>

        {/* Wheel */}
        <div
          className="w-full h-full rounded-full border-4 border-gray-300 transition-transform duration-[4s] ease-out"
          style={{
            transform: `rotate(${angle}deg)`,
            background: `conic-gradient(${rewards
              .map((r, i) => `${colors[i % colors.length]} ${i * (100 / rewards.length)}% ${(i + 1) * (100 / rewards.length)}%`)
              .join(', ')})`
          }}
        />
      </div>

      {/* Spin Button */}
      <button
        onClick={handleSpin}
        disabled={spinning}
        className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 disabled:opacity-50"
      >
        {spinning ? 'Spinning...' : 'Spin Now 🎯'}
      </button>

      {/* Result */}
      {result && (
        <div className="mt-6 text-lg font-semibold text-green-700">
          🎉 You got: <span className="underline">{result}</span>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
