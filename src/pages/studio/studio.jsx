import React, { useState, useEffect } from "react";
import "./studio.css";
import Header from "../../component/Header/black_header/header";

// Still photos
import Still_img1 from "../../assets/Studio/Still_photos_img/1.png";
import Still_img2 from "../../assets/Studio/Still_photos_img/2.png";
import Still_img3 from "../../assets/Studio/Still_photos_img/3.png";
import Still_img4 from "../../assets/Studio/Still_photos_img/4.png";
import Still_img5 from "../../assets/Studio/Still_photos_img/5.png";
import Still_img6 from "../../assets/Studio/Still_photos_img/6.png";
import Still_img7 from "../../assets/Studio/Still_photos_img/7.png";
import Still_img8 from "../../assets/Studio/Still_photos_img/8.png";
import Still_img9 from "../../assets/Studio/Still_photos_img/9.png";
import Still_img10 from "../../assets/Studio/Still_photos_img/10.png";
import Still_img11 from "../../assets/Studio/Still_photos_img/11.png";
import Still_img12 from "../../assets/Studio/Still_photos_img/12.png";
import Still_img13 from "../../assets/Studio/Still_photos_img/13.png";
import Still_img14 from "../../assets/Studio/Still_photos_img/14.png";
import Still_img15 from "../../assets/Studio/Still_photos_img/15.png";
import Still_img16 from "../../assets/Studio/Still_photos_img/16.png";
import Still_img17 from "../../assets/Studio/Still_photos_img/17.png";
import Still_img18 from "../../assets/Studio/Still_photos_img/18.png";
import Still_img19 from "../../assets/Studio/Still_photos_img/19.png";
import Still_img20 from "../../assets/Studio/Still_photos_img/20.png";
import Still_img21 from "../../assets/Studio/Still_photos_img/21.png";

// Posters
import Posters_img1 from "../../assets/Studio/Posters-img/1.png";
import Posters_img2 from "../../assets/Studio/Posters-img/2.png";
import Posters_img3 from "../../assets/Studio/Posters-img/3.png";
import Posters_img4 from "../../assets/Studio/Posters-img/4.png";

// Sketchbook
import Sketchbook_img1 from "../../assets/Studio/Sketchbook-img/1.png";
import Sketchbook_img2 from "../../assets/Studio/Sketchbook-img/2.png";
import Sketchbook_img3 from "../../assets/Studio/Sketchbook-img/3.png";
import Sketchbook_img4 from "../../assets/Studio/Sketchbook-img/4.png";
import Sketchbook_img5 from "../../assets/Studio/Sketchbook-img/5.png";
import Sketchbook_img6 from "../../assets/Studio/Sketchbook-img/6.png";
import Sketchbook_img7 from "../../assets/Studio/Sketchbook-img/7.png";
import Sketchbook_img8 from "../../assets/Studio/Sketchbook-img/8.png";
import Sketchbook_img9 from "../../assets/Studio/Sketchbook-img/9.png";
import Sketchbook_img10 from "../../assets/Studio/Sketchbook-img/10.png";
import Sketchbook_img11 from "../../assets/Studio/Sketchbook-img/11.png";
import Sketchbook_img_last from "../../assets/Studio/Sketchbook-img/last.png";

// Publication
import Publication_img1 from "../../assets/Studio/Publication-img/1.png";
import Publication_img2 from "../../assets/Studio/Publication-img/2.png";
import Publication_img3 from "../../assets/Studio/Publication-img/3.png";

const studio = () => {
  const [activeImg, setActiveImg] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth <= 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const openImage = (img) => {
    if (!isMobile) return;
    setActiveImg(img);
  };

  const closeImage = () => setActiveImg(null);

  const imgProps = (img) => ({
    onClick: () => openImage(img),
  });

  return (
    <div className="studio-bg">
      <Header />

      <div className="studio-page">
        <h1 className="Still-title">Still Photos</h1>
        <div className="Still-Photos">
          <div className="column1">
            <img src={Still_img1} alt="" {...imgProps(Still_img1)} />
            <img src={Still_img2} alt="" {...imgProps(Still_img2)} />
            <img src={Still_img3} alt="" {...imgProps(Still_img3)} />
            <img src={Still_img4} alt="" {...imgProps(Still_img4)} />
            <img src={Still_img5} alt="" {...imgProps(Still_img5)} />
            <img src={Still_img6} alt="" {...imgProps(Still_img6)} />
          </div>

          <div className="column2">
            <img src={Still_img7} alt="" {...imgProps(Still_img7)} />
            <img src={Still_img8} alt="" {...imgProps(Still_img8)} />
            <img src={Still_img9} alt="" {...imgProps(Still_img9)} />
            <img src={Still_img10} alt="" {...imgProps(Still_img10)} />
            <img src={Still_img11} alt="" {...imgProps(Still_img11)} />
            <img src={Still_img12} alt="" {...imgProps(Still_img12)} />
          </div>

          <div className="column3">
            <img src={Still_img13} alt="" {...imgProps(Still_img13)} />
            <img src={Still_img14} alt="" {...imgProps(Still_img14)} />
            <img src={Still_img15} alt="" {...imgProps(Still_img15)} />
            <img src={Still_img16} alt="" {...imgProps(Still_img16)} />
            <img src={Still_img17} alt="" {...imgProps(Still_img17)} />
          </div>

          <div className="column4">
            <img src={Still_img18} alt="" {...imgProps(Still_img18)} />
            <img src={Still_img19} alt="" {...imgProps(Still_img19)} />
            <img src={Still_img20} alt="" {...imgProps(Still_img20)} />
            <img src={Still_img21} alt="" {...imgProps(Still_img21)} />
          </div>
        </div>

        <h1 className="Posters-title">Posters</h1>
        <div className="Posters">
          <img src={Posters_img1} alt="" {...imgProps(Posters_img1)} />
          <img src={Posters_img2} alt="" {...imgProps(Posters_img2)} />
          <img src={Posters_img3} alt="" {...imgProps(Posters_img3)} />
          <img src={Posters_img4} alt="" {...imgProps(Posters_img4)} />
        </div>

        <h1 className="Sketchbook-title">Sketchbook</h1>
        <div className="Sketchbook">
          <div className="sb-top">
            <div className="col1">
              <img
                src={Sketchbook_img1}
                alt=""
                {...imgProps(Sketchbook_img1)}
              />
              <img
                src={Sketchbook_img2}
                alt=""
                {...imgProps(Sketchbook_img2)}
              />
              <img
                src={Sketchbook_img3}
                alt=""
                {...imgProps(Sketchbook_img3)}
              />
            </div>

            <div className="col2">
              <img
                src={Sketchbook_img4}
                alt=""
                {...imgProps(Sketchbook_img4)}
              />
              <img
                src={Sketchbook_img5}
                alt=""
                {...imgProps(Sketchbook_img5)}
              />
              <img
                src={Sketchbook_img6}
                alt=""
                {...imgProps(Sketchbook_img6)}
              />
            </div>

            <div className="col3">
              <img
                src={Sketchbook_img7}
                alt=""
                {...imgProps(Sketchbook_img7)}
              />
              <img
                src={Sketchbook_img8}
                alt=""
                {...imgProps(Sketchbook_img8)}
              />
              <img
                src={Sketchbook_img9}
                alt=""
                {...imgProps(Sketchbook_img9)}
              />
            </div>

            <div className="col4">
              <img
                src={Sketchbook_img10}
                alt=""
                {...imgProps(Sketchbook_img10)}
              />
              <img
                src={Sketchbook_img11}
                alt=""
                {...imgProps(Sketchbook_img11)}
              />
            </div>
          </div>

          <div className="sb-bottom">
            <img
              src={Sketchbook_img_last}
              alt=""
              {...imgProps(Sketchbook_img_last)}
            />
          </div>
        </div>

        <h1 className="Publication-title">Publication</h1>
        <div className="Publication">
          <img src={Publication_img1} alt="" {...imgProps(Publication_img1)} />
          <img src={Publication_img2} alt="" {...imgProps(Publication_img2)} />
          <img src={Publication_img3} alt="" {...imgProps(Publication_img3)} />
        </div>

        <h1 className="studio-desc">
          Sketching, photography, and posters are not side interests. They train
          my eye, sense of composition, and decision-making.
          <br />
          Every project I design is informed by this practice of observing,
          documenting, and refining.
        </h1>

        <h1 className="studio-exists">
          This space exists to show the raw layer behind the finished work.
        </h1>
      </div>

      {activeImg && isMobile && (
        <div className="img-modal" onClick={closeImage}>
          <span className="close-btn" onClick={closeImage}>
            ×
          </span>

          <div className="img-modal-inner" onClick={(e) => e.stopPropagation()}>
            <img src={activeImg} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default studio;
