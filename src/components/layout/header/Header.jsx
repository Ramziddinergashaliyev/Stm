import React, { useEffect, useState, useRef } from "react";
import { Phone, Globe, ChevronDown, Check } from "lucide-react";
import logo from "../../../assets/logo.png"
import "./header.scss"

const LANGUAGES = [
  { code: "RU", label: "RU", flag: "" },
  { code: "EN", label: "EN", flag: "" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header__wrapper">

            <div className="header__logo">
              <a href="/" style={{ textDecoration: "none" }}>
                <img className="header__logo-img" src={logo} alt="" />
              </a>
            </div>

            <nav className="header__nav">
              <ul>
                <li><a className="nav-list" href="/">ГЛАВНАЯ</a></li>
                <li><a className="nav-list" href="/about">О КОМПАНИИ</a></li>
                <li><a className="nav-list" href="/supplier">ПОСТАВЩИКИ</a></li>
                <li><a className="nav-list" href="/contact">КОНТАКТЫ</a></li>
              </ul>
            </nav>

            <div className="header__actions">

              <div className="lang-wrapper" ref={dropdownRef}>
                <button
                  className="lang-btn"
                  onClick={() => setLangOpen((v) => !v)}
                  aria-haspopup="listbox"
                  aria-expanded={langOpen}
                >
                  <Globe size={15} />
                  <span>{selectedLang.flag} {selectedLang.code}</span>
                  <ChevronDown
                    size={13}
                    className={`chevron ${langOpen ? "open" : ""}`}
                  />
                </button>

                {langOpen && (
                  <div className="lang-dropdown" role="listbox">
                    {LANGUAGES.map((lang, i) => (
                      <React.Fragment key={lang.code}>
                        {i > 0 && <div className="lang-divider" />}
                        <div
                          className={`lang-option ${selectedLang.code === lang.code ? "active" : ""}`}
                          role="option"
                          aria-selected={selectedLang.code === lang.code}
                          onClick={() => {
                            setSelectedLang(lang);
                            setLangOpen(false);
                          }}
                        >
                          <span className="lang-option-left">
                            <span className="lang-flag">{lang.flag}</span>
                            {lang.label}
                          </span>
                          {selectedLang.code === lang.code && (
                            <Check size={13} color="#ff1a1a" />
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              <a href="tel:+992 (92) 9151515" style={{ textDecoration: "none" }}>
                <button className="contact-btn">
                  <Phone size={15} />
                  СВЯЗАТЬСЯ
                </button>
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;