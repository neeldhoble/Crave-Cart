import React, { useEffect, useState } from 'react';


const outlets = [
  { name: 'Sitabuldi', lat: 21.1466, lon: 79.0888 },
  { name: 'Dharampeth', lat: 21.1458, lon: 79.0715 },
  { name: 'Hingna', lat: 21.1031, lon: 78.9410 },
];

// Haversine formula
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R =40; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const NearestOutlet = () => {
  const [nearest, setNearest] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        let closest = null;
        let minDistance = Infinity;

        outlets.forEach((outlet) => {
          const distance = getDistance(latitude, longitude, outlet.lat, outlet.lon);
          if (distance < minDistance) {
            minDistance = distance;
            closest = { ...outlet, distance: distance.toFixed(2) };
          }
        });

        setNearest(closest);
      },
      (err) => setError('Location access denied.')
    );
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="text-center mt-6 text-white">
      {nearest ? (
        <>
          <p>
            📍 You're near our <strong>{nearest.name}</strong> outlet.
          </p>
          <p className="text-sm text-green-600">
            Distance: {nearest.distance} km – We deliver to your area!
          </p>
        </>
      ) : (
        <p>Detecting your nearest outlet...</p>
      )}
    </div>
  );
};

export default NearestOutlet;
