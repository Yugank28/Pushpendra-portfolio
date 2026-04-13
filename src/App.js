import React, { useState, useEffect, useRef } from 'react';
import './styles/global.css';

// ============ ALL SECTION IMPORTS ============
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import Personality from './components/Personality/Personality';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

// ============================================
// CUSTOM CURSOR
// ============================================
const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX - 6 + 'px';
      cursor.style.top = mouseY - 6 + 'px';
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX - 18) * 0.12;
      followerY += (mouseY - followerY - 18) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform = 'scale(2)';
      follower.style.width = '60px';
      follower.style.height = '60px';
    };

    const onMouseLeaveLink = () => {
      cursor.style.transform = 'scale(1)';
      follower.style.width = '36px';
      follower.style.height = '36px';
    };

    document.addEventListener('mousemove', onMouseMove);
    animateFollower();

    const addListeners = () => {
      const links = document.querySelectorAll('a, button, [data-cursor]');
      links.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    addListeners();
    const t = setTimeout(addListeners, 2000);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  );
};

// ============================================
// LOADING SCREEN
// ============================================
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onComplete();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="loading-screen"
      style={{
        opacity: progress === 100 ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: progress === 100 ? 'none' : 'all',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          className="loading-text"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', letterSpacing: '0.5em', marginBottom: '8px' }}
        >
          PKM
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
          color: 'var(--grey-light)', letterSpacing: '0.3em', marginBottom: '24px',
        }}>
          LOADING PORTFOLIO
        </div>
        <div className="loading-bar">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%`, animation: 'none', transition: 'width 0.025s linear' }}
          />
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--yellow)', marginTop: '12px', letterSpacing: '0.2em',
        }}>
          {progress}%
        </div>
      </div>

      {/* Decorative corners */}
      {[
        { top: '24px', left: '24px', borderTop: '2px solid var(--yellow)', borderLeft: '2px solid var(--yellow)' },
        { top: '24px', right: '24px', borderTop: '2px solid var(--yellow)', borderRight: '2px solid var(--yellow)' },
        { bottom: '24px', left: '24px', borderBottom: '2px solid var(--yellow)', borderLeft: '2px solid var(--yellow)' },
        { bottom: '24px', right: '24px', borderBottom: '2px solid var(--yellow)', borderRight: '2px solid var(--yellow)' },
      ].map((style, i) => (
        <div key={i} style={{ position: 'absolute', width: '40px', height: '40px', ...style }} />
      ))}
    </div>
  );
};

// ============================================
// CURVE SEPARATOR
// ============================================
export const CurveSeparator = ({ flip = false, color = '#111111' }) => (
  <div className="curve-separator" style={{ marginTop: '-2px', background: 'transparent' }}>
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', width: '100%', transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <path
        d="M0,80 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

// ============================================
// MAIN APP
// ============================================
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Cursor />

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>

        <Navbar />

        {/* 1 — HERO */}
        <Hero />

        <CurveSeparator color="#111111" />

        {/* 2 — ABOUT */}
        <About />

        <CurveSeparator flip color="#0a0a0a" />

        {/* 3 — SKILLS */}
        <Skills />

        <CurveSeparator color="#111111" />

        {/* 4 — PROJECTS */}
        <Projects />

        <CurveSeparator flip color="#0a0a0a" />

        {/* 5 — EXPERIENCE */}
        <Experience />

        <CurveSeparator color="#111111" />

        {/* 6 — ACHIEVEMENTS */}
        <Achievements />

        <CurveSeparator flip color="#0a0a0a" />

        {/* 7 — PERSONALITY */}
        <Personality />

        <CurveSeparator color="#111111" />

        {/* 8 — TESTIMONIALS */}
        <Testimonials />

        <CurveSeparator flip color="#0a0a0a" />

        {/* 9 — CONTACT */}
        <Contact />

      </div>

      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
          50% { transform: translateX(-50%) translateY(10px); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(245,197,24,0.2); }
          50% { box-shadow: 0 0 40px rgba(245,197,24,0.5); }
        }
      `}</style>
    </>
  );
}

export default App;