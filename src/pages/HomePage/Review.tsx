import React, { useState } from "react";
import clien1 from '../../assets/images/client1.jpeg';
import clien2 from '../../assets/images/client2_india.jpeg';
import client3 from '../../assets/images/clien3.webp';

const testimonials = [
  {
    name: "Alice Johnson",
    comment: "This garage feature is fantastic! It helps me keep track of my car's value effortlessly.",
    image: clien1
  },
  {
    name: "Raaj Shivah",
    comment: "I love how easy it is to add my car and monitor its value. Highly recommend!",
    image: clien2
  },
  {
    name: "Charlie Son",
    comment: "A great tool for any car owner. The insights on market value are super helpful!",
    image: client3
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [review, setReview] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState<string[]>([]); // Specify the type of submittedReviews as string array

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Specify the type of the event parameter
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  // Specify the type of the event parameter
  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review.trim() !== "") {
      setSubmittedReviews((prevReviews) => [...prevReviews, review]);
      setReview(''); // Clear the review text area
    }
  };

  return (
    <div className="px-10 py-10">
      {/* Testimonial Slider */}
      <div className="relative max-w-lg mx-auto mb-10 bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrev} className="text-2xl text-[#c30101]" aria-label="Previous Testimonial">&lt;</button>
          <div className="text-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-600">{testimonials[currentIndex].comment}</p>
          </div>
          <button onClick={handleNext} className="text-2xl text-[#c30101]" aria-label="Next Testimonial">&gt;</button>
        </div>
      </div>

      {/* Add Review */}
      <form onSubmit={handleSubmitReview} className="max-w-lg mx-auto space-y-4">
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Add your review here..."
          className="w-full p-2 border rounded-md"
          rows={4} // Adding rows for better visibility
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#c30101] text-white rounded-md hover:bg-red-600"
        >
          Submit Review
        </button>
      </form>

      {/* Display Submitted Reviews */}
      <div className="mt-6 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold">Submitted Reviews:</h2>
        <ul className="list-disc pl-5">
          {submittedReviews.map((rev, index) => (
            <li key={index} className="mt-2">{rev}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
