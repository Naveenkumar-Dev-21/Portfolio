/* Shared by ExperienceSection and EducationSection — identical card shape. */
export default function TimelineCard({ title, subtitle, date, desc }) {
  return (
    <div className="timeline-card">
      <div className="timeline-header">
        <span className="timeline-title">{title}</span>
        <span className="timeline-date">{date}</span>
      </div>
      <p className="timeline-subtitle">{subtitle}</p>
      <p className="timeline-desc">{desc}</p>
    </div>
  )
}
