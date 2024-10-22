import React, { useState } from "react";
import clien1 from '../../assets/images/client1.jpeg';
import clien2 from '../../assets/images/client2_india.jpeg';
import client3 from '../../assets/images/clien3.webp';

// Default avatar image for user-submitted reviews
const defaultAvatar = "https://www.gravatar.com/avatar/?d=mp";  // Using Gravatar default icon

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
  const [name, setName] = useState(''); // For user input name
  const [review, setReview] = useState('');
  const [allTestimonials, setAllTestimonials] = useState(testimonials); // Manage all testimonials including user-submitted ones

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allTestimonials.length) % allTestimonials.length);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review.trim() !== "" && name.trim() !== "") {
      // Create a new testimonial object
      const newTestimonial = {
        name,
        comment: review,
        image: defaultAvatar, // Set default avatar for new reviews
      };
      // Add the new testimonial to the list and reset the form fields
      setAllTestimonials((prevTestimonials) => [...prevTestimonials, newTestimonial]);
      setName('');
      setReview('');
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
              src={allTestimonials[currentIndex].image}
              alt={allTestimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold p-3">{allTestimonials[currentIndex].name}</h3>
            <p className="text-gray-600 p-3">{allTestimonials[currentIndex].comment}</p>
          </div>
          <button onClick={handleNext} className="text-2xl text-[#c30101]" aria-label="Next Testimonial">&gt;</button>
        </div>
      </div>

      {/* Add Review */}
      <form onSubmit={handleSubmitReview} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Add your review here..."
          className="w-full p-2 border rounded-md"
          rows={4}
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#c30101] text-white rounded-md hover:bg-red-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
