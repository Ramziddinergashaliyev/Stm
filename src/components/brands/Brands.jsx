import React from "react";
import "./brands.scss"

import img1 from "../../assets/logo/logo1.jpg";
import img2 from "../../assets/logo/logo2.png";
import img3 from "../../assets/logo/logo3.png";
import img4 from "../../assets/logo/logo4.png";
import img5 from "../../assets/logo/logo5.png";
import img6 from "../../assets/logo/logo6.png";
import img7 from "../../assets/logo/logo7.png";
import img8 from "../../assets/logo/logo8.png";
import img9 from "../../assets/logo/logo9.png";
import img10 from "../../assets/logo/logo10.png";
import img11 from "../../assets/logo/logo11.png";
import img12 from "../../assets/logo/logo12.png";
import img13 from "../../assets/logo/logo13.png";
import img14 from "../../assets/logo/logo14.png";
import img15 from "../../assets/logo/logo15.png";
import img16 from "../../assets/logo/logo16.png";
import img17 from "../../assets/logo/logo17.png";
import img18 from "../../assets/logo/logo18.png";
import img19 from "../../assets/logo/logo19.png";
import img20 from "../../assets/logo/logo20.png";
import img21 from "../../assets/logo/logo21.png";
import img22 from "../../assets/logo/logo22.png";
import img23 from "../../assets/logo/logo23.png";
import img24 from "../../assets/logo/logo24.png";
import img25 from "../../assets/logo/logo25.png";
import img26 from "../../assets/logo/logo26.png";
import img27 from "../../assets/logo/logo27.png";
import img28 from "../../assets/logo/logo28.png";
import img29 from "../../assets/logo/logo29.png";
import img30 from "../../assets/logo/logo31.png";

const logos = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
  img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,
  img21,img22,img23,img24,img25,img26,img27,img28,img29,img30
];

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <h2 className="brands__title">БРЕНДЫ</h2>

        <div className="brands__grid">
          {logos.map((logo, index) => (
            <div className="brands__item" key={index}>
              <img src={logo} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;