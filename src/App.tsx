import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CarListing from "./pages/CarListing";
import Footer from "./components/footer";

import Home from "./pages/HomePage/Hero";
import FeaturedCars from "./pages/FeaturedCars/FeaturedCars";
import CarDetails from "./pages/FeaturedCars/CarDetails";
import Sell from "../src/pages/HomePage/Sell";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<CarListing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/featured-cars" element={<FeaturedCars />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
