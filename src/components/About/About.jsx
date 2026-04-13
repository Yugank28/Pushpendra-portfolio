import React, { useEffect, useRef, useState } from 'react';
import { aboutContent, personalInfo } from '../../data/portfolioData';
import './About.css';

// ============================================
// INTERSECTION OBSERVER HOOK
// ============================================
const useVisible = (threshold = 0.2) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

// ============================================
// ARROW COMPONENT
// ============================================
const Arrow = ({ direction = 'right' }) => (
  <div className="about__arrow">
    {direction === 'right' ? (
      <>
        <div className="about__arrow-line" />
        <div className="about__arrow-head" />
      </>
    ) : (
      <>
        <div className="about__arrow-head" style={{
          borderLeft: 'none',
          borderRight: '10px solid var(--yellow)'
        }} />
        <div className="about__arrow-line" />
      </>
    )}
  </div>
);

// ============================================
// ABOUT COMPONENT
// ============================================
const About = () => {
  const [titleRef, titleVisible] = useVisible(0.3);
  const [layoutRef, layoutVisible] = useVisible(0.1);
  const [traitsRef, traitsVisible] = useVisible(0.2);
  const [closingRef, closingVisible] = useVisible(0.3);
  const sectionRef = useRef(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  // Sticky title based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < 0 && rect.bottom > window.innerHeight * 0.5;
      setStickyVisible(inView);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>

      {/* Background giant text */}
      <div className="about__bg-text">HUMAN</div>

      {/* Sticky ghost title */}
      <div className="about__sticky-title-wrap">
        <div className={`about__sticky-title ${stickyVisible ? 'visible' : ''}`}>
          ABOUT ME
        </div>
      </div>

      {/* ===== TITLE ENTRY ===== */}
      <div className="about__title-entry" ref={titleRef}>
        <div className={`about__title-main ${titleVisible ? 'visible' : ''}`}>
          ABOUT <span>ME</span>
        </div>
        <div className={`about__title-sub ${titleVisible ? 'visible' : ''}`}>
          The story behind the code
        </div>
      </div>

      {/* ===== MAIN LAYOUT — Left | Photo | Right ===== */}
      <div className="about__layout" ref={layoutRef}>

        {/* LEFT SIDE */}
        <div className="about__left">

          <div className={`about__content-block ${layoutVisible ? 'visible' : ''}`}>
            <div className="about__arrow-row">
              <Arrow direction="right" />
              <p className="about__para">{aboutContent.intro}</p>
            </div>
          </div>

          <div className={`about__content-block ${layoutVisible ? 'visible' : ''}`}>
            <div className="about__arrow-row">
              <Arrow direction="right" />
              <p className="about__para">{aboutContent.para1}</p>
            </div>
          </div>

          <div className={`about__content-block ${layoutVisible ? 'visible' : ''}`}>
            <div className="about__arrow-row">
              <Arrow direction="right" />
              <p className="about__para">{aboutContent.para2}</p>
            </div>
          </div>

        </div>

        {/* CENTER PHOTO */}
        <div className={`about__photo-wrap ${layoutVisible ? 'visible' : ''}`}>
          <img
            src="/assets/images/about.png"
            alt={personalInfo.name}
            className="about__photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background =
                'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
            }}
          />
          <div className="about__photo-frame" />
          <div className="about__photo-dot" />
          <div className="about__photo-badge">
            <div className="about__photo-badge-name">
              {personalInfo.name.toUpperCase()}
            </div>
            <div className="about__photo-badge-role">
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about__right">

          <div className={`about__content-block ${layoutVisible ? 'visible' : ''}`}>
            <div className="about__arrow-row">
              <p className="about__para">{aboutContent.para3}</p>
              <Arrow direction="left" />
            </div>
          </div>

          <div className={`about__content-block ${layoutVisible ? 'visible' : ''}`}>
            <div className="about__arrow-row">
              <p className="about__para">{aboutContent.closing}</p>
              <Arrow direction="left" />
            </div>
          </div>

          {/* Quick info */}
          <div className={`about__content-block ${layoutVisible ? 'visible' : ''}`}>
            <div className="about__arrow-row">
              <div style={{ flex: 1 }}>
                {[
                  ['📍 Location', 'Nagpur, Maharashtra'],
                  ['🎓 Education', 'Diploma CSE — NIT Polytechnic'],
                  ['📅 Year', '3rd Year (Final Year)'],
                  ['💼 Status', 'Open to Opportunities'],
                ].map(([label, value]) => (
                  <div key={label} style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '10px',
                    alignItems: 'baseline',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--yellow)',
                      letterSpacing: '0.1em',
                      whiteSpace: 'nowrap',
                      minWidth: '120px',
                    }}>
                      {label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'var(--white-soft)',
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <Arrow direction="left" />
            </div>
          </div>

        </div>
      </div>

      {/* ===== TRAITS GRID ===== */}
      <div className="about__traits" ref={traitsRef}>
        <div className={`about__traits-title ${traitsVisible ? 'visible' : ''}`}>
          WHAT DEFINES ME
        </div>
        <div className="about__traits-grid">
          {aboutContent.traits.map((trait, i) => (
            <div
              key={trait.label}
              className={`about__trait-card ${traitsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="about__trait-icon">{trait.icon}</span>
              <span className="about__trait-label">{trait.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CLOSING QUOTE ===== */}
      <div className="about__closing" ref={closingRef}>
        <div className={`about__closing-quote ${closingVisible ? 'visible' : ''}`}>
          "Money does not define ambition. <span>The hunt does.</span> The goal does.
          The growth of the human being behind the engineer does."
        </div>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'var(--yellow)',
          margin: '32px auto 0',
          opacity: closingVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }} />
      </div>

    </section>
  );
};

export default About;