export default function StatusBar() {
  return (
    <div className="status-bar fade-up fade-up-1" id="status-bar">
      <div className="status-bar-left">
        <div className="status-indicator">
          <span className="status-dot" />
          <span className="status-label">Open to Opportunities</span>
        </div>
      </div>
      <div className="status-bar-right">
        <span className="status-tag">B.Tech · IT</span>
        <span>2023 – 2027</span>
      </div>
    </div>
  )
}
