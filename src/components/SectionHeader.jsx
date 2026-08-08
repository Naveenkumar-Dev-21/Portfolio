export default function SectionHeader({ icon, title }) {
  return (
    <div className="section-header">
      <span className="section-icon">{icon}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-line" />
    </div>
  )
}
