import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../../data/portfolioData';
import './Skills.css';

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
// DOMAIN LABEL
// ============================================
const DomainLabel = ({ children }) => {
  const [ref, visible] = useVisible(0.3);
  return (
    <div className={`skills__domain-label ${visible ? 'visible' : ''}`} ref={ref}>
      {children}
    </div>
  );
};

// ============================================
// TECH CARD — with animated bar
// ============================================
const TechCard = ({ name, level, delay = 0 }) => {
  const [ref, visible] = useVisible(0.1);
  return (
    <div
      className={`skills__tech-card ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s`, '--level': `${level}%` }}
    >
      <div className="skills__tech-name">{name}</div>
      <div className="skills__tech-bar-wrap">
        <div className="skills__tech-bar" style={{ transitionDelay: `${delay + 0.2}s` }} />
      </div>
      <div className="skills__tech-level">{level}%</div>
    </div>
  );
};

// ============================================
// MINI PROJECT CARD — flip on hover
// ============================================
const MiniCard = ({ project, delay = 0 }) => {
  const [ref, visible] = useVisible(0.1);
  return (
    <div
      className={`skills__mini-card ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="skills__mini-card-inner">
        {/* Front */}
        <div className="skills__mini-card-front">
          <div className="skills__mini-tag">{project.tech}</div>
          <div className="skills__mini-name">{project.name}</div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--grey-light)',
            letterSpacing: '0.2em',
            marginTop: '8px',
          }}>
            HOVER TO REVEAL →
          </div>
        </div>
        {/* Back */}
        <div className="skills__mini-card-back">
          <div className="skills__mini-tag">{project.tech}</div>
          <div className="skills__mini-name">{project.name}</div>
          <div className="skills__mini-desc">{project.description}</div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// TOOL CHIP
// ============================================
const ToolChip = ({ name, delay = 0 }) => {
  const [ref, visible] = useVisible(0.1);
  return (
    <div
      className={`skills__tool-chip ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      {name}
    </div>
  );
};

// ============================================
// PILL ITEM
// ============================================
const PillItem = ({ text, delay = 0 }) => {
  const [ref, visible] = useVisible(0.1);
  return (
    <div
      className={`skills__pill-item ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="skills__pill-dot" />
      <span className="skills__pill-text">{text}</span>
    </div>
  );
};

// ============================================
// DOMAIN CARD
// ============================================
const DomainCard = ({ item, delay = 0 }) => {
  const [ref, visible] = useVisible(0.1);
  return (
    <div
      className={`skills__domain-card ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="skills__dc-status">{item.status.toUpperCase()}</div>
      <div className="skills__dc-name">{item.name}</div>
      <div className="skills__dc-desc">{item.description}</div>
    </div>
  );
};

// ============================================
// SKILLS COMPONENT
// ============================================
const Skills = () => {
  const [headerRef, headerVisible] = useVisible(0.2);

  return (
    <section className="skills" id="skills">

      {/* Background text */}
      <div className="skills__bg-text">SKILLS</div>

      {/* ===== HEADER ===== */}
      <div className={`skills__header ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
        <div className="skills__title">
          MY <span>SKILLS</span>
        </div>
        <div className="skills__subtitle">
          Technologies · Tools · Domains · Expertise
        </div>
      </div>

      {/* ===== 1. TECHNICAL SKILLS ===== */}
      <div className="skills__domain">
        <DomainLabel><span>01</span> Technical Skills</DomainLabel>
        <div className="skills__tech-grid">
          {skills.technical.map((skill, i) => (
            <TechCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>

      {/* ===== 2. MINI PROJECTS ===== */}
      <div className="skills__domain">
        <DomainLabel><span>02</span> Mini Projects</DomainLabel>
        <div className="skills__mini-grid">
          {skills.miniProjects.map((project, i) => (
            <MiniCard
              key={project.name}
              project={project}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>

      {/* ===== 3. TOOLS ===== */}
      <div className="skills__domain">
        <DomainLabel><span>03</span> Tools & Technologies</DomainLabel>
        <div className="skills__tools-grid">
          {skills.tools.map((tool, i) => (
            <ToolChip key={tool} name={tool} delay={i * 0.05} />
          ))}
        </div>
      </div>

      {/* ===== 4. SOFT + HARD SKILLS ===== */}
      <div className="skills__domain">
        <DomainLabel><span>04</span> Soft & Hard Skills</DomainLabel>
        <div className="skills__pill-grid">
          <div>
            <div className="skills__pill-col-title">SOFT SKILLS</div>
            <div className="skills__pill-list">
              {skills.softSkills.map((s, i) => (
                <PillItem key={s} text={s} delay={i * 0.07} />
              ))}
            </div>
          </div>
          <div>
            <div className="skills__pill-col-title">HARD SKILLS</div>
            <div className="skills__pill-list">
              {skills.hardSkills.map((s, i) => (
                <PillItem key={s} text={s} delay={i * 0.07} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== 5. DOMAINS ===== */}
      <div className="skills__domain">
        <DomainLabel><span>05</span> Professional Domains</DomainLabel>
        <div className="skills__domain-cards">
          {skills.domains.map((item, i) => (
            <DomainCard key={item.name} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;