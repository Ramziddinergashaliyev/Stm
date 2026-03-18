import { useEffect, useRef } from "react";
import "./about.scss"
import img from "../../assets/about.jpg"
import img1 from "../../assets/about2.jpg"
import { NavLink } from "react-router-dom";

const steps = [
  { n: "1", title: "Заявка", desc: "Оставляете заявку онлайн или звоните нам" },
  { n: "2", title: "Подбор", desc: "Менеджер подбирает запчасть по VIN-коду" },
  { n: "3", title: "Проверка", desc: "Контроль качества на складе" },
  { n: "4", title: "Доставка", desc: "Отправка курьером или ТК" },
  { n: "5", title: "Гарантия", desc: "Получаете деталь с гарантийным талоном" },
];

export default function About() {
  const navRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onScroll = () => navRef.current?.classList.toggle("scrolled", window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((el) => io.observe(el));

    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <>
      <div className="ap">

        <section className="about__hero">
          <div className="about__hero-bg" />
          <div className="about__hero-overlay" />
          <div className="container">
            <div className="about__hero-inner">
              <div className="about__hero-badge"><span className="badge-dot" />Официальный поставщик MANGA</div>
              <h1 className="about__hero-title">
                ЗАПЧАСТИ ДЛЯ ВСЕХ ВИДОВ ТРАНСПОРТА
              </h1>
              <p className="about__hero-sub">Мы предлагаем широкий ассортимент качественных запчастей для легковых и грузовых автомобилей, спецтехники и коммерческого транспорта. Только проверенные поставщики, надежные детали и выгодные цены. Гарантируем быструю поставку и профессиональную консультацию для каждого клиента.</p>
              <div className="about__hero-actions">
                <NavLink to={"/supplier"} className="btn-primary">Наши Поставщики →</NavLink>
                <NavLink to={"/contact"} className="btn-outline">Связаться</NavLink>
              </div>
            </div>
            <div className="about__hero-stats">
              {[{ n: "10+", l: "Лет на рынке" }, { n: "50K+", l: "Позиций" }, { n: "98%", l: "Довольных" }].map((s) => (
                <div className="about__hero-stat" key={s.l}>
                  <span className="stat-num">{s.n}</span>
                  <span className="stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-split container" id="about">
          <div className="about-split-left">
            <div className="about-split-left-img">
              <img src={img1} alt="MANGA" className="about-img" />
            </div>
          </div>
          <div className="about-split-right">
            <p className="about-split-right-text">О компании</p>
            <h2 className="about-split-right-title">НАДЁЖНОСТЬ В КАЖДОЙ ДЕТАЛИ</h2>
            <p className="about-split-right-body">Мы более 10 лет поставляем качественные и проверенные автозапчасти для коммерческого и легкового транспорта. Каждая деталь проходит строгий контроль качества и соответствует международным стандартам. Прямые поставки от производителей позволяют нам гарантировать стабильность, честные цены и уверенность на дороге.</p>
          </div>
        </section>

        <section className="process reveal container" id="proc">
          <div className="proc-hdr">
            <p className="proc-hdr-title">Как мы работаем</p>
            <h2 className="proc-hdr-text">ПРОСТО БЫСТРО НАДЁЖНО.</h2>
          </div>
          <div className="proc-steps">
            {steps.map((s) => (
              <div className="proc-step" key={s.n}>
                <div className="proc-circle">{s.n}</div>
                <div className="proc-title">{s.title}</div>
                <p className="proc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}