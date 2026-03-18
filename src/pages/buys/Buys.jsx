import { useState, useEffect, useRef } from "react";
import "./buys.scss"

const DEALERS = [
    {
        id: 1, name: "AutoMaster Pro", city: "Москва", badge: "official",
        address: "ул. Автозаводская, 14, стр. 2", phone: "+7 (495) 123-45-67",
        hours: "Пн–Сб: 09:00–20:00", rating: 5.0, reviews: 284,
        tags: ["Двигатель", "Подвеска", "Тормоза"], hot: "Рекомендуем", icon: "🔧",
    },
    {
        id: 2, name: "ТехноЗапчасть", city: "Ташкент", badge: "partner",
        address: "пр. Амира Темура, 107", phone: "+998 71 234-56-78",
        hours: "Ежедневно: 09:00–19:00", rating: 4.8, reviews: 156,
        tags: ["Кузов", "Электрика", "Масла"], hot: null, icon: "⚙️",
    },
    {
        id: 3, name: "SpeedParts Center", city: "Санкт-Петербург", badge: "official",
        address: "Московский пр-т, 220", phone: "+7 (812) 987-65-43",
        hours: "Пн–Вс: 08:00–21:00", rating: 4.9, reviews: 412,
        tags: ["Спорт", "Тюнинг"], hot: "Топ продаж", icon: "🏎️",
    },
    {
        id: 4, name: "АвтоКомплект", city: "Алматы", badge: "dealer",
        address: "ул. Сейфуллина, 480А", phone: "+7 (727) 321-09-87",
        hours: "Пн–Пт: 09:00–18:00", rating: 4.7, reviews: 89,
        tags: ["Фильтры", "Расходники", "Аккумуляторы"], hot: null, icon: "🔩",
    },
    {
        id: 5, name: "МегаДеталь", city: "Екатеринбург", badge: "partner",
        address: "ул. Малышева, 51", phone: "+7 (343) 456-78-90",
        hours: "Пн–Сб: 08:30–19:30", rating: 4.6, reviews: 201,
        tags: ["Трансмиссия", "Охлаждение", "Выхлоп"], hot: null, icon: "🛠️",
    },
    {
        id: 6, name: "PrimeDrive Parts", city: "Новосибирск", badge: "official",
        address: "Красный пр-т, 220", phone: "+7 (383) 555-11-22",
        hours: "Ежедневно: 09:00–20:00", rating: 5.0, reviews: 43,
        tags: ["Полный ассортимент"], hot: "Новый дилер", icon: "🚗",
    },
    {
        id: 7, name: "AvtoLife", city: "Ташкент", badge: "partner",
        address: "ул. Чиланзар, 3А", phone: "+998 90 123-45-67",
        hours: "Пн–Сб: 10:00–19:00", rating: 4.5, reviews: 67,
        tags: ["Двигатель", "Масла"], hot: null, icon: "🔋",
    },
    {
        id: 8, name: "ПрофАвтоДеталь", city: "Москва", badge: "official",
        address: "Варшавское ш., 87к2", phone: "+7 (495) 777-33-44",
        hours: "Пн–Пт: 08:00–20:00", rating: 4.9, reviews: 330,
        tags: ["Тормоза", "Подвеска", "Кузов"], hot: null, icon: "🏁",
    },
];

const CITIES = ["Все города", "Москва", "Ташкент", "Санкт-Петербург", "Алматы", "Екатеринбург", "Новосибирск"];

const STORES = [
    { name: "AUTOPARTS", suffix: ".RU", color: "#E8192C", desc: "Официальный интернет-магазин. Полный каталог с гарантией. Доставка 2–5 дней по всей России.", delivery: "2–5 дней", items: "50 000+" },
    { name: "EXPRESS", suffix: "AUTO", color: "#FF6B00", desc: "Экспресс-доставка за 24 часа. Более 30 000 позиций на складе. Самовывоз из 48 городов.", delivery: "24 часа", items: "30 000+" },
    { name: "PARTS", suffix: "MAX", color: "#0A0A0A", desc: "Оптовые и розничные поставки. Специальные условия для сервисных центров.", delivery: "3–7 дней", items: "80 000+" },
];

const MAP_CITIES = [
    { name: "Москва", count: 34, x: 52, y: 28 },
    { name: "СПб", count: 28, x: 44, y: 18 },
    { name: "Ташкент", count: 22, x: 72, y: 52 },
    { name: "Алматы", count: 18, x: 78, y: 48 },
    { name: "Екатеринбург", count: 15, x: 62, y: 26 },
    { name: "Новосибирск", count: 12, x: 68, y: 30 },
];

const Stars = ({ rating }) => (
    <div style={{ display: "flex", gap: 2 }}>
        {[1, 2, 3, 4, 5].map(i => (
            <span key={i} style={{ color: i <= Math.round(rating) ? "#E8192C" : "#E5E7EB", fontSize: 13 }}>★</span>
        ))}
    </div>
);

const BadgeLabel = ({ type }) => {
    const map = { official: ["#E8192C", "#FEF2F2", "Официальный"], partner: ["#FF6B00", "#FFF7ED", "Партнёр"], dealer: ["#64748B", "#F8FAFC", "Дилер"] };
    const [color, bg, label] = map[type];
    return (
        <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
            padding: "3px 9px", background: bg, color, border: `1px solid ${color}20`, borderRadius: 2
        }}>
            {label}
        </span>
    );
};

function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function DealerCard({ d, delay = 0 }) {
    const [ref, visible] = useReveal();
    const [hovered, setHovered] = useState(false);

    return (
        <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            style={{
                background: "#fff", border: `1px solid ${hovered ? "#E8192C" : "#E5E7EB"}`,
                borderTop: `3px solid ${hovered ? "#E8192C" : "#E5E7EB"}`,
                borderRadius: 4, padding: "28px 28px 24px",
                boxShadow: hovered ? "0 12px 40px rgba(232,25,44,0.12)" : "0 2px 12px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                transform: visible ? `translateY(${hovered ? -4 : 0}px)` : "translateY(24px)",
                opacity: visible ? 1 : 0,
                transitionDelay: `${delay}ms`,
                position: "relative", cursor: "pointer",
            }}>
            <div style={{ position: "absolute", top: 16, right: 16 }}><BadgeLabel type={d.badge} /></div>

            <div style={{
                width: 48, height: 48, background: "#FEF2F2", border: "1px solid #FECACA",
                borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, marginBottom: 18,
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            }}>{d.icon}</div>

            <div style={{
                fontFamily: "'Rajdhani', sans-serif", fontSize: 18, fontWeight: 700,
                letterSpacing: "0.5px", textTransform: "uppercase", color: "#0A0A0A", marginBottom: 4
            }}>{d.name}</div>
            <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase",
                color: "#9CA3AF", marginBottom: 18, display: "flex", alignItems: "center", gap: 8
            }}>
                <span style={{ width: 20, height: 1, background: "#E5E7EB", display: "inline-block" }}></span>
                {d.city}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
                {[
                    ["📍", d.address],
                    ["📞", d.phone],
                    ["🕐", d.hours],
                ].map(([icon, val]) => (
                    <div key={val} style={{
                        display: "flex", alignItems: "flex-start", gap: 10,
                        fontSize: 13, color: "#6B7280", lineHeight: 1.4
                    }}>
                        <span style={{ fontSize: 12, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                        <span>{val}</span>
                    </div>
                ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {d.hot && (
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase",
                        padding: "3px 10px", background: "#FEF2F2", color: "#E8192C", border: "1px solid #FECACA", borderRadius: 2
                    }}>
                        {d.hot}
                    </span>
                )}
                {d.tags.map(t => (
                    <span key={t} style={{
                        fontSize: 10, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
                        padding: "3px 10px", background: "#F9FAFB", color: "#6B7280", border: "1px solid #E5E7EB", borderRadius: 2
                    }}>
                        {t}
                    </span>
                ))}
            </div>

            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                borderTop: "1px solid #F3F4F6", paddingTop: 16
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Stars rating={d.rating} />
                    <span style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>{d.rating} · {d.reviews} отз.</span>
                </div>
                <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
                    color: "#E8192C", display: "flex", alignItems: "center", gap: 4
                }}>
                    Открыть <span style={{ transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "none" }}>→</span>
                </span>
            </div>
        </div>
    );
}

function MapDot({ city, delay }) {
    const [pulse, setPulse] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setPulse(true), delay);
        return () => clearTimeout(t);
    }, [delay]);

    return (
        <div style={{ position: "absolute", left: `${city.x}%`, top: `${city.y}%`, transform: "translate(-50%, -50%)" }}>
            <div style={{
                width: 14, height: 14, background: "#E8192C", borderRadius: "50%",
                boxShadow: pulse ? "0 0 0 8px rgba(232,25,44,0.1), 0 0 20px rgba(232,25,44,0.25)" : "none",
                transition: "box-shadow 1s ease",
                animation: "mapPulse 2s ease-in-out infinite",
                animationDelay: `${delay}ms`,
                position: "relative",
            }}>
                <div style={{
                    position: "absolute", bottom: -24, left: "50%", width: 1, height: 20,
                    background: "linear-gradient(to bottom, #E8192C, transparent)",
                    transform: "translateX(-50%)",
                }}></div>
            </div>
            <div style={{
                position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)",
                whiteSpace: "nowrap", textAlign: "center",
            }}>
                <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 20, color: "#0A0A0A", lineHeight: 1 }}>{city.count}</div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#9CA3AF" }}>{city.name}</div>
            </div>
        </div>
    );
}

function StoreCard({ s, delay }) {
    const [ref, visible] = useReveal();
    const [hovered, setHovered] = useState(false);
    return (
        <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            style={{
                background: "#fff", border: `1px solid ${hovered ? s.color : "#E5E7EB"}`,
                borderBottom: `3px solid ${hovered ? s.color : "#E5E7EB"}`,
                borderRadius: 4, padding: "36px 32px",
                boxShadow: hovered ? `0 12px 40px ${s.color}18` : "0 2px 12px rgba(0,0,0,0.05)",
                transition: "all 0.3s", transform: visible ? `translateY(${hovered ? -4 : 0}px)` : "translateY(24px)",
                opacity: visible ? 1 : 0, transitionDelay: `${delay}ms`, cursor: "pointer",
            }}>
            <div style={{
                fontFamily: "'Bebas Neue', cursive", fontSize: 32, letterSpacing: "3px",
                marginBottom: 12, lineHeight: 1
            }}>
                <span style={{ color: s.color }}>{s.name}</span>
                <span style={{ color: "#D1D5DB" }}>{s.suffix}</span>
            </div>
            <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
            <div style={{ display: "flex", gap: 24, marginBottom: 28 }}>
                <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#9CA3AF" }}>Доставка</div>
                    <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: "#0A0A0A", letterSpacing: "1px" }}>{s.delivery}</div>
                </div>
                <div style={{ width: 1, background: "#F3F4F6" }}></div>
                <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#9CA3AF" }}>Позиций</div>
                    <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: "#0A0A0A", letterSpacing: "1px" }}>{s.items}</div>
                </div>
            </div>
            <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
                color: s.color, display: "flex", alignItems: "center", gap: 6
            }}>
                Перейти <span style={{ transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "none" }}>→</span>
            </span>
        </div>
    );
}

export default function Buys() {
    const [activeCity, setActiveCity] = useState("Все города");
    const [search, setSearch] = useState("");
    const [mapRef, mapVisible] = useReveal();

    const filtered = DEALERS.filter(d => {
        const cityMatch = activeCity === "Все города" || d.city === activeCity;
        const searchMatch = !search || d.name.toLowerCase().includes(search.toLowerCase())
            || d.city.toLowerCase().includes(search.toLowerCase())
            || d.address.toLowerCase().includes(search.toLowerCase());
        return cityMatch && searchMatch;
    });

    return (
        <>
            <div className="page">
                <section className="buys-hero">
                    <div className="buys-hero-inner container">
                        <div className="buys-hero-eyebrow">Официальные дилеры & магазины</div>
                        <h1 className="buys-hero-title">
                            <div>ГДЕ</div>
                            <div className="outline">КУПИТЬ</div>
                            <div className="red">ЗАПЧАСТИ</div>
                        </h1>
                        <p className="buys-hero-desc">Найдите ближайший авторизованный дилерский центр или интернет-магазин. Только оригинальные запчасти с гарантией производителя.</p>
                        <div className="buys-hero-btns">
                            <button className="buys-hero-red" onClick={() => document.getElementById("dealers").scrollIntoView({ behavior: "smooth" })}>Найти дилера</button>
                            <button className="buys-hero-outline" onClick={() => document.getElementById("online").scrollIntoView({ behavior: "smooth" })}>Онлайн заказ</button>
                        </div>
                        <div className="buys-hero-stats">
                            {[["200+", "Дилерских центров"], ["48", "Городов"], ["50K+", "Позиций в каталоге"], ["24/7", "Поддержка"]].map(([n, l], i) => (
                                <div key={i} style={{ display: "flex", gap: 24, alignItems: "center" }}>
                                    <div>
                                        <div className="buys-hero-stat-num">{n}</div>
                                        <div className="buys-hero-stat-label">{l}</div>
                                    </div>
                                    {i < 3 && <div className="buys-hero-stat-sep"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="ticker">
                    <div className="ticker-track">
                        {[...Array(2)].map((_, gi) =>
                            ["ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ", "ГАРАНТИЯ 24 МЕСЯЦА", "БОЛЕЕ 200 ДИЛЕРОВ", "ДОСТАВКА ПО ВСЕЙ СТРАНЕ", "СЕРТИФИЦИРОВАННЫЕ ЦЕНТРЫ", "ПОДДЕРЖКА 24/7"].map((t, i) => (
                                <span key={`${gi}-${i}`} className="ticker-item">{t}</span>
                            ))
                        )}
                    </div>
                </div>

                <div id="dealers" style={{ background: "#F8F9FA" }}>
                    <div className="section container">
                        <div className="section-label">Авторизованные дилеры</div>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 8 }}>
                            <h2 className="section-title">ОФИЦИАЛЬНЫЕ<br />ПАРТНЁРЫ</h2>
                            <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 72, color: "rgba(0,0,0,0.04)", lineHeight: 1 }}>01</span>
                        </div>
                        <div className="divider"></div>

                        <div className="controls">
                            <div className="search-wrap">
                                <input className="search-input" placeholder="Поиск по городу, адресу или названию…"
                                    value={search} onChange={e => setSearch(e.target.value)} />
                                <span className="search-icon">🔍</span>
                            </div>
                            <div className="filters">
                                {CITIES.map(city => (
                                    <button key={city} className={`filter-btn${activeCity === city ? " active" : ""}`}
                                        onClick={() => setActiveCity(city)}>{city}</button>
                                ))}
                            </div>
                        </div>

                        <div className="dealers-grid">
                            {filtered.length === 0
                                ? <div className="no-results">По вашему запросу ничего не найдено</div>
                                : filtered.map((d, i) => <DealerCard key={d.id} d={d} delay={i * 60} />)
                            }
                        </div>
                    </div>
                </div>

                <div id="online" style={{ background: "#F8F9FA" }}>
                    <div className="section container">
                        <div className="section-label">Интернет-магазины</div>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 8 }}>
                            <h2 className="section-title">ЗАКАЗАТЬ<br />ОНЛАЙН</h2>
                            <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 72, color: "rgba(0,0,0,0.04)", lineHeight: 1 }}>03</span>
                        </div>
                        <div className="divider"></div>
                        <div className="stores-grid">
                            {STORES.map((s, i) => <StoreCard key={i} s={s} delay={i * 100} />)}
                        </div>
                    </div>
                </div>

                <div className="cta-block">
                    <div className="cta-block-container container">
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div className="cta-sup">Стать партнёром</div>
                        <div className="cta-title">ОТКРОЙТЕ<br />СВОЙ ДИЛЕРСКИЙ<br />ЦЕНТР</div>
                    </div>
                    <div style={{ display: "flex", gap: 14, flexShrink: 0, position: "relative", zIndex: 1, flexWrap: "wrap" }}>
                        <button className="btn-red">Подать заявку</button>
                        <button style={{
                            background: "transparent", color: "rgba(255,255,255,0.5)",
                            border: "1.5px solid rgba(255,255,255,0.12)",
                            fontFamily: "'Rajdhani', sans-serif", fontSize: 12,
                            fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase",
                            padding: "14px 36px", cursor: "pointer", transition: "all 0.2s",
                            clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                        }}
                            onMouseEnter={e => { e.target.style.borderColor = "#E8192C"; e.target.style.color = "#fff"; }}
                            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.12)"; e.target.style.color = "rgba(255,255,255,0.5)"; }}
                        >Узнать условия</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}