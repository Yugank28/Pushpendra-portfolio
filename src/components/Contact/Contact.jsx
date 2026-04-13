import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const useVisible = (threshold = 0.05) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const links = [
  { icon: '📧', label: 'EMAIL', value: 'yugalmishra007@gmail.com', href: 'mailto:yugalmishra007@gmail.com' },
  { icon: '💻', label: 'GITHUB', value: 'github.com/Yugank28', href: 'https://github.com/Yugank28' },
  { icon: '💼', label: 'LINKEDIN', value: 'Pushpendra Mishra', href: 'https://www.linkedin.com/in/pushpendra-mishra-0a84172b9/' },
  { icon: '📸', label: 'INSTAGRAM', value: '@_.yugank', href: 'https://instagram.com/_.yugank' },
];

const Contact = () => {
  const [headerRef, headerVis] = useVisible(0.1);
  const [taglineRef, taglineVis] = useVisible(0.1);
  const [footerRef, footerVis] = useVisible(0.05);

  return (
    <section className="contact" id="contact">
      <div className="contact__bg-text">CONNECT</div>

      <div className={`contact__header ${headerVis ? 'visible' : ''}`} ref={headerRef}>
        <div className="contact__title">LET'S <span>CONNECT</span></div>
      </div>

      <div className={`contact__tagline ${taglineVis ? 'visible' : ''}`} ref={taglineRef}>
        "I don't wait for opportunities. I build them.<br />
        But if you want to build <span>together</span> —<br />
        you know where to find me."
      </div>

      <div className="contact__links">
        {links.map((link, i) => (
          <LinkCard key={link.label} link={link} delay={i * 0.1} />
        ))}
      </div>

      <div className={`contact__footer ${footerVis ? 'visible' : ''}`} ref={footerRef}>
        <div className="contact__footer-name">
          {personalInfo.name.toUpperCase()}
        </div>
        <div className="contact__footer-copy">
          © {new Date().getFullYear()} — Built with <span>passion</span> &amp; <span>purpose</span>
        </div>
      </div>
    </section>
  );
};

const LinkCard = ({ link, delay }) => {
  const [ref, vis] = useVisible(0.05);
  return (
    <a
      className={`contact__link-card ${vis ? 'visible' : ''}`}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="contact__link-icon">{link.icon}</span>
      <div>
        <div className="contact__link-label">{link.label}</div>
        <div className="contact__link-value">{link.value}</div>
      </div>
      <span className="contact__link-arrow">↗</span>
    </a>
  );
};

export default Contact;