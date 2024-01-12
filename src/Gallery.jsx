import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

//Create by Shivam Mangal
const images = [
  { src: "/1.jpeg", alt: "1" },
  { src: "/2.jpeg", alt: "2" },
  { src: "/3.jpeg", alt: "3" },
  { src: "/4.jpeg", alt: "4" },
  { src: "/5.jpeg", alt: "5" },
  { src: "/6.jpeg", alt: "6" },
  { src: "/7.jpeg", alt: "7" },
  { src: "/8.jpeg", alt: "8" },
  { src: "/9.jpeg", alt: "9" },
  { src: "/10.jpeg", alt: "10" },
  { src: "/11.jpeg", alt: "11" },
  { src: "/12.jpeg", alt: "12" },
];

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";


export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
      {/* Shivam mangal */}
        {images.map((image) => {
          return (
            <a href={image.src}>
              <img alt={image.alt} src={image.src} />
            </a>
          );
        })}
        ...
      </LightGallery>
    </div>
  );
}
