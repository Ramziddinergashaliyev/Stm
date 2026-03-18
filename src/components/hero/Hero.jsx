// import { useRef, useState, useEffect, useCallback } from "react";
// import heroSlide1 from "../../assets/hero-parts.jpg";
// import heroSlide2 from "../../assets/hero-slide2.jpg";
// import heroSlide3 from "../../assets/hero-slide3.jpg";
// import "./hero.scss";

// const slides = [
//   {
//     bg: heroSlide1,
//     subtitle: "Наши стандарты — ваше превосходство",
//     title: "Высококачественные",
//     highlight: "Запчасти",
//     desc: "Автомобильные запчасти профессионального уровня. Гарантия качества и надёжности.",
//     cta: "Смотреть товары",
//     tag: "01",
//   },
//   {
//     bg: heroSlide2,
//     subtitle: "Проверено на треке",
//     title: "Откройте для себя",
//     highlight: "Мощность",
//     desc: "Новейшие турбо- и тормозные системы. Созданы для максимальной производительности.",
//     cta: "Подробнее",
//     tag: "02",
//   },
//   {
//     bg: heroSlide3,
//     subtitle: "Инженерия совершенства",
//     title: "Идеальные",
//     highlight: "Компоненты двигателя",
//     desc: "Оригинальные сертифицированные компоненты двигателя высшего класса.",
//     cta: "Открыть каталог",
//     tag: "03",
//   },
// ];

// const AUTOPLAY = 6000;
// const FADE_DUR = 1400;

// export default function Hero() {
//   const [active, setActive] = useState(0);
//   const [textKey, setTextKey] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const timerRef = useRef(null);
//   const touchX = useRef(null);

//   const goTo = useCallback((idx) => {
//     if (animating || idx === active) return;
//     clearInterval(timerRef.current);
//     setAnimating(true);
//     setActive(idx);
//     setTextKey(k => k + 1);
//     setTimeout(() => setAnimating(false), FADE_DUR);
//   }, [animating, active]);

//   const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo]);
//   const prev_ = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo]);

//   useEffect(() => {
//     timerRef.current = setInterval(next, AUTOPLAY);
//     return () => clearInterval(timerRef.current);
//   }, [next]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev_();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [next, prev_]);

//   const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
//   const onTouchEnd = (e) => {
//     if (touchX.current === null) return;
//     const dx = e.changedTouches[0].clientX - touchX.current;
//     if (Math.abs(dx) > 50) dx < 0 ? next() : prev_();
//     touchX.current = null;
//   };

//   return (
//     <section className="hero" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

//       <div className="hero-bg">
//         {slides.map((s, i) => (
//           <div
//             key={i}
//             className={`hero-bg-img${i === active ? " active" : ""}`}
//             style={{ backgroundImage: `url(${s.bg})` }}
//           />
//         ))}
//       </div>

//       <div className="hero-overlay" />
//       <div className="hero-overlay-bottom" />
//       <div className="hero-tag">{slides[active].tag}</div>

//       <div className="hero-content">
//         <div className="hero-text-wrap" key={textKey}>
          
//           <div className="hero-subtitle">
//             <div className="hero-subtitle-line" />
//             <span className="hero-subtitle-text">{slides[active].subtitle}</span>
//           </div>

//           <h1 className="hero-title">
//             <span className="hero-title-line1">{slides[active].title}</span>
//             <span className="hero-title-line2">{slides[active].highlight}</span>
//           </h1>

//           <p className="hero-desc">{slides[active].desc}</p>
//           <a href="#categories" className="hero-cta">
//             {slides[active].cta}
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//           </a>

//         </div>
//       </div>

//       <div className="hero-progress" key={`p-${active}`} />

//       <div className="hero-dots">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             className={`hero-dot${i === active ? " active" : ""}`}
//             onClick={() => goTo(i)}
//             aria-label={`Слайд ${i + 1}`}
//           />
//         ))}
//       </div>

//       <div className="hero-number">
//         {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
//       </div>

//       <div className="hero-nav">

//         <button className="hero-nav-btn" onClick={prev_} aria-label="Предыдущий">
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M18 15l-6-6-6 6" />
//           </svg>
//         </button>

//         <button className="hero-nav-btn" onClick={next} aria-label="Следующий">
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </button>

//       </div>

//     </section>
//   );
// }


import { useRef, useState, useEffect, useCallback } from "react";
import heroSlide1 from "../../assets/hero-parts.jpg";
import heroSlide2 from "../../assets/hero-slide2.jpg";
import heroSlide3 from "../../assets/hero-slide3.jpg";
import "./hero.scss";
import { NavLink } from "react-router-dom";

const slides = [
  {
    bg: heroSlide1,
    subtitle: "Наши стандарты — ваше превосходство",
    title: "Высококачественные",
    highlight: "Запчасти",
    desc: "Автомобильные запчасти профессионального уровня. Гарантия качества и надёжности.",
    cta: "Смотреть Новости",
    link: "/news",
    tag: "01",
  },
  {
    bg: heroSlide2,
    subtitle: "Проверено на треке",
    title: "Откройте для себя",
    highlight: "Мощность",
    desc: "Новейшие турбо- и тормозные системы. Созданы для максимальной производительности.",
    cta: "Подробнее",
    link: "/about",
    tag: "02",
  },
  {
    bg: heroSlide3,
    subtitle: "Инженерия совершенства",
    title: "Идеальные",
    highlight: "Компоненты двигателя",
    desc: "Оригинальные сертифицированные компоненты двигателя высшего класса.",
    cta: "Открыть каталог",
    link: "/catalog",
    tag: "03",
  },
];

const AUTOPLAY = 6000;
const FADE_DUR = 1400;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const [animating, setAnimating] = useState(false);

  const timerRef = useRef(null);
  const touchX = useRef(null);

  const goTo = useCallback((idx) => {
    if (animating || idx === active) return;
    clearInterval(timerRef.current);
    setAnimating(true);
    setActive(idx);
    setTextKey(k => k + 1);
    setTimeout(() => setAnimating(false), FADE_DUR);
  }, [animating, active]);

  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo]);
  const prev_ = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, AUTOPLAY);
    return () => clearInterval(timerRef.current);
  }, [next]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev_();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev_]);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev_();
    touchX.current = null;
  };

  return (
    <section className="hero" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

      {/* Full-bleed background */}
      <div className="hero-bg">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-bg-img${i === active ? " active" : ""}`}
            style={{ backgroundImage: `url(${s.bg})` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />
      <div className="hero-overlay-bottom" />
      <div className="hero-tag">{slides[active].tag}</div>

      {/* Content wrapped in container */}
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text-wrap" key={textKey}>

            <div className="hero-subtitle">
              <div className="hero-subtitle-line" />
              <span className="hero-subtitle-text">{slides[active].subtitle}</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line1">{slides[active].title}</span>
              <span className="hero-title-line2">{slides[active].highlight}</span>
            </h1>

            <p className="hero-desc">{slides[active].desc}</p>

            <NavLink href={slides[active].link} className="hero-cta">
              {slides[active].cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NavLink>

          </div>
        </div>
      </div>

      <div className="hero-progress" key={`p-${active}`} />

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === active ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-number">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      <div className="hero-nav">
        <button className="hero-nav-btn" onClick={prev_} aria-label="Предыдущий">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <button className="hero-nav-btn" onClick={next} aria-label="Следующий">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

    </section>
  );
}