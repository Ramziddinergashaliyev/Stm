// import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { useRef, useState } from "react";
// import "./CategoriesSection.scss";

// import catEngine from "../../assets/cat-engine.jpg";
// import catBraking from "../../assets/cat-braking.jpg";
// import catTurbo from "../../assets/cat-turbo.jpg";
// import catSuspension from "../../assets/cat-suspension.jpg";
// import catTransmission from "../../assets/cat-transmission.jpg";
// import catElectrical from "../../assets/cat-electrical.jpg";
// import akk from "../../assets/akk.jpg";
// import shini from "../../assets/shini.png";
// import xim from "../../assets/xim.jpg";
// import masla from "../../assets/masla.jpg";
// import aks from "../../assets/aks.jpg";

// const categories = [
//   { name: "Двигатель и Поршень", image: catEngine, count: "120+", tag: "Двигатель" },
//   { name: "Тормозная система", image: catBraking, count: "85+", tag: "Тормоза" },
//   { name: "Масла", image: masla, count: "60+", tag: "Масла" },
//   { name: "Подвеска", image: catSuspension, count: "95+", tag: "Подвеска" },
//   { name: "Трансмиссия", image: catTransmission, count: "70+", tag: "Трансмиссия" },
//   { name: "Электрооборудование", image: catElectrical, count: "110+", tag: "Электрика" },
//   { name: "Шины", image: shini, count: "110+", tag: "Шины" },
//   { name: "АКБ", image: akk, count: "110+", tag: "АКБ" },
//   { name: "Аксессуары", image: aks, count: "110+", tag: "Аксессуары" },
//   { name: "Автохимия", image: xim, count: "110+", tag: "Автохимия" },
// ];

// const CategoryCard = ({ cat, index }) => {
//   const cardRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();
//     x.set((e.clientX - rect.left) / rect.width - 0.5);
//     y.set((e.clientY - rect.top) / rect.height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//     setHovered(false);
//   };

//   const row = Math.floor(index / 3);
//   const col = index % 3;

//   return (
//     <motion.div
//       ref={cardRef}
//       className="cat-card"
//       style={{ rotateX, rotateY, transformPerspective: 800 }}
//       initial={{ opacity: 0, y: 60, scale: 0.92 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.65, delay: row * 0.15 + col * 0.1, ease: [0.22, 1, 0.36, 1] }}
//       viewport={{ once: true, margin: "-60px" }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={handleMouseLeave}
//     >
//       <motion.div
//         className="cat-card__border"
//         animate={{ opacity: hovered ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       />

//       <div className="cat-card__img-wrap">

//         <motion.img
//           src={cat.image}
//           alt={cat.name}
//           animate={{ scale: hovered ? 1.12 : 1 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         />

//         <div className="cat-card__grain" />

//         <div className="cat-card__overlay" />

//         <motion.div
//           className="cat-card__scanline"
//           initial={{ y: "100%" }}
//           animate={{ y: hovered ? "-100%" : "100%" }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         />

//       </div>

//       <motion.div
//         className="cat-card__tag"
//         animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0.7 }}
//         transition={{ duration: 0.3 }}
//       >
//         <span className="cat-card__tag-dot" />
//         {cat.tag}
//       </motion.div>

//       <div className="cat-card__body">
//         <div className="cat-card__info">
//           <motion.h3
//             animate={{ y: hovered ? -4 : 0 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//           >
//             {cat.name}
//           </motion.h3>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
//             transition={{ duration: 0.35 }}
//           >
//             Подробнее →
//           </motion.p>
//         </div>

//         <motion.div
//           className="cat-card__arrow"
//           animate={{
//             opacity: hovered ? 1 : 0,
//             y: hovered ? 0 : 12,
//             rotate: hovered ? 0 : -45,
//             background: hovered ? "#e10600" : "transparent",
//           }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//         >
//           <ArrowUpRight size={14} />
//         </motion.div>
//       </div>

//       <motion.div
//         className="cat-card__line"
//         animate={{ scaleX: hovered ? 1 : 0 }}
//         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//       />
//     </motion.div>
//   );
// };

// const SplitTitle = ({ text, accent }) => {
//   const allChars = (text + " " + accent).split("");
//   const textLen = text.length;

//   return (
//     <h2 className="categories__title" aria-label={text + " " + accent}>
//       {(text + " ").split("").map((ch, i) => (
//         <motion.span
//           key={i}
//           className="categories__title-char"
//           initial={{ y: 60, opacity: 0, rotateX: -80 }}
//           whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
//           transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
//           viewport={{ once: true }}
//         >
//           {ch === " " ? "\u00A0" : ch}
//         </motion.span>
//       ))}
//       <span className="categories__title-accent">
//         {accent.split("").map((ch, i) => (
//           <motion.span
//             key={i}
//             className="categories__title-char"
//             initial={{ y: 60, opacity: 0, rotateX: -80 }}
//             whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
//             transition={{ duration: 0.6, delay: 0.05 * (textLen + 1 + i), ease: [0.22, 1, 0.36, 1] }}
//             viewport={{ once: true }}
//           >
//             {ch}
//           </motion.span>
//         ))}
//       </span>
//     </h2>
//   );
// };

// const CategoriesSection = ({ hide }) => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
//   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   return (
//     <section className="categories" ref={sectionRef}>
//       <motion.div className="categories__bg" style={{ y: bgY }} />

//       <div className="container">
//         {
//           hide === false
//             ?
//             <>
//               <div className="categories__top">
//                 <div>
//                   <motion.span
//                     className="categories__subtitle"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "auto" }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     viewport={{ once: true }}
//                   >
//                     Категории
//                   </motion.span>
//                   <SplitTitle text="Типы" accent="товаров" />
//                 </div>

//                 <motion.a
//                   href="#"
//                   className="categories__link"
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 4 }}
//                 >
//                   Смотреть все <ArrowUpRight size={14} />
//                 </motion.a>
//               </div>
//               <motion.div
//                 className="categories__counter"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
//                 viewport={{ once: true }}
//               />
//             </>
//             :
//             <></>
//         }

//         <div className="categories__grid">
//           {categories.map((cat, i) => (
//             <CategoryCard key={cat.name} cat={cat} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;


import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import "./CategoriesSection.scss";

import catEngine from "../../assets/cat-engine.jpg";
import catBraking from "../../assets/cat-braking.jpg";
import catSuspension from "../../assets/cat-suspension.jpg";
import catTransmission from "../../assets/cat-transmission.jpg";
import catElectrical from "../../assets/cat-electrical.jpg";
import akk from "../../assets/akk.jpg";
import shini from "../../assets/shini.png";
import xim from "../../assets/xim.jpg";
import masla from "../../assets/masla.jpg";
import aks from "../../assets/aks.jpg";

const categories = [
  { name: "Двигатель и Поршень", image: catEngine,       count: "120+", tag: "Двигатель",  number: "01" },
  { name: "Тормозная система",   image: catBraking,      count: "85+",  tag: "Тормоза",    number: "02" },
  { name: "Масла",               image: masla,           count: "60+",  tag: "Масла",       number: "03" },
  { name: "Подвеска",            image: catSuspension,   count: "95+",  tag: "Подвеска",    number: "04" },
  { name: "Трансмиссия",         image: catTransmission, count: "70+",  tag: "Трансмиссия", number: "05" },
  { name: "Электрооборудование", image: catElectrical,   count: "110+", tag: "Электрика",   number: "06" },
  { name: "Шины",                image: shini,           count: "110+", tag: "Шины",        number: "07" },
  { name: "АКБ",                 image: akk,             count: "110+", tag: "АКБ",         number: "08" },
  { name: "Аксессуары",          image: aks,             count: "110+", tag: "Аксессуары",  number: "09" },
  { name: "Автохимия",           image: xim,             count: "110+", tag: "Автохимия",   number: "10" },
];

const CategoryCard = ({ cat, index }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 400, damping: 40 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  const col = index % 4;
  const row = Math.floor(index / 4);

  return (
    <motion.article
      ref={cardRef}
      className={"cat-card" + (hovered ? " cat-card--hovered" : "")}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: row * 0.1 + col * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cat-card__media">
        <motion.img
          src={cat.image}
          alt={cat.name}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="cat-card__overlay" />
        <motion.div
          className="cat-card__shimmer"
          initial={{ x: "-120%" }}
          animate={{ x: hovered ? "220%" : "-120%" }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        />
      </div>

      <span className="cat-card__num">{cat.number}</span>

      <motion.div
        className="cat-card__tag"
        animate={{ y: hovered ? 0 : 2, opacity: hovered ? 1 : 0.85 }}
        transition={{ duration: 0.25 }}
      >
        <span className="cat-card__dot" />
        {cat.tag}
      </motion.div>

      <div className="cat-card__foot">
        <div className="cat-card__text">
          <motion.h3
            animate={{ y: hovered ? -4 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {cat.name}
          </motion.h3>
          <motion.div
            className="cat-card__meta"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
            transition={{ duration: 0.25, delay: hovered ? 0.05 : 0 }}
          >
            <span className="cat-card__count">{cat.count} товаров</span>
            <span className="cat-card__sep">·</span>
            <span className="cat-card__hint">Открыть</span>
          </motion.div>
        </div>

        <motion.button
          className="cat-card__btn"
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.65, rotate: hovered ? 0 : -30 }}
          transition={{ duration: 0.28, ease: "backOut" }}
          aria-label={"Открыть " + cat.name}
        >
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </motion.button>
      </div>

      <motion.div
        className="cat-card__line"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.article>
  );
};

const SplitTitle = ({ text, accent }) => {
  const textLen = text.length;
  return (
    <h2 className="categories__title" aria-label={text + " " + accent}>
      {(text + " ").split("").map((ch, i) => (
        <motion.span
          key={i}
          className="categories__title-char"
          initial={{ y: 50, opacity: 0, rotateX: -70 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.55, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
      <span className="categories__title-accent">
        {accent.split("").map((ch, i) => (
          <motion.span
            key={i}
            className="categories__title-char"
            initial={{ y: 50, opacity: 0, rotateX: -70 }}
            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.55, delay: 0.04 * (textLen + 1 + i), ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </h2>
  );
};

const CategoriesSection = ({ hide = false }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section className="categories" ref={sectionRef}>
      <motion.div className="categories__bg" style={{ y: bgY }} />

      <div className="container">
        {!hide && (
          <>
            <div className="categories__top">
              <div>
                <motion.span
                  className="categories__subtitle"
                  initial={{ width: 0 }}
                  whileInView={{ width: "auto" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Категории
                </motion.span>
                <SplitTitle text="Типы" accent="товаров" />
              </div>
              <motion.a
                href="#"
                className="categories__link"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
              >
                Смотреть все <ArrowUpRight size={14} />
              </motion.a>
            </div>
            <motion.div
              className="categories__counter"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true }}
            />
          </>
        )}

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;