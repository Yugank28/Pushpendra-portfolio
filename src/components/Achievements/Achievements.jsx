import React, { useEffect, useRef, useState } from 'react';
import { achievements } from '../../data/portfolioData';
import './Achievements.css';

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

const typeIcon = { trophy: '🏆', state: '🎯', college: '🏛️', cert: '📜', upcoming: '⚡' };

const Achievements = () => {
  const [headerRef, headerVis] = useVisible(0.1);
  const [upcomingRef, upcomingVis] = useVisible(0.05);

  const trophies = achievements.filter(a => a.type === 'trophy');
  const state = achievements.filter(a => a.type === 'state');
  const college = achievements.filter(a => a.type === 'college');
  const certs = achievements.filter(a => a.type === 'cert');

  return (
    <section className="achievements" id="achievements">
      <div className="achievements__bg-text">WINS</div>

      <div className={`achievements__header ${headerVis ? 'visible' : ''}`} ref={headerRef}>
        <div className="achievements__title">MY <span>ACHIEVEMENTS</span></div>
        <div className="achievements__subtitle">Trophies · State Events · Certifications</div>
      </div>

      {/* TROPHIES */}
      <AchLabel>🏆 Top <span>Trophies</span></AchLabel>
      <div className="achievements__trophies">
        {trophies.map((a, i) => (
          <TrophyCard key={i} item={a} delay={i * 0.1} />
        ))}
      </div>

      {/* STATE EVENTS */}
      <AchLabel>🎯 State Level <span>Events</span></AchLabel>
      <div className="achievements__state-grid">
        {state.map((a, i) => (
          <AchCard key={i} item={a} delay={i * 0.08} icon={typeIcon[a.type]} />
        ))}
      </div>

      {/* COLLEGE EVENTS */}
      <AchLabel>🏛️ College <span>Competitions</span></AchLabel>
      <div className="achievements__state-grid">
        {college.map((a, i) => (
          <AchCard key={i} item={a} delay={i * 0.08} icon={typeIcon[a.type]} />
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <AchLabel>📜 <span>Certifications</span></AchLabel>
      <div className="achievements__cert-grid">
        {certs.map((a, i) => (
          <CertCard key={i} item={a} delay={i * 0.08} />
        ))}
      </div>

      {/* UPCOMING */}
      <div
        className={`achievements__upcoming ${upcomingVis ? 'visible' : ''}`}
        ref={upcomingRef}
      >
        <div className="achievements__upcoming-left">
          <div className="achievements__upcoming-badge">UPCOMING</div>
          <div className="achievements__upcoming-title">Next Battles — NIT Engineering</div>
          <div className="achievements__upcoming-sub">Still hungry. Still fighting. Always will be.</div>
        </div>
        <div className="achievements__upcoming-items">
          {['Hackathon', 'Project Competition'].map(item => (
            <div key={item} className="achievements__upcoming-item">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* sub-components */
const AchLabel = ({ children }) => {
  const [ref, vis] = useVisible(0.05);
  return <div className={`achievements__section-label ${vis ? 'visible' : ''}`} ref={ref}>{children}</div>;
};

const TrophyCard = ({ item, delay }) => {
  const [ref, vis] = useVisible(0.05);
  return (
    <div className={`achievements__trophy-card ${vis ? 'visible' : ''}`} ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="achievements__trophy-icon">🏆</div>
      <div>
        <div className="achievements__trophy-title">{item.title}</div>
        <div className="achievements__trophy-year">{item.year}</div>
        <div className="achievements__trophy-desc">{item.description}</div>
      </div>
    </div>
  );
};

const AchCard = ({ item, delay, icon }) => {
  const [ref, vis] = useVisible(0.05);
  return (
    <div className={`achievements__state-card ${vis ? 'visible' : ''}`} ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="achievements__card-icon">{icon}</div>
      <div className="achievements__card-year">{item.year}</div>
      <div className="achievements__card-title">{item.title}</div>
      <div className="achievements__card-desc">{item.description}</div>
    </div>
  );
};

const CertCard = ({ item, delay }) => {
  const [ref, vis] = useVisible(0.05);
  return (
    <div className={`achievements__cert-card ${vis ? 'visible' : ''}`} ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="achievements__cert-icon">📜</div>
      <div className="achievements__cert-year">{item.year}</div>
      <div className="achievements__cert-title">{item.title}</div>
      <div className="achievements__cert-desc">{item.description}</div>
    </div>
  );
};

export default Achievements;