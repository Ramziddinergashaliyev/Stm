import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import "./ContactSection.scss";

const contactItems = [
  {
    icon: Phone,
    title: "Телефон",
    lines: ["+992 (92) 9151515"],
  },

  {
    icon: Mail,
    title: "Email",
    lines: ["info@fazoauto.tj"],
  },

  {
    icon: MapPin,
    title: "Адрес",
    lines: ["Худжанд, ул. Сырдарьинская, 67A"],
  },

  {
    icon: Clock,
    title: "Режим работы",
    lines: ["Пн, Чт - Сб: 08:30 - 17:00","Вт, Ср: 08:30 - 17:30", "Вс: выходной"],
  }
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
        
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="contact">
      <div className="container">

        <motion.div {...fadeUp()} className="contact__header">
          <h2 className="contact__header-title">Свяжитесь <span>с нами</span></h2>
        </motion.div>

        <div className="contact__grid">
          <div className="contact__info">
            {contactItems.map((item, i) => (
              <motion.div key={i} {...fadeUp(0.1 + i * 0.08)} className="contact-card">
                <div className="contact-card__icon">
                  <item.icon size={17} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  {item.lines.map((line, j) => <p key={j}>{line}</p>)}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="contact__form-wrap">
            <h3>Оставьте сообщение</h3>
            <p className="contact__form-sub">Мы ответим в течение 1 рабочего дня</p>

            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__row">

                <div className="contact__field">
                  <label>Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Имя Фамилия"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="contact__field">
                  <label>Телефон</label>
                  <input
                    type="tel"
                    placeholder="+998 __ ___ __ __"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label>Сообщение</label>
                <textarea
                  rows="5"
                  placeholder="Напишите ваш вопрос или заявку..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="contact__btn"
              >
                Отправить <Send size={14} />
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="contact__success"
                >
                  ✓ Сообщение успешно отправлено!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;