// src/utils/loyalty.js

export const getLoyaltyPoints = () => {
  return parseInt(localStorage.getItem('loyaltyPoints') || '0');
};

export const addLoyaltyPoints = (points) => {
  const current = getLoyaltyPoints();
  localStorage.setItem('loyaltyPoints', current + points);
};

export const resetLoyaltyPoints = () => {
  localStorage.setItem('loyaltyPoints', '0');
};
