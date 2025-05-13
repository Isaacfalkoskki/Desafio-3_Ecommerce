import { useEffect, useRef } from "react";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {

      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft >= maxScrollLeft - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div style={{
      overflowX: "auto",
      display: "flex",
      gap: "20px",
      scrollBehavior: "smooth",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      padding: "20px 0" }} ref={carouselRef}>

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Lovely ${index}`}
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "10px",
            flexShrink: 0,
            objectFit: "cover" }}/>
      ))}

    </div>
    
  );
};
