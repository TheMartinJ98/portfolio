import "./SkillBar.css"

function SkillBar({name, level, percent}) {
    return (
        <div className="skill">
            <div className="skill-row">
                <span>{name}</span>
                <span className="skill-level">{level}</span>
            </div>
            <div className="skill-track">
                <div className="skill-fill" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    )
}

export default SkillBar;