import { PROFILES } from './data/profiles'
import { useCarousel } from './hooks/useCarousel'
import { ProgressBar } from './components/ProgressBar'
import { ProfileSlide } from './components/ProfileSlide'
import { Rail } from './components/Rail'
import { FloatLayer } from './components/FloatLayer'

export default function App() {
  const { index, progress, isPlaying, goTo, next, prev, togglePause, onMouseEnter, onMouseLeave } =
    useCarousel(PROFILES.length)

  return (
    <>
      {/* Symboles SVG partagés par FloatLayer */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="gFlame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#ff2e1f" />
            <stop offset=".55" stopColor="#ff6a00" />
            <stop offset="1" stopColor="#ffb300" />
          </linearGradient>
          <linearGradient id="gDrop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff5a2c" />
            <stop offset="1" stopColor="#c20f0f" />
          </linearGradient>
          <linearGradient id="gTender" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e7a23b" />
            <stop offset="1" stopColor="#b5651d" />
          </linearGradient>
          <symbol id="as-flame" viewBox="0 0 32 34">
            <path d="M16 2 C 18 9, 26 11, 24 21 C 23 28, 18 32, 16 32 C 14 32, 9 28, 8 21 C 7 14, 13 12, 16 2 Z" fill="url(#gFlame)" />
            <path d="M16 13 C 17 17, 21 18, 20 23 C 19.5 26, 17 28, 16 28 C 15 28, 13 26, 12.5 23 C 12 19, 15 17, 16 13 Z" fill="#ffd86b" />
          </symbol>
          <symbol id="as-drop" viewBox="0 0 18 26">
            <path d="M9 1 C 13 9, 16 13, 16 17 a7 7 0 0 1 -14 0 C 2 13, 5 9, 9 1 Z" fill="url(#gDrop)" />
            <ellipse cx="6.5" cy="16" rx="1.6" ry="2.6" fill="#ffffff" opacity=".35" />
          </symbol>
          <symbol id="as-tender" viewBox="0 0 60 26">
            <path d="M8 13 C 8 6, 16 3, 26 4 C 38 5, 54 5, 56 12 C 58 19, 44 23, 30 22 C 16 21, 8 20, 8 13 Z" fill="url(#gTender)" stroke="#8a4a12" strokeWidth="1" />
            <g fill="#7a3f10" opacity=".5">
              <circle cx="20" cy="10" r="1.3" /><circle cx="30" cy="14" r="1.3" />
              <circle cx="40" cy="9" r="1.3" /><circle cx="46" cy="15" r="1.3" />
              <circle cx="26" cy="18" r="1.1" /><circle cx="36" cy="7" r="1.1" />
            </g>
          </symbol>
        </defs>
      </svg>

      <FloatLayer />

      <div className="brand-center" aria-hidden="true">
        <img src="/holberton.png" alt="" />
      </div>

      <ProgressBar progress={progress} />

      <main
        className="stage"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <header className="topbar">
          <div className="wordmark">DEVLILLE <b>// THE HOT SEAT</b> · atelier alternance</div>
          <div className="counter">
            <span className="cur">{String(index + 1).padStart(2, '0')}</span>
            <span className="sep">/</span>
            <span className="total">{String(PROFILES.length).padStart(2, '0')}</span>
          </div>
        </header>

        <section
          className="deck"
          aria-roledescription="carousel"
          aria-label="Profils des alternants"
        >
          {PROFILES.map((p, i) => (
            <ProfileSlide key={p.name} profile={p} isActive={i === index} />
          ))}
        </section>

        <Rail
          profiles={PROFILES}
          currentIndex={index}
          onPrev={prev}
          onNext={next}
          onGoTo={goTo}
          isPlaying={isPlaying}
          onTogglePause={togglePause}
        />
      </main>
    </>
  )
}
