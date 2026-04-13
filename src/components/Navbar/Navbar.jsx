import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Hero', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Journey', href: 'experience' },
  { label: 'Wins', href: 'achievements' },
  { label: 'Human', href: 'personality' },
  { label: 'Words', href: 'testimonials' },
  { label: 'Connect', href: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // detect active section
      const sections = navItems.map(n => document.getElementById(n.href)).filter(Boolean);
      const current = sections.find(sec => {
        const r = sec.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar__logo" onClick={() => scrollTo('hero')}>
          P<span>K</span>M
        </div>

        <ul className="navbar__links">
          {navItems.map(item => (
            <li key={item.href}>
              <span
                className={`navbar__link ${active === item.href ? 'active' : ''}`}
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <div
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
        >
          <div className="navbar__hamburger-line" />
          <div className="navbar__hamburger-line" />
          <div className="navbar__hamburger-line" />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <span
            key={item.href}
            className="navbar__mobile-link"
            onClick={() => scrollTo(item.href)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </>
  );
};

export default Navbar;