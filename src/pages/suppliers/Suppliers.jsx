import React from "react";
import { LOGO } from "../../static";
import "./suppliers.scss";

const Suppliers = () => {
  return (
    <section className="suppliers container">
      <h2 className="suppliers__title">Поставщики1</h2>

      <div className="suppliers__grid">
        {LOGO?.map((item) => (
          <div key={item.id} className="suppliers__card">
            <div className="suppliers__logo">
              <img src={item.logo} alt={item.title} />
            </div>

            <div className="suppliers__info">
              <h3 className="suppliers__info-title">{item.title}</h3>
              <p className="suppliers__info-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Suppliers;