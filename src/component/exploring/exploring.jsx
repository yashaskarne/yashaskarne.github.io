import { useState } from "react";
import "./exploring.css";

import img1 from "../../assets/gmp2.png";
import img2 from "../../assets/crosia2.png";
import img3 from "../../assets/vacation2.png";

import righta from "../../assets/rarrow.png";
import lefta from "../../assets/larrow.png";

const data = [
  { image: img1, link: "#" },
  { image: img2, link: "#" },
  { image: img3, link: "#" },
  { image: img2, link: "#" },
  { image: img3, link: "#" },
  { image: img1, link: "#" },
];

const Exploring = () => {
  const [index, setIndex] = useState(0);
  const visible = 2;

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < data.length - visible && setIndex(index + 1);

  return (
    <div className="slider">
      <h1 className="ce">Continue Exploring</h1>
      <div className="slider-window">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${index * 50}%)`,
          }}
        >
          {data.map((item, i) => (
            <a key={i} href={item.link} className="slide">
              <img src={item.image} alt="" />
            </a>
          ))}
        </div>
      </div>

      <div className="controls">
        {index > 0 && (
          <div onClick={prev}>
            <img src={lefta} alt="" />
          </div>
        )}
        {index < data.length - visible && (
          <div onClick={next}>
            <img src={righta} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Exploring;
