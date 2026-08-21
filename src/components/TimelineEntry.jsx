import './TimelineEntry.css'

function TimelineEntry({ date, place, title, text }) {
  return (
    <article className="timeline-entry">
      <div>
        <p className="mono-label">{date}</p>
        <p className="mono-sublabel">{place}</p>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default TimelineEntry
