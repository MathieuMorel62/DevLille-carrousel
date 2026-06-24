export function ProgressBar({ progress }) {
  return (
    <div className="progress">
      <div className="progress__fill" style={{ width: `${progress * 100}%` }} />
    </div>
  )
}
