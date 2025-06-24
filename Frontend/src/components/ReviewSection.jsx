import React, { useState, useEffect } from 'react';

const ReviewSection = ({ itemId }) => {
  const [reviewText, setReviewText] = useState('');
  const [image, setImage] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(`reviews-${itemId}`) || '[]');
    setReviews(stored);
  }, [itemId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText || !image) return alert('Please enter review and select image');

    const reader = new FileReader();
    reader.onload = () => {
      const newReview = { text: reviewText, img: reader.result, date: new Date().toLocaleString() };
      const updatedReviews = [newReview, ...reviews];
      localStorage.setItem(`reviews-${itemId}`, JSON.stringify(updatedReviews));
      setReviews(updatedReviews);
      setReviewText('');
      setImage(null);
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h4 className="text-lg font-semibold mb-2">📝 Leave a Review</h4>
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          className="w-full border rounded p-2"
          placeholder="Your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
          Submit
        </button>
      </form>

      <div className="mt-4 space-y-4">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white p-2 shadow rounded">
            <p className="text-sm text-gray-800">{rev.text}</p>
            <img src={rev.img} alt="review" className="w-32 h-32 object-cover mt-2 rounded" />
            <p className="text-xs text-gray-500 mt-1">{rev.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
