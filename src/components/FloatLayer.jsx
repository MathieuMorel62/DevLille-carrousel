import { useState } from 'react'

const SVGS = ['as-flame', 'as-flame', 'as-drop', 'as-drop', 'as-tender']
const CODE = ['</>', '{ }', ';', '#!', '$_', '0 1', '()', '~/', '&&']
const rnd = (a, b) => a + Math.random() * (b - a)

function generateFloats() {
  return Array.from({ length: 22 }, () => {
    const isCode = Math.random() < 0.38
    const size = isCode ? rnd(16, 40) : rnd(26, 72)
    const id = SVGS[(Math.random() * SVGS.length) | 0]
    const ratio = id === 'as-tender' ? 0.43 : id === 'as-drop' ? 1.44 : 1.06
    return {
      isCode, size, id, ratio,
      left: rnd(-2, 98),
      top: rnd(-2, 96),
      dur: rnd(9, 18).toFixed(1),
      delay: (-rnd(0, 12)).toFixed(1),
      sway: rnd(-26, 26).toFixed(0),
      rise: rnd(-34, -10).toFixed(0),
      spin: rnd(-18, 18).toFixed(0),
      opacity: rnd(0.05, 0.16).toFixed(2),
      blur: Math.random() < 0.5 ? rnd(1, 2.4).toFixed(1) : null,
      text: CODE[(Math.random() * CODE.length) | 0],
    }
  })
}

export function FloatLayer() {
  const [floats] = useState(generateFloats)

  return (
    <div className="float-layer" aria-hidden="true">
      {floats.map((f, i) => (
        <div
          key={i}
          className={`float-item${f.isCode ? ' float-code' : ''}`}
          style={{
            left: f.left + '%',
            top: f.top + '%',
            '--dur': f.dur + 's',
            '--delay': f.delay + 's',
            '--sway': f.sway + 'px',
            '--rise': f.rise + 'px',
            '--spin': f.spin + 'deg',
            opacity: f.opacity,
            filter: f.blur ? `blur(${f.blur}px)` : undefined,
            ...(f.isCode
              ? { fontSize: f.size + 'px' }
              : { width: f.size + 'px', height: f.size * f.ratio + 'px' }
            ),
          }}
        >
          {f.isCode ? f.text : <svg><use href={`#${f.id}`} /></svg>}
        </div>
      ))}
    </div>
  )
}
