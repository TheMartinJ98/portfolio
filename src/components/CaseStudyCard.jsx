import "./CaseStudyCard.css"
function CaseStudyCard({ tag, title, context, role, result, tags }) {
    return (
        <div className="case-study">
            <p className="eyebrow">{tag}</p>
            <h2>{title}</h2>
            <p><strong>Kontext:</strong> {context}</p>
            <p><strong>Moja rola:</strong> {role}</p>
            <p><strong>Výsledok:</strong> {result}</p>
            <div className="tools">
                {tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                ))}
            </div>
        </div>
    )
}

export default CaseStudyCard;