import { QRCodeSVG } from 'qrcode.react'

function QRBlock({ url, label }) {
  return (
    <div className="qr">
      <div className="qr__code">
        <QRCodeSVG value={url} size={108} bgColor="#f3ede2" fgColor="#0a0a0c" level="M" />
      </div>
      <span className="qr__label">{label}</span>
    </div>
  )
}

export function ProfileSlide({ profile: p, isActive }) {
  return (
    <article
      className={`slide${isActive ? ' active' : ''}`}
      style={{ '--accent': p.accent }}
    >
      <div className="avatar-wrap reveal" style={{ '--d': '0s' }}>
        <div className="avatar">
          {p.avatar
            ? <img src={p.avatar} alt={`Avatar de ${p.name}`} />
            : <span className="initial">{p.name[0]}</span>
          }
        </div>
      </div>

      <div className="info">
        <h2 className="pseudo reveal" style={{ '--d': '.08s' }}>
          {p.name}
        </h2>

        <div className="role reveal" style={{ '--d': '.16s' }}>
          <span className="search-badge">{p.search}</span>
          <span className="role-title">{p.role}</span>
          <span className="available">Dispo {p.available}</span>
          <span className="rhythm">{p.rhythm}</span>
        </div>

        <div className="stack reveal" style={{ '--d': '.24s' }}>
          <h3>Stack technique</h3>
          <div className="tags tags--lg">
            {p.stack.map((t) => (
              <span key={t.name} className="tag">
                {t.icon && <i className={t.icon} />}
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <p className="quote reveal" style={{ '--d': '.32s' }}>{p.quote}</p>

        <div className="links reveal" style={{ '--d': '.40s' }}>
          <QRBlock url={p.links.linkedin} label="LinkedIn" />
          <QRBlock url={p.links.github} label="GitHub" />
        </div>
      </div>
    </article>
  )
}
