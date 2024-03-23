import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const images = ["/mino.png", "vercel.svg", "/mino.png"];

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log("first", currentImageIndex);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change interval as per your requirement (in milliseconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentImageIndex]); // Trigger auto slide when currentImageIndex changes

  return (
    <div className=" relative flex justify-center items-center  w-[100%]">
      <button
        className="absolute left-2 md:left-[133px] flex justify-center items-center bg-white text-white w-[30px] h-[30px] md:w-[44px] md:h-[44px] rounded-full"
        onClick={prevImage}
      >
        <MdKeyboardArrowLeft
          style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
        />
      </button>
      <button
        className="absolute right-2 md:right-[133px] flex justify-center items-center bg-white text-white w-[30px] h-[30px] md:w-[44px] md:h-[44px] rounded-full"
        onClick={nextImage}
      >
        <MdKeyboardArrowRight
          style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
        />
      </button>
      <div className="absolute flex justify-between bottom-3 md:top-[606px] w-[50px] md:w-[110px] h-[20px] ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full ${
              index === currentImageIndex ? "bg-primer" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
      <div className=" w-full">
        <Image
          src={images[currentImageIndex]}
          width={800}
          height={800}
          objectFit="cover"
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full  md:h-[656.04px] h-[200px] "
        />
      </div>
    </div>
  );
}
