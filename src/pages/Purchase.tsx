import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../pages/Products/productsimg";

const Purchase: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateCardNumber = (cardNumber: string): boolean => {
    const cardNumberPattern = /^\d{16}$/; // Adjust according to the card format (e.g., Visa, MasterCard, etc.)
    return cardNumberPattern.test(cardNumber);
  };

  const validateExpiryDate = (expiryDate: string): boolean => {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // Format MM/YY
    return expiryDatePattern.test(expiryDate);
  };

  const validateCvv = (cvv: string): boolean => {
    const cvvPattern = /^[0-9]{3,4}$/; // Adjust according to the CVV format (e.g., 3 or 4 digits)
    return cvvPattern.test(cvv);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    let formattedValue = value;

    if (value.length > 2) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}`; // Add a slash after the first two digits
    } else if (value.length > 1) {
      formattedValue = `${value.slice(0, 2)}`; // Just show the first two digits
    }

    setExpiryDate(formattedValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Reset errors
    let valid = true;

    // Validate fields
    if (!validateEmail(customerEmail)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      valid = false;
    }
    if (paymentMethod === "card") {
      if (!validateCardNumber(cardNumber)) {
        setErrors((prev) => ({ ...prev, cardNumber: "Invalid card number" }));
        valid = false;
      }
      if (!validateExpiryDate(expiryDate)) {
        setErrors((prev) => ({ ...prev, expiryDate: "Invalid expiry date" }));
        valid = false;
      }
      if (!validateCvv(cvv)) {
        setErrors((prev) => ({ ...prev, cvv: "Invalid CVV" }));
        valid = false;
      }
    }

    // If any field is invalid, stop the submission
    if (!valid) return;

    setLoading(true);

    const formData = {
      name: customerName,
      email: customerEmail,
      cardNumber,
      expiryDate,
      cvv,
      address,
      paymentMethod,
      productName: product?.name,
      productPrice: product?.price,
    };

    // Submit the form data to Formspree
    try {
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Successfully submitted
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setLoading(false);
      setTimeout(() => navigate("/"), 3000); // Redirect after 3 seconds
    }
  };

  if (!product) {
    return <p className="text-2xl font-bold text-center mb-4 m-6 p-4 py-2 text-2xl text-center flex justify-center text-gray-500 shadow-md rounded hover:bg-gray-200">Product not found!</p>; // Handle case if product doesn't exist
  }

  // Calculate rental price (10% of product price)
  

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 m-6 p-4 py-2 text-2xl text-center flex justify-center text-gray-500 shadow-md rounded hover:bg-gray-200">{product.name}</h1>
      <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100   text-center m-4">
        Price:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
      <p className="text-xl font-semibold text-green-600 mb-4 text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100   text-center m-4">
  Rent Price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(product.price) * 0.1)}
</p>

      {/* Image Slider */}
      <div className="relative mb-4">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-64 object-cover rounded"
        />
        <button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-full"
        >
          &gt;
        </button>
      </div>

      {submitted ? (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <h2 className="font-bold">Thank you for your purchase!</h2>
          <p>Your order is being processed..</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="customerName" className="block mb-1">
              Full Name:
            </label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="customerEmail" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="customerEmail"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            >
              <option value="card">Pay with Card</option>
              <option value="bank">Pay with Bank Transfer</option>
              <option value="bitcoin">Pay with Bitcoin</option>
              <option value="cashapp">Pay with CashApp</option>
            </select>
          </div>

          {/* Payment Details Display */}
          <div className="mb-4">
            {paymentMethod === "bank" && (
              <div>
                <h4 className="font-semibold">Bank Payment Details:</h4>
                <span>Account Name: Your Bank Account Name</span>
                <br />
                <span>Account Number: 123456789</span>
                <br />
                <span>Routing Number: 987654321</span>
              </div>
            )}
            {paymentMethod === "bitcoin" && (
              <div>
                <h4 className="font-semibold">Bitcoin Payment Details:</h4>
                <span>Bitcoin Address: 1A2B3C4D5E6F7G8H9I0J</span>
              </div>
            )}
            {paymentMethod === "cashapp" && (
              <div>
                <h4 className="font-semibold">CashApp Payment Details:</h4>
                <span>CashApp ID: $YourCashAppID</span>
              </div>
            )}
          </div>

          {paymentMethod === "card" && (
            <>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block mb-1">
                  Card Number:
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                  className="p-2 border border-gray-300 rounded w-full"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="expiryDate" className="block mb-1">
                  Expiry Date:
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  required
                  placeholder="MM/YY"
                  className="p-2 border border-gray-300 rounded w-full"
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-sm">{errors.expiryDate}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="cvv" className="block mb-1">
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  className="p-2 border border-gray-300 rounded w-full"
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm">{errors.cvv}</p>
                )}
              </div>
            </>
          )}

          {paymentMethod !== "card" && (
            <div className="mb-4">
              <label htmlFor="address" className="block mb-1">
                Address for Paperwork:
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded w-full"
                rows={3}
              />
            </div>
          )}

          <button
            type="submit"
            className={`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Confirming..." : "Confirm Purchase"}
          </button>

          <button
            type="button"
            onClick={() => navigate('/product-list')}
            className="mt-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-300 transition duration-300 w-full"
          >
            Back to Product List
          </button>
        </form>
      )}
    </div>
  );
};

export default Purchase;
