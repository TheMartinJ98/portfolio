import SkillBar from "../components/SkillBar.jsx";
import "./Skills.css"
function Skills() {
  const categories = [
    {
      name: 'Analýza',
      skills: [
        { name: 'Zber požiadaviek', level: 'Pokročilý', percent: 85 },
        { name: 'Analýza požiadaviek', level: 'Pokročilý', percent: 85 },
        { name: 'Funkčné špecifikácie', level: 'Pokročilý', percent: 82 },
        { name: 'Use Cases', level: 'Pokročilý', percent: 80 },
        { name: 'Spisovanie akceptačných kritérií', level: 'Mierne pokročilý', percent: 68 },
        { name: 'Manuálne testovanie', level: 'Mierne pokročilý', percent: 72 },
      ],
    },
    {
      name: 'Modelovanie',
      skills: [
        { name: 'UML', level: 'Pokročilý', percent: 78 },
        { name: 'ERD', level: 'Mierne pokročilý', percent: 70 },
        { name: 'BPMN', level: 'Mierne pokročilý', percent: 62 },
        { name: 'Balsamiq', level: 'Mierne pokročilý', percent: 68 }
      ],
    },
    {
      name: 'Technické',
      skills: [
        { name: 'Práca s AI', level: 'Pokročilý', percent: 78 },
        { name: 'SQL', level: 'Mierne pokročilý', percent: 65 },
        { name: 'Power BI', level: 'Začiatočník', percent: 30 },
        { name: 'HTML5', level: 'Stredný', percent: 48 },
        { name: 'CSS', level: 'Stredný', percent: 48 },
        { name: 'JavaScript', level: 'Začiatočník', percent: 35 },
        { name: 'React.js', level: 'Začiatočník', percent: 32 },
        { name: 'Object-Oriented Programming (OOP)', level: 'Stredný', percent: 42 },
        { name: 'Node.js', level: 'Začiatočník', percent: 20 },
        { name: 'Vue.js', level: 'Začiatočník', percent: 22 },
        { name: 'Python', level: 'Začiatočník', percent: 25 },
        { name: 'C++', level: 'Začiatočník', percent: 20 },
      ],
    },
  ]

  const tools = ['Jira', 'Confluence', 'Balsamiq', 'Draw.io', 'Figma', 'Xray', 'Git', 'Microsoft Office']
  return (
      <>
        <section>
          <div className="content">
            <p className="eyebrow">Skills</p>
            <h1>Čo viem a s čím pracujem denne.</h1>
            <p>Úrovne vyjadrujú, ako samostatne v danej oblasti pracujem, od podpory tímu po plnú zodpovednosť za výstup.</p>
          </div>
        </section>

        <section>
          <div className="content">
            {categories.map((category) => (
                <div key={category.name} className="category">
                  <p>{category.name}</p>
                  <div className="skills-grid">
                    {category.skills.map((skill) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} percent={skill.percent}></SkillBar>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </section>
        <section>
          <div className="content">
            <div className="category">
              <p>Nástroje</p>
              <div className="tools">
                {tools.map((tool) => (
                    <span key={tool} className="tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
  )

}


export default Skills
