import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Calendar, Tag, Clock, ChevronRight, Search, X } from "lucide-react";
import "./NewsPage.scss";

// ─── Mock Data ───────────────────────────────────────────────────────────────
const NEWS = [
    {
        id: 1,
        category: "Новинки",
        title: "Новая линейка фильтров Mann+Hummel — улучшенная фильтрация для дизельных двигателей",
        excerpt: "Немецкий производитель выпустил обновлённую серию масляных и воздушных фильтров с увеличенным ресурсом до 20 000 км. Теперь доступны в нашем каталоге.",
        date: "14 марта 2025",
        readTime: "3 мин",
        tag: "Фильтры",
        featured: true,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
        number: "01",
    },
    {
        id: 2,
        category: "Акции",
        title: "Скидка 20% на тормозные колодки Brembo весь апрель",
        excerpt: "Специальное предложение на полную линейку тормозных колодок и дисков Brembo. Успейте обновить тормозную систему до летнего сезона.",
        date: "11 марта 2025",
        readTime: "2 мин",
        tag: "Тормоза",
        featured: false,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        number: "02",
    },
    {
        id: 3,
        category: "Обзор",
        title: "Сравниваем моторные масла 5W-30: Mobil 1, Castrol и Liqui Moly",
        excerpt: "Детальный тест трёх популярных масел на вязкость, защиту двигателя и поведение при экстремальных температурах. Результаты вас удивят.",
        date: "8 марта 2025",
        readTime: "7 мин",
        tag: "Масла",
        featured: false,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
        number: "03",
    },
    {
        id: 4,
        category: "Советы",
        title: "Как правильно выбрать аккумулятор: ёмкость, пусковой ток и бренд",
        excerpt: "Разбираем основные параметры АКБ и объясняем, почему «самый большой» — не всегда лучший выбор для вашего автомобиля.",
        date: "5 марта 2025",
        readTime: "5 мин",
        tag: "АКБ",
        featured: false,
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
        number: "04",
    },
    {
        id: 5,
        category: "Новинки",
        title: "Поступление подвески KYB — полный ассортимент амортизаторов для японских авто",
        excerpt: "На склад прибыла крупная партия амортизаторов KYB Excel-G и Gas-A-Just для Toyota, Honda, Nissan и Mazda. Отгрузка в день заказа.",
        date: "1 марта 2025",
        readTime: "2 мин",
        tag: "Подвеска",
        featured: false,
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80",
        number: "05",
    },
    {
        id: 6,
        category: "Компания",
        title: "AutoParts открывает новый склад в Ташкенте площадью 2 000 м²",
        excerpt: "Расширение логистической инфраструктуры позволит сократить время доставки по Узбекистану до 1–2 рабочих дней. Открытие запланировано на май 2025.",
        date: "25 февраля 2025",
        readTime: "3 мин",
        tag: "Компания",
        featured: false,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
        number: "06",
    },
    {
        id: 7,
        category: "Советы",
        title: "Признаки износа ремня ГРМ: когда менять и что будет если пропустить",
        excerpt: "Объясняем симптомы, периодичность замены и почему своевременная замена ремня ГРМ — это страховка от капитального ремонта двигателя.",
        date: "20 февраля 2025",
        readTime: "6 мин",
        tag: "Двигатель",
        featured: false,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
        number: "07",
    },
];

const CATEGORIES = ["Все", "Новинки", "Акции", "Обзор", "Советы", "Компания"];


const NewsCard = ({ item, index }) => {
    const [hovered, setHovered] = useState(false);
    const col = index % 3;
    const row = Math.floor(index / 3);

    return (
        <motion.article
            className={"news-card" + (hovered ? " news-card--hovered" : "")}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: row * 0.08 + col * 0.06, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-40px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="news-card__media">
                <motion.img
                    src={item.image}
                    alt={item.title}
                    animate={{ scale: hovered ? 1.08 : 1 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="news-card__overlay" />
                <motion.div
                    className="news-card__shimmer"
                    animate={{ x: hovered ? "220%" : "-120%" }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                />
                <span className="news-card__num">{item.number}</span>
                <span className="news-badge news-badge--glass">{item.category}</span>
            </div>

            <div className="news-card__body">
                <span className="news-card__tag">
                    <Tag size={9} />{item.tag}
                </span>

                <motion.h3
                    animate={{ y: hovered ? -3 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {item.title}
                </motion.h3>

                <motion.p
                    animate={{ opacity: hovered ? 1 : 0.6 }}
                    transition={{ duration: 0.25 }}
                >
                    {item.excerpt}
                </motion.p>

                <div className="news-card__foot">
                    <div className="news-meta">
                        <span className="news-meta__item"><Calendar size={10} />{item.date}</span>
                        <span className="news-meta__dot" />
                        <span className="news-meta__item"><Clock size={10} />{item.readTime}</span>
                    </div>

                    <motion.span
                        className="news-card__read"
                        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
                        transition={{ duration: 0.25 }}
                    >
                        <ArrowUpRight size={13} />
                    </motion.span>
                </div>
            </div>

            <motion.div
                className="news-card__line"
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
        </motion.article>
    );
};

const NewsPage = () => {
    const [activeCategory, setActiveCategory] = useState("Все");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const featured = NEWS.find((n) => n.featured);
    const rest = NEWS.filter((n) => !n.featured);

    const filtered = rest.filter((n) => {
        const matchCat = activeCategory === "Все" || n.category === activeCategory;
        const matchSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div className="news-page">

            <main className="news-main container">

                <section className="news-section">
                    <div className="news-section__label">
                        <span className="news-section__line" />
                        {activeCategory === "Все" ? "Все Новости" : activeCategory}
                        <span className="news-section__count">{filtered.length}</span>
                    </div>

                    {filtered.length > 0 ? (
                        <div className="news-grid">
                            {filtered.map((item, i) => (
                                <NewsCard key={item.id} item={item} index={i} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="news-empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <span>Ничего не найдено</span>
                            <button onClick={() => { setSearchQuery(""); setActiveCategory("Все"); }}>
                                Сбросить фильтры
                            </button>
                        </motion.div>
                    )}
                </section>

                <motion.div
                    className="news-loadmore"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <button className="news-loadmore__btn">
                        Загрузить ещё <ArrowUpRight size={14} />
                    </button>
                </motion.div>

            </main>
        </div>
    );
};

export default NewsPage;