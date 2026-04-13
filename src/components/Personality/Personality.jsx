import React, { useEffect, useRef, useState } from 'react';
import { personality, personalityClosing } from '../../data/portfolioData';
import './Personality.css';

// ============================================
// INTERSECTION OBSERVER HOOK
// ============================================
const useVisible = (threshold = 0.15) => {
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
// WORD BY WORD FADE — Opening / Closing slides
// ============================================
const WordFade = ({ text, className }) => {
  const [ref, visible] = useVisible(0.2);
  const words = text.split(' ');
  return (
    <div className={`pers__wordfade ${className || ''}`} ref={ref}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`pers__word ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: visible ? `${i * 0.07}s` : '0s' }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

// ============================================
// OPENING SLIDE
// ============================================
const OpeningSlide = () => (
  <div className="pers__opening">
    <div className="pers__opening-inner">
      <div className="pers__opening-label">A DECLARATION</div>
      <WordFade
        text="I am not wholly an engineer. I am a human — curious, restless, and endlessly exploring every domain this world has to offer."
        className="pers__opening-text"
      />
    </div>
  </div>
);

// ============================================
// CLOSING SLIDE
// ============================================
const ClosingSlide = () => (
  <div className="pers__closing">
    <div className="pers__closing-inner">
      <div className="pers__closing-label">ABOVE ALL</div>
      <WordFade
        text={personalityClosing}
        className="pers__closing-text"
      />
    </div>
  </div>
);

// ============================================
// PHOTO PLACEHOLDER
// ============================================
const PhotoPlaceholder = ({ item, revealed, onReveal }) => {
  const [err, setErr] = useState(false);

  return (
    <div className="pers__photo-wrap">
      {/* Actual image */}
      {!err && item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className={`pers__photo-img ${item.sensitive && !revealed ? 'blurred' : ''}`}
          onError={() => setErr(true)}
        />
      ) : (
        <div className="pers__photo-placeholder">
          <span className="pers__photo-domain">{item.title.toUpperCase()}</span>
          <span style={{fontSize:'0.6rem', color:'var(--grey-light)', marginTop:'8px', display:'block'}}>
            Add: /assets/images/personality/{item.id}.jpg
          </span>
        </div>
      )}

      {/* Blur overlay for sensitive */}
      {item.sensitive && !revealed && !err && item.image && (
        <div className="pers__blur-overlay">
          <div className="pers__blur-warning">
            ⚠️ {item.sensitiveNote || 'This might contain content that makes you uncomfortable'}
          </div>
          <button className="pers__show-btn" onClick={onReveal}>
            👁 SHOW
          </button>
        </div>
      )}
    </div>
  );
};

// ============================================
// IDEOLOGY CARD
// ============================================
const IdeologyCard = ({ ideology, note }) => (
  <div className="pers__ideology">
    <div className="pers__ideology-label">IDEOLOGY</div>
    <div className="pers__ideology-name">{ideology}</div>
    <div className="pers__ideology-note">"{note}"</div>
  </div>
);

// ============================================
// SINGLE PERSONALITY SLIDE
// ============================================
const PersonalitySlide = ({ item, index }) => {
  const [ref, visible] = useVisible(0.1);
  const [revealed, setRevealed] = useState(false);

  // Odd index = photo left, text right | Even = text left, photo right
  const photoLeft = index % 2 === 0;
  const bgColor   = index % 2 === 0 ? '#0A0A0A' : '#111111';

  return (
    <div
      className={`pers__slide ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ background: bgColor }}
    >
      <div className={`pers__slide-inner ${photoLeft ? 'photo-left' : 'photo-right'}`}>

        {/* Photo side */}
        <div className="pers__photo-side">
          <PhotoPlaceholder
  item={item}
  revealed={revealed}
  onReveal={() => setRevealed(true)}
/>
        </div>

        {/* Content side */}
        <div className="pers__content-side">

          <div className="pers__slide-num">
            {String(index + 1).padStart(2, '0')} / {String(personality.length).padStart(2, '0')}
          </div>

          <div className="pers__slide-title">{item.title}</div>
          <div className="pers__slide-subtitle">{item.subtitle}</div>
          <div className="pers__slide-desc">{item.description}</div>

          <IdeologyCard ideology={item.ideology} note={item.ideologyNote} />

        </div>

      </div>
    </div>
  );
};

// ============================================
// PERSONALITY COMPONENT
// ============================================
const Personality = () => {
  const [headerRef, headerVisible] = useVisible(0.2);

  return (
    <section className="pers" id="personality">

      {/* Section header */}
      <div
        className={`pers__header ${headerVisible ? 'visible' : ''}`}
        ref={headerRef}
      >
        <div className="pers__header-title">
          THE <span>HUMAN</span>
        </div>
        <div className="pers__header-subtitle">
          Beyond the engineer — the complete person
        </div>
      </div>

      {/* Opening statement */}
      <OpeningSlide />

      {/* 16 personality slides */}
      {personality.map((item, index) => (
        <PersonalitySlide key={item.id} item={item} index={index} />
      ))}

      {/* Closing statement */}
      <ClosingSlide />

    </section>
  );
};

export default Personality;