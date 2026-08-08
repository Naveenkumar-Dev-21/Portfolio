/* Report-style section header: 01 · TITLE ──────── */
export default function SectionHeader({ index, icon, title, meta }) {
  return (
    <div className="section-header">
      <span className="section-index">{String(index).padStart(2, '0')}</span>
      <span className="section-icon">{icon}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-line" />
      {meta && <span className="section-meta">{meta}</span>}
    </div>
  )
}
