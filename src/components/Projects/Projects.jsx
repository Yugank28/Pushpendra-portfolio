import React, { useEffect, useRef, useState, useCallback } from 'react';
import { projects } from '../../data/portfolioData';
import './Projects.css';

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
// IMAGE with fallback placeholder
// ============================================
const ProjectImage = ({ src, alt, className, placeholderText }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`${className}-placeholder`}>
        {placeholderText || 'IMAGE COMING SOON'}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

// ============================================
// FULL SCREEN POPUP
// ============================================
const ProjectPopup = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(onClose, 400);
  };

  if (!project) return null;

  return (
    <div
      className={`projects__popup-overlay ${open ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="projects__popup">

        {/* Close button — top left */}
        <button className="projects__popup-close" onClick={handleClose}>
          ✕
        </button>

        {/* Project image */}
        <ProjectImage
          src={project.image}
          alt={project.title}
          className="projects__popup-img"
          placeholderText="SCREENSHOT COMING SOON"
        />

        {/* Content */}
        <div className="projects__popup-body">

          {/* Award badge */}
          {project.award && (
            <div className="projects__popup-award">
              🏆 {project.award}
            </div>
          )}

          <div className="projects__popup-title">{project.title}</div>
          <div className="projects__popup-subtitle">{project.subtitle}</div>
          <div className="projects__popup-desc">{project.description}</div>

          {/* Tech tags */}
          <div className="projects__popup-tags">
            {project.tech.map(t => (
              <span key={t} className="projects__popup-tag">{t}</span>
            ))}
          </div>

          {/* GitHub link — only for CCTV project */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__popup-github"
            >
              ↗ VIEW ON GITHUB
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

// ============================================
// FEATURED CARD (Row 1 — full width)
// ============================================
const FeaturedCard = ({ project, onOpen }) => {
  const [ref, visible] = useVisible(0.1);
  return (
    <div
      className={`projects__featured ${visible ? 'visible' : ''}`}
      ref={ref}
    >
      <div className="projects__featured-card" onClick={() => onOpen(project)}>

        {/* Left — image */}
        <div className="projects__featured-img">
          <ProjectImage
            src={project.image}
            alt={project.title}
            className="projects__featured-img img"
            placeholderText="IMAGE COMING SOON"
          />
        </div>

        {/* Right — content */}
        <div className="projects__featured-content">
          {project.award && (
            <div className="projects__award-badge">🏆 {project.award}</div>
          )}
          <div className="projects__featured-num">
            PROJECT 01 / {String(projects.length).padStart(2, '0')}
          </div>
          <div className="projects__featured-title">{project.title}</div>
          <div className="projects__featured-subtitle">{project.subtitle}</div>
          <div className="projects__featured-desc">{project.description}</div>
          <div className="projects__tech-tags">
            {project.tech.slice(0, 4).map(t => (
              <span key={t} className="projects__tech-tag">{t}</span>
            ))}
            {project.tech.length > 4 && (
              <span className="projects__tech-tag">+{project.tech.length - 4} more</span>
            )}
          </div>
          <div className="projects__click-hint">
            ↗ CLICK TO EXPLORE FULL PROJECT
          </div>
        </div>

      </div>
    </div>
  );
};

// ============================================
// STANDARD CARD
// ============================================
const ProjectCard = ({ project, index, direction, onOpen }) => {
  const [ref, visible] = useVisible(0.1);
  const totalProjects = projects.length;

  return (
    <div
      className={`projects__card from-${direction} ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
      onClick={() => onOpen(project)}
    >
      <div style={{ overflow: 'hidden' }}>
        <ProjectImage
          src={project.image}
          alt={project.title}
          className="projects__card-img"
          placeholderText="IMAGE COMING SOON"
        />
      </div>
      <div className="projects__card-body">
        <div className="projects__card-num">
          PROJECT {String(index + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
        </div>
        <div className="projects__card-title">{project.title}</div>
        <div className="projects__card-subtitle">{project.subtitle}</div>
        <div className="projects__tech-tags" style={{ marginBottom: '12px' }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="projects__tech-tag">{t}</span>
          ))}
        </div>
        <div className="projects__card-hint">↗ CLICK TO EXPLORE</div>
      </div>
    </div>
  );
};

// ============================================
// PROJECTS COMPONENT
// ============================================
const Projects = () => {
  const [headerRef, headerVisible] = useVisible(0.2);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // projects array:
  // index 0 = featured (full width)
  // index 1,2 = row 2 (two cards)
  // index 3,4,5 = row 3 (three cards)
  const featured = projects[0];
  const row2 = projects.slice(1, 3);
  const row3 = projects.slice(3, 6);
  const directions = ['left', 'right', 'left', 'bottom', 'bottom', 'right'];

  return (
    <section className="projects" id="projects">

      {/* Background text */}
      <div className="projects__bg-text">WORK</div>

      {/* ===== HEADER ===== */}
      <div
        className={`projects__header ${headerVisible ? 'visible' : ''}`}
        ref={headerRef}
      >
        <div className="projects__title">
          MY <span>PROJECTS</span>
        </div>
        <div className="projects__subtitle">
          Click any project to explore
        </div>
      </div>

      {/* ===== ROW 1 — FEATURED ===== */}
      {featured && (
        <FeaturedCard project={featured} onOpen={handleOpen} />
      )}

      {/* ===== ROW 2 — TWO CARDS ===== */}
      <div className="projects__row2">
        {row2.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i + 1}
            direction={directions[i + 1]}
            onOpen={handleOpen}
          />
        ))}
      </div>

      {/* ===== ROW 3 — THREE CARDS ===== */}
      <div className="projects__row3">
        {row3.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i + 3}
            direction={directions[i + 3]}
            onOpen={handleOpen}
          />
        ))}
      </div>

      {/* ===== FULL SCREEN POPUP ===== */}
      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={handleClose}
        />
      )}

    </section>
  );
};

export default Projects;