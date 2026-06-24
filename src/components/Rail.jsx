export function Rail({ profiles, currentIndex, onPrev, onNext, onGoTo, isPlaying, onTogglePause }) {
  return (
    <footer className="rail">
      <button className="ctrl" onClick={onPrev} aria-label="Profil précédent">&#10094;</button>

      <div className="pucks">
        {profiles.map((p, i) => (
          <button
            key={p.name}
            className={`puck${i === currentIndex ? ' active' : ''}`}
            style={{ '--p-accent': p.accent }}
            onClick={() => onGoTo(i)}
          >
            <span className="puck__dot">{p.name[0]}</span>
            <span className="puck__name">{p.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      <button
        className="ctrl"
        onClick={onTogglePause}
        aria-label={isPlaying ? 'Pause' : 'Lecture'}
      >
        {isPlaying ? '❙❙' : '▶'}
      </button>

      <button className="ctrl" onClick={onNext} aria-label="Profil suivant">&#10095;</button>
    </footer>
  )
}
