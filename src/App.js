import React, { useState, useEffect } from 'react';
import "./App.css";
import 'animate.css/animate.min.css';

// Shared Tailwind CSS class strings
const buttonClass = 'bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-110';
const sectionShadow = 'shadow-lg';
const borderClass = 'border border-gray-400';

const TelematicaPage = () => {
  // State to manage the current index of the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images array
  const carouselImages = [
    "https://placehold.co/300x200?text=Image+1",
    "https://placehold.co/300x200?text=Image+2",
    "https://placehold.co/300x200?text=Image+3",
  ];

  // Effect hook to handle image carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % carouselImages.length);
    }, 3000); // Change the image every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex, carouselImages.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white animate-gradient-x">
      <Header />
      <Main currentImageIndex={currentImageIndex} carouselImages={carouselImages} />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className={`bg-blue-800 text-white p-6 text-center border-b ${borderClass} ${sectionShadow}`}>
    <h1 className="text-6xl font-bold animate__animated animate__pulse">TELEMÁTICA</h1>
  </header>
);

const Main = ({ currentImageIndex, carouselImages }) => (
  <main className="flex flex-1 p-6 space-x-6">
    <div className={`flex-1 bg-white bg-opacity-10 p-6 rounded-lg ${sectionShadow}`}>
      <h2 className="text-3xl font-semibold mb-4">¿Qué es telemática?</h2>
      <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <div className={`relative w-80 h-48 ${borderClass} rounded-lg ${sectionShadow} overflow-hidden`}>
        {carouselImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  </main>
);

const Footer = () => (
  <footer className={`bg-blue-800 text-white border-t ${borderClass} p-4 flex justify-around ${sectionShadow}`}>
    <button className={buttonClass}>contacto</button>
    <button className={buttonClass}>fotos</button>
    <button className={buttonClass}>malla</button>
    <button className={buttonClass}>sobre nosotros</button>
  </footer>
);

export default TelematicaPage;
