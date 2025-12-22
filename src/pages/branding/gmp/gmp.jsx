import React from "react";
import "./gmp.css";
import gmpicon from "../../../assets/gmpimg/icongmp.png";
import gmpimg from "../../../assets/gmpimg/imggmp.png";
import orange from "../../../assets/gmpimg/orange.png";
import black from "../../../assets/gmpimg/black.png";
import texture from "../../../assets/gmpimg/texture.png";
import bd1 from "../../../assets/gmpimg/bd1.png";
import bd2 from "../../../assets/gmpimg/bd2.png";
import bd3 from "../../../assets/gmpimg/bd3.png";
import white3 from "../../../assets/gmpimg/white3.png";
import grid from "../../../assets/gmpimg/grid.png";
import leather from "../../../assets/gmpimg/leather.png";
import gmpgold from "../../../assets/gmpimg/gmpgold.png";
import thankyou from "../../../assets/gmpimg/thankyou.png";

const gmp = () => {
  return (
    <div className="gmp">
      <div className="hero">
        <img src={gmpicon} alt="" />
        <h1>Glorious Maidens Pirate</h1>
      </div>
      <div className="gmpimg">
        <img src={gmpimg} alt="" />\
        <p>
          Brand identity and visual world for a pirate-inspired leather goods
          label. Identity system and visual direction for an artisanal leather
          brand.
        </p>
      </div>
      <div className="gmp-color">
        <div className="color-p">
          <img src={orange} alt="" />
          <p>#83D00</p>
        </div>
        <div className="color-p">
          <img src={black} alt="" />
          <p>#83D00</p>
        </div>
        <div className="color-p">
          <img src={texture} alt="" />
          <p>TEXTURE</p>
        </div>
      </div>
      <div className="brand-direction">
        <h3>Brand Direction</h3>
        <p>
          Glorious Maidens Pirate is an artisanal leather goods brand rooted in
          rebellion, craftsmanship, and raw character. The identity draws from
          pirate folklore, weathered materials, and hand-built aesthetics
          creating a visual language that feels rugged, timeless, and
          unapologetically bold. Every element is designed to celebrate
          imperfection, texture, and the romance of handmade objects.
        </p>
        <div className="bd-images">
          <img src={bd1} alt="" />
          <img src={bd2} alt="" />
          <img src={bd3} alt="" />
        </div>
      </div>
      <div className="grid">
        <h1>GRID</h1>
        <img src={grid} alt="" />
        <p>
          The identity began with early sketch explorations inspired by the idea
          of full-grain buffalo leather raw, strong, and unapologetic. Instead
          of relying on familiar pirate symbolism, the mark evolved through
          instinctive forms that felt tribal, restrained, and powerful. These
          sketches focus on shape, tension, and character, setting the
          foundation for a symbol rooted in strength and rebellion rather than
          decoration.
        </p>
        <img src={white3} alt="" />
      </div>
      <div className="leather-gmp">
        <img src={leather} alt="" />
        <p></p>
        <img src={gmpgold} alt="" className="gmp-gold" />
      </div>
      <div className="thankyou-gmp">
        <img src={thankyou} alt="" />
        <h1>THANKYOU</h1>
      </div>
    </div>
  );
};

export default gmp;
