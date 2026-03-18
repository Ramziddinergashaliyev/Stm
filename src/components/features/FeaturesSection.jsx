// import { motion } from "framer-motion";
// import { Shield, Truck, Award, Headphones } from "lucide-react";
// import "./FeaturesSection.scss";

// const features = [
//   {
//     icon: Shield,
//     title: "Kafolatlangan sifat",
//     desc: "Barcha mahsulotlar xalqaro standartlarga mos",
//     num: "01",
//   },
//   {
//     icon: Truck,
//     title: "Tezkor yetkazib berish",
//     desc: "O'zbekiston bo'ylab tez va ishonchli yetkazib berish",
//     num: "02",
//   },
//   {
//     icon: Award,
//     title: "Original qismlar",
//     desc: "Faqat sertifikatlangan va original ehtiyot qismlar",
//     num: "03",
//   },
//   {
//     icon: Headphones,
//     title: "24/7 Qo'llab-quvvatlash",
//     desc: "Professional maslahat va texnik yordam",
//     num: "04",
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className="features">
//       <div className="container">
//         <div className="features__container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="features__header"
//           >
//             <div className="features__subtitle">
//               <span></span>
//               <p>Afzalliklar</p>
//               <span></span>
//             </div>

//             <h2>
//               Nega aynan <span>STM?</span>
//             </h2>
//           </motion.div>

//           <div className="features__grid">
//             {features.map((f, i) => (
//               <motion.div
//                 key={f.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.1 }}
//                 className="feature-card"
//               >
//                 <span className="feature-card__number">{f.num}</span>

//                 <div className="feature-card__icon">
//                   <f.icon size={20} />
//                 </div>

//                 <h3>{f.title}</h3>
//                 <p>{f.desc}</p>

//                 <div className="feature-card__line"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


import { motion } from "framer-motion";
import { Shield, Truck, Award, Headphones, Wrench, Clock } from "lucide-react";
import "./FeaturesSection.scss";

const features = [
  {
    icon: Shield,
    title: "Гарантированное качество",
    desc: "Мы предлагаем только проверенные и сертифицированные товары",
    num: "01",
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    desc: "Оперативная и безопасная доставка по всему Узбекистану",
    num: "02",
  },
  {
    icon: Award,
    title: "Оригинальные запчасти",
    desc: "Работаем только с официальными поставщиками",
    num: "03",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    desc: "Профессиональная консультация и техническая помощь",
    num: "04",
  },
  {
    icon: Wrench,
    title: "Профессиональный сервис",
    desc: "Наши специалисты помогут с подбором и установкой",
    num: "05",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    desc: "Быстрый подбор нужных деталей без лишних хлопот",
    num: "06",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="features__header"
        >
          <h2>
            Почему именно <span>STM?</span>
          </h2>
        </motion.div>

        <div className="features__grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <span className="feature-card__number">{f.num}</span>

              <div className="feature-card__icon">
                <f.icon size={22} />
              </div>

              <h3>{f.title}</h3>
              <p>{f.desc}</p>

              <motion.div
                className="feature-card__line"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
