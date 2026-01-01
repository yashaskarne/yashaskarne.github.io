import { useEffect, useRef } from "react";
import "./exploring.css";
import { Link } from "react-router-dom";

import img1 from "../../assets/gmp2.png";
import img2 from "../../assets/crosia2.png";
import img3 from "../../assets/vacation2.png";

export const data = [
  { id: 1, image: img1, link: "/branding/gmp#gmp" },
  { id: 2, image: img2, link: "/branding/crosia#crosia" },
  { id: 3, image: img3, link: "/branding/vacationv#vacationv" },
];

const Exploring = ({ images }) => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    if (!containerRef.current || images.length <= 2) return;

    stopAutoScroll();

    intervalRef.current = setInterval(() => {
      const container = containerRef.current;
      const slide = container.children[0];
      if (!slide) return;

      const gap = 40;
      const slideWidth = slide.offsetWidth + gap;

      // if reached end → reset smoothly
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - slideWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    }, 500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [images]);

  return (
    <div
      className="slider"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <h1 className="ce">Continue Exploring</h1>

      <div className="scroll-slider" ref={containerRef}>
        {[...images, ...images].map((item, i) => (
          <div key={i} className="slide">
            <Link to={item.link}>
              <img src={item.image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exploring;
