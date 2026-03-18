import { useState } from "react";
import img1 from "../../assets/cars/1.png"
import img2 from "../../assets/cars/2.png"
import img3 from "../../assets/cars/3.png"
import img4 from "../../assets/cars/4.png"
import img5 from "../../assets/cars/5.png"
import img6 from "../../assets/cars/6.png"
import img7 from "../../assets/cars/7.png"
import img8 from "../../assets/cars/8.png"
import img9 from "../../assets/cars/9.png"
import img10 from "../../assets/cars/10.png"
import img11 from "../../assets/cars/11.png"
import img12 from "../../assets/cars/12.png"
import img13 from "../../assets/cars/13.png"
import img14 from "../../assets/cars/14.png"
import img15 from "../../assets/cars/15.png"
import img16 from "../../assets/cars/16.png"
import img17 from "../../assets/cars/17.png"
import img18 from "../../assets/cars/18.png"
import img19 from "../../assets/cars/19.png"
import img20 from "../../assets/cars/20.png"
import img21 from "../../assets/cars/21.png"
import img22 from "../../assets/cars/22.png"
import img23 from "../../assets/cars/23.png"
import img24 from "../../assets/cars/24.png"
import "./original.scss";

const brands = [
  { name: "Audi", svg: img1},
  { name: "BMW", svg: img2 },
  { name: "Chrysler", svg: img3},
  { name: "Citroen", svg: img4 },
  { name: "Ford", svg: img5},
  { name: "Honda", svg:  img6},
  { name: "Hyundai", svg:  img7},
  { name: "Isuzu", svg:  img8},
  { name: "Kia", svg:  img9},
  { name: "Mazda", svg:  img10},
  { name: "Mercedes", svg: img11},
  { name: "Mitsubishi", svg: img12 },
  { name: "Nissan", svg:  img13},
  { name: "Opel", svg:  img14},
  { name: "Peugeot", svg: img15 },
  { name: "Renault", svg:img16 },
  { name: "Seat", svg: img17 },
  { name: "Skoda", svg: img18 },
  { name: "SsangYong", svg: img19},
  { name: "Subaru", svg: img20 },
  { name: "Suzuki", svg: img21 },
  { name: "Toyota", svg: img22 },
  { name: "Volvo", svg: img23 },
  { name: "VW", svg: img24 },
];

const tabs = ["Оригинальные каталоги"];

export default function Original() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="catalogs container">
      <div className="catalogs__tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`catalogs__tab ${i === activeTab ? "catalogs__tab--active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="catalogs__grid">
        {brands.map((brand) => (
          <button key={brand.name} className="brand-card">
            <img className="brand-card-img" src={brand.svg} alt="" />
            <span className="brand-card__name">{brand.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}