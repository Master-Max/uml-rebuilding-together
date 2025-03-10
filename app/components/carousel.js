import { useState } from 'react';

// Carousel Component
const Carousel = ({ items, itemsToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move carousel to the left
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsToShow : prevIndex - 1
    );
  };

  // Function to move carousel to the right
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  // Get the visible items for the current index
  const visibleItems = items.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Prev</button>

      <div className="carousel-items">
        {visibleItems.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>

      <button onClick={handleNext}>Next</button>

      {/* Add some basic styling */}
      <style jsx>{`
        .carousel-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .carousel-items {
          display: flex;
          gap: 1rem;
          overflow: hidden;
        }

        .carousel-item {
          flex: 1 0 100px; /* adjust width accordingly */
          padding: 1rem;
        }

        button {
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Carousel;