import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex mt-3 xs:flex-col-reverse">
      <div className="w-fit pr-4 flex flex-col xs:flex-row xs:my-2 gap-4 xs:gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image)}
            className={`cursor-pointer rounded-md ml-1 overflow-hidden border-2 border-transparent transition-transform duration-300 transform hover:scale-105 ${
              mainImage === image ? "border-gray-800 hover:scale-100" : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-16 h-16 "
            />
          </div>
        ))}
      </div>
      <div className="w-fit">
        <img src={mainImage} alt="Main" className="w-full rounded-xl" />
      </div>
    </div>
  );
};

export default ImageGallery;
