import React from "react";

const ImageComponent = () => {
  const imageAttributes = {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image"
  };

  return (
    <div>
      <img src={imageAttributes.src} alt={imageAttributes.alt} />
    </div>
  );
};

export default ImageComponent;
