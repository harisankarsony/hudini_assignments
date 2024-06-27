"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  function handleButtonClick(e) {
    const clickedButton = e.target.name;
    const imagesLength = images.length;

    if (clickedButton === "previous-button") {
      currentImage == 0
        ? setCurrentImage(imagesLength - 1)
        : setCurrentImage((previousState) => previousState - 1);
    }
    if (clickedButton === "next-button") {
      currentImage == imagesLength - 1
        ? setCurrentImage(0)
        : setCurrentImage((previousState) => previousState + 1);
    }
    if (clickedButton === "indicator") {
      setCurrentImage(e.target.value);
    }
  }

  return (
    <div className="main">
      <button
        className="previous-button"
        name="previous-button"
        onClick={handleButtonClick}
      >
        {`<`}
      </button>
      <div className="image-and-indicators">
        <div className="image-div">
          <Image
            alt="carousel image"
            src={images[currentImage]}
            width={800}
            height={500}
          />
        </div>
        <div className="indicators">
          {images.map((image, index) => (
            <button
              className="indicator"
              name="indicator"
              key={index}
              onClick={handleButtonClick}
              value={index}
              style={index == currentImage ? { background: "#fff" } : {}}
            ></button>
          ))}
        </div>
      </div>
      <button
        className="next-button"
        name="next-button"
        onClick={handleButtonClick}
      >
        {`>`}
      </button>
    </div>
  );
}
