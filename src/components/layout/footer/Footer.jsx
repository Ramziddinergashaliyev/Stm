import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h3 className="footer__title">ПРОДУКЦИЯ</h3>
            <ul className="footer__list">
              <li>Двигатель и Поршень</li>
              <li>Масла</li>
              <li>Подвеска</li>
              <li>Трансмиссия</li>
              <li>Электрооборудование</li>
              <li>Шины</li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">КОМПАНИЯ</h3>
            <ul className="footer__list">
              <li>О компании</li>
              <li>
                <NavLink to={"/news"}>Новости</NavLink>
              </li>
              <li>Поставщики</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">КОНТАКТЫ</h3>

            <div className="footer__contact">
              <p className="footer__label">Телефон</p>
              <a href="tel:+992 (92) 9151515">+992 (92) 9151515</a>
            </div>

            <div className="footer__contact">
              <p className="footer__label">Адрес</p>
              <p>Худжанд, ул. Сырдарьинская, 67A</p>
            </div>

            <div className="footer__contact">
              <p className="footer__label">Электронная почта</p>
              <a href="mailTo:info@fazoauto.tj">info@fazoauto.tj</a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">ОСТАВИТЬ СООБЩЕНИЕ</h3>

            <form className="footer__form">
              <input type="text" placeholder="Имя" />
              <input type="tel" placeholder="Телефон" />
              <input type="email" placeholder="Электронная почта" />
              <textarea placeholder="Сообщение"></textarea>
              <button type="submit">Отправить сейчас</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;