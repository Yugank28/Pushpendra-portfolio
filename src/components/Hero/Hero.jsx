import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

/* ============================================
   RANDOM DATA NUMBERS — background texture
   ============================================ */
const DATA_COLS = [
  { left: '2%',  values: ['2.1201146', '2022.985', '7852.721', '1028.478', '0.99821', '4471.002', '128.9001'] },
  { left: '18%', values: ['FULL_STACK', 'REACT.JS', 'NODE.JS', 'PYTHON', 'AI/ML', 'ANGULAR', 'AZURE'] },
  { left: '38%', values: ['PKM_v1.0', '██████', '░░░░░░', 'INIT...', 'LOAD...', 'BUILD', 'DEPLOY'] },
  { left: '60%', values: ['3.14159265', '1.61803398', '2.71828182', '1.41421356', '1.73205080', '0.57721566', '4.66920160'] },
  { left: '80%', values: ['NIT_POLY', 'NAGPUR_MH', 'CSE_2025', 'FULL_DEV', 'HUMAN_01', 'THINKER', 'BUILDER'] },
];

const DataBackground = () => (
  <div className="hero__data-bg">
    {DATA_COLS.map((col, ci) => (
      <div key={ci} className="hero__data-col" style={{ left: col.left }}>
        {[...col.values, ...col.values, ...col.values, ...col.values].map((v, i) => (
          <div key={i}>{v}</div>
        ))}
      </div>
    ))}
  </div>
);

/* ============================================
   PHOTO with fallback
   ============================================ */
const HeroPhoto = ({ src, alt, className }) => {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return (
      <div className="hero__photo-placeholder">
        <div className="hero__photo-placeholder-text">
          ADD YOUR PHOTO:<br />
          public/assets/images/profile3.png
        </div>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErr(true)}
    />
  );
};

/* ============================================
   HERO COMPONENT
   ============================================ */
const Hero = () => {
  const [shownLetters, setShownLetters]     = useState([]);
  const [roleShow, setRoleShow]             = useState(false);
  const [streakAnim, setStreakAnim]         = useState(false);
  const [introDone, setIntroDone]           = useState(false);
  const [bgShow, setBgShow]                 = useState(false);
  const [scratchShow, setScratchShow]       = useState(false);
  const [scrollCtaShow, setScrollCtaShow]   = useState(false);

  const driverRef    = useRef(null);
  const stickyRef    = useRef(null);
  const photo1Ref    = useRef(null);   // first pic
  const photo2Ref    = useRef(null);   // second pic overlay
  const scratchTR    = useRef(null);
  const scratchBL    = useRef(null);
  const infoName     = useRef(null);
  const infoDivider  = useRef(null);
  const infoRole     = useRef(null);
  const infoTagline  = useRef(null);
  const infoStats    = useRef(null);
  const bracketRef   = useRef(null);
  const fadeRef      = useRef(null);
  const ctxRef       = useRef(null);

  const name  = personalInfo.name.toUpperCase();
  const chars = name.split('');

  /* ============================================
     PHASE 1 — F1 INTRO
     ============================================ */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const t0 = setTimeout(() => setStreakAnim(true), 200);

    const letterTimers = chars.map((_, i) =>
      setTimeout(() => setShownLetters(prev => [...prev, i]), 450 + i * 55)
    );

    const t1 = setTimeout(() => setRoleShow(true), 450 + chars.length * 55 + 100);

    const t2 = setTimeout(() => {
      const overlay = document.querySelector('.hero__f1-overlay');
      if (overlay) {
        overlay.style.transition    = 'opacity 0.7s ease';
        overlay.style.opacity       = '0';
        overlay.style.pointerEvents = 'none';
      }
      setBgShow(true);

      setTimeout(() => {
        setIntroDone(true);
        document.body.style.overflow = '';
        setScratchShow(true);
        setScrollCtaShow(true);
      }, 700);
    }, 450 + chars.length * 55 + 1300);

    return () => {
      clearTimeout(t0); clearTimeout(t1); clearTimeout(t2);
      letterTimers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []); // eslint-disable-line

  /* ============================================
     PHASE 2 — GSAP SCROLL TIMELINE
     New order:
     0–15%  : Photo 1 diagonal reveal
     15–30% : Photo 2 overlays on Photo 1 (diagonal)
     30–45% : Scratches enter on Photo 2
     45–65% : Name + info stagger in
     65–80% : Everything fades out
     80–100%: Black fade → About
     ============================================ */
  useEffect(() => {
    if (!introDone) return;

    const initTimer = setTimeout(() => {
      ctxRef.current = gsap.context(() => {
        const driver = driverRef.current;
        if (!driver) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: driver,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            pin: false,
          }
        });

        /* ------ 0–15%: Photo 1 diagonal clip-path reveal ------ */
        tl.fromTo(photo1Ref.current,
          {
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            scale: 1.08,
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            scale: 1.0,
            duration: 0.15,
            ease: 'power2.out',
          }
        , 0);

        /* Photo 1 subtle parallax */
        tl.to(photo1Ref.current, {
          yPercent: -4,
          ease: 'none',
          duration: 0.65,
        }, 0.15);

        /* ------ 15–30%: Photo 2 overlays on Photo 1 ------ */
        /* Starts hidden, reveals with opposite diagonal (left-to-right) */
        tl.fromTo(photo2Ref.current,
          {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            opacity: 1,
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.14,
            ease: 'power2.inOut',
          }
        , 0.15);

        /* Photo 2 slight scale-in as it reveals */
        tl.fromTo(photo2Ref.current,
          { scale: 1.06 },
          { scale: 1.0, duration: 0.14, ease: 'power2.out' }
        , 0.15);

        /* ------ 30–45%: Scratches enter on Photo 2 ------ */
        tl.fromTo(scratchTR.current,
          { x: '100%' },
          { x: '0%', duration: 0.12, ease: 'power3.out' }
        , 0.30);

        tl.fromTo(scratchBL.current,
          { x: '-100%' },
          { x: '0%', duration: 0.12, ease: 'power3.out' }
        , 0.33);

        /* ------ 40–65%: Name + info stagger in ------ */
        tl.fromTo(infoName.current,
          { opacity: 0, y: 50, skewX: -3 },
          { opacity: 1, y: 0, skewX: 0, duration: 0.14, ease: 'power3.out' }
        , 0.40);

        tl.fromTo(infoDivider.current,
          { width: 0 },
          { width: 60, duration: 0.10, ease: 'power2.out' }
        , 0.50);

        tl.fromTo(infoRole.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }
        , 0.52);

        tl.fromTo(infoTagline.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }
        , 0.56);

        tl.fromTo(infoStats.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }
        , 0.60);

        tl.fromTo(bracketRef.current,
          { opacity: 0, scale: 1.3 },
          { opacity: 1, scale: 1, duration: 0.10, ease: 'power2.out' }
        , 0.54);

        /* ------ 65–78%: Fade everything out ------ */
        tl.to([scratchTR.current, scratchBL.current],
          { opacity: 0, duration: 0.06, ease: 'power1.in' }
        , 0.65);

        tl.to([
          infoName.current, infoDivider.current, infoRole.current,
          infoTagline.current, infoStats.current, bracketRef.current
        ],
          { opacity: 0, y: -30, duration: 0.08, stagger: 0.01, ease: 'power2.in' }
        , 0.67);

        /* Both photos clip out */
        tl.to(photo2Ref.current,
          {
            clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
            scale: 1.1,
            duration: 0.12,
            ease: 'power2.in',
          }
        , 0.70);

        tl.to(photo1Ref.current,
          {
            clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
            scale: 1.12,
            duration: 0.12,
            ease: 'power2.in',
          }
        , 0.72);

        /* ------ 80–100%: Final black fade ------ */
        tl.fromTo(fadeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.20, ease: 'power1.in' }
        , 0.80);

      });
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (ctxRef.current) ctxRef.current.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [introDone]); // eslint-disable-line

  /* ============================================
     RENDER
     ============================================ */
  return (
    <section className="hero" id="hero">

      {/* F1 INTRO */}
      <div className="hero__f1-overlay">
        <div className={`hero__streak ${streakAnim ? 'animate' : ''}`} />
        <div className="hero__f1-name">
          {chars.map((ch, i) => (
            <span
              key={i}
              className={`hero__f1-letter ${shownLetters.includes(i) ? 'show' : ''}`}
              style={{
                animationDelay: '0s',
                color: ch === '.' ? 'var(--yellow)' : 'var(--white)',
                marginLeft: ch === ' ' ? '0.25em' : undefined,
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </div>
        <div className={`hero__f1-role ${roleShow ? 'show' : ''}`}>
          Full Stack Developer
        </div>
      </div>

      {/* SCROLL DRIVER */}
      <div className="hero__scroll-driver" ref={driverRef}>
        <div className="hero__sticky" ref={stickyRef}>

          {/* BG data layer */}
          <div className={`hero__bg-layer ${bgShow ? 'show' : ''}`}>
            <DataBackground />
          </div>

          {/* PHOTO 1 — first pic (diagonal reveal right→left) */}
          <div className="hero__photo-layer" ref={photo1Ref}>
            <HeroPhoto
              src="/assets/images/profile3.png"
              alt={personalInfo.name}
              className="hero__photo-full"
            />
          </div>

          {/* PHOTO 2 — second pic (overlays on Photo 1, left→right reveal) */}
          {/* Put your second photo at: public/assets/images/profile2.jpg */}
          <div
            className="hero__photo-layer"
            ref={photo2Ref}
            style={{
              zIndex: 3,
              clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', // hidden initially
            }}
          >
            <HeroPhoto
              src="/assets/images/profile2.png"
              alt={personalInfo.name}
              className="hero__photo-full"
              style={{ filter: 'grayscale(10%) contrast(1.2) brightness(0.9)' }}
            />
          </div>

          {/* SCRATCHES on top of Photo 2 */}
          <div className={`hero__scratch-layer ${scratchShow ? 'show' : ''}`}>
            <div className="hero__scratch-tr" ref={scratchTR} />
            <div className="hero__scratch-bl" ref={scratchBL} />
          </div>

          {/* NAME + INFO */}
          <div className="hero__info-layer">
            <div className="hero__info-name" ref={infoName}>
              {personalInfo.name.split(' ').map((word, wi) => (
                <div key={wi}>
                  {wi === 1
                    ? <><span className="yellow">{word[0]}</span>{word.slice(1)}</>
                    : word
                  }
                </div>
              ))}
            </div>
            <div className="hero__info-divider" ref={infoDivider} />
            <div className="hero__info-role" ref={infoRole}>Full Stack Developer</div>
            <div className="hero__info-tagline" ref={infoTagline}>
              "{personalInfo.tagline}"
            </div>
            <div className="hero__info-stats" ref={infoStats}>
              {[
                { label: 'Location', value: 'Nagpur, MH' },
                { label: 'Year',     value: '3rd Year Diploma' },
                { label: 'Status',   value: 'Open to Work' },
                { label: 'Stack',    value: 'Full Stack' },
              ].map(s => (
                <div key={s.label} className="hero__info-stat">
                  <span className="hero__info-stat-label">{s.label}</span>
                  <span className="hero__info-stat-value">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EYE BRACKET */}
          <div className="hero__bracket" ref={bracketRef} />

          {/* SCROLL CTA */}
          <div className={`hero__scroll-cta ${scrollCtaShow && introDone ? 'show' : ''}`}>
            <span>Scroll</span>
            <div className="hero__scroll-line" />
          </div>

          {/* FINAL FADE */}
          <div className="hero__final-fade" ref={fadeRef} />

        </div>
      </div>

    </section>
  );
};

export default Hero;