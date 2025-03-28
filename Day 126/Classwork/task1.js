const imageUrls = [
    "url1",
    "url2",
    "url3",
    "url4",
    "url5"
  ];
  
  const imageElements = imageUrls.map(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Dynamic Image";
    img.style.margin = "10px";
    return img;
  });
  
  const container = document.getElementById("image-container");
  imageElements.forEach(img => container.appendChild(img));
  