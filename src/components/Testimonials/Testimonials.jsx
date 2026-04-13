import React, { useEffect, useRef, useState } from 'react';
import { testimonials } from '../../data/portfolioData';
import './Testimonials.css';

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

const TestimonialCard = ({ item, delay }) => {
  const [ref, vis] = useVisible(0.05);
  return (
    <div
      className={`testimonials__card ${vis ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="testimonials__quote-mark">"</span>
      <div className="testimonials__quote">"{item.quote}"</div>
      <div className="testimonials__divider" />
      <div className="testimonials__name">{item.name}</div>
      <div className="testimonials__role">{item.role}</div>
      <div className="testimonials__relation">{item.relation}</div>
    </div>
  );
};

const Testimonials = () => {
  const [headerRef, headerVis] = useVisible(0.1);
  const [featuredRef, featuredVis] = useVisible(0.05);

  const regular = testimonials.filter(t => !t.isFeatured);
  const featured = testimonials.find(t => t.isFeatured);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__bg-text">WORDS</div>

      <div className={`testimonials__header ${headerVis ? 'visible' : ''}`} ref={headerRef}>
        <div className="testimonials__title">THEIR <span>WORDS</span></div>
        <div className="testimonials__subtitle">What people say about Pushpendra</div>
      </div>

      {/* Regular 3 cards */}
      <div className="testimonials__grid">
        {regular.map((t, i) => (
          <TestimonialCard key={i} item={t} delay={i * 0.1} />
        ))}
      </div>

      {/* Featured — friends quote full width */}
      {featured && (
        <div
          className={`testimonials__featured ${featuredVis ? 'visible' : ''}`}
          ref={featuredRef}
        >
          <div className="testimonials__featured-label">FROM HIS CIRCLE — EVERY SINGLE ONE</div>
          <span className="testimonials__featured-quote-mark">"</span>
          <div className="testimonials__featured-quote">"{featured.quote}"</div>
          <div className="testimonials__featured-bottom">
            <div className="testimonials__featured-line" />
            <div>
              <div className="testimonials__featured-name">{featured.name}</div>
              <div className="testimonials__featured-role">{featured.relation}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;