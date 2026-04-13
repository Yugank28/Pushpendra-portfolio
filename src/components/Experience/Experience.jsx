import React, { useEffect, useRef, useState } from 'react';
import { experience } from '../../data/portfolioData';
import './Experience.css';

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

const TimelineItem = ({ item, index, type }) => {
  const [ref, vis] = useVisible(0.05);
  const isRight = index % 2 !== 0;
  return (
    <div
      className={`experience__item ${isRight ? 'right' : ''} ${vis ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="experience__card">
        <div className="experience__card-year">{item.year}</div>
        <div className="experience__card-type">{type}</div>
        <div className="experience__card-title">{item.title}</div>
        <div className="experience__card-org">{item.institution || item.organization}</div>
        <div className="experience__card-desc">{item.description}</div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [headerRef, headerVis] = useVisible(0.1);
  const allItems = [
    ...experience.education.map(e => ({ ...e, type: 'Education' })),
    ...experience.work.map(w => ({ ...w, type: 'Experience' })),
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience__bg-text">JOURNEY</div>

      <div className={`experience__header ${headerVis ? 'visible' : ''}`} ref={headerRef}>
        <div className="experience__title">MY <span>JOURNEY</span></div>
        <div className="experience__subtitle">Education · Leadership · Internships</div>
      </div>

      <div className="experience__timeline">
        {allItems.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} type={item.type} />
        ))}
      </div>
    </section>
  );
};

export default Experience;