"use client";
import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setCarouselData(data.carouselImages);
    };

    fetchData();
  }, []);

  return (
    <section className="section-carousel">
      {/* Each of the images should have regular and equal widths */}
      <div className="carousel">
        {carouselData.map((image, index) => (
          <img
            className={`image-pictured image-${index}`}
            src={image.src}
            alt={image.alt}
            key={image.id}
          />
        ))}
      </div>
      {/* The images should be on one another such that only half of each image is showing except the main image and there is space for other images */}
      {/* When the next button is clicked, the image before the main image switches to its position, and the main image moves a card farther, behind the new main image  */}
      {/* same thing should happen for the previous button button in reverse */}
      {/* There should be obvious transition */}
      {/* There will be a cart button close to the main image. If clicked and the user is logged in, they should be taken to the All products page. */}
      {/* Else, a modal informing the user to login should show up */}
      {/* Only seven image cards can show on the screen at once */}
    </section>
  );
};

export default ImageCarousel;
