import {Link} from "react-router-dom";
import "./Domov.css"

function Domov() {

  const experiences = [
    {
      tag: '01 / Nebankovka / Ana.',
      title: 'Analýza nových produktov',
      text: 'Analýza a návrh nových produktov pre nebankovú spoločnosť v úzkej spolupráci s vývojovým tímom. Navrhoval som workflow a procesné toky systému priamo s klientom.',
    },
    {
      tag: '02 / Sociálna sieť / Ana. + QA',
      title: 'Návrh systému a QA na projekte',
      text: 'Návrh sociálnej siete umožňujúcej nahrávanie článkov a videí, s možnosťou zakúpenia členstva a vstupeniek na podujatia priamo na platforme. Na projekte som pôsobil aj v role QA.',
    },
    {
      tag: '03 / IS pre športové centrá/ Ana + QA',
      title: 'Informačný systém pre športové centrum',
      text: 'Spolupráca s klientom na aktualizácii a vylepšení existujúceho systému vrátane integrácie so službami tretích strán.',
    },
  ]

  const skills = [
    { name: 'Zber a analýza požiadaviek', level: 'Pokročilý', percent: 88 },
    { name: 'BPMN 2.0', level: 'Pokročilý', percent: 85 },
    { name: 'Funkčné špecifikácie', level: 'Pokročilý', percent: 82 },
    { name: 'UML', level: 'Stredný', percent: 65 },
    { name: 'SQL', level: 'Stredný', percent: 60 },
    { name: 'Jira / Confluence', level: 'Pokročilý', percent: 80 },
  ]

  return (
      <>
        <section className="sections">
          <div className="content">
            <p className="eyebrow"> Funkčný analytik / QA</p>
            <h1>Prekladám potreby biznisu do špecifikácií, s ktorými vie vývoj pracovať.</h1>
            <p>Mám 3,5 roka skúseností s biznis a funkčnou analýzou, ktoré dopĺňa certifikácia ECBA.</p>
            <div>
              <a className="btn btn-primary" href="#"> Stiahnuť CV (PDF) </a>
              <Link className="btn btn-secondary" to="/projekty">Pozrieť projekty</Link>
            </div>
          </div>
        </section>

        <section className="sections">
          <div className="content fact-grid">
            <div className="fact">
              <p className="eyebrow">Prax</p>
              <p className="fact-value">3,5 roka</p>
            </div>
            <div className="fact">
              <p className="eyebrow">Certifikácia</p>
              <p className="fact-value">ECBA</p>
            </div>
          </div>
        </section>

        <section className="sections">
          <div className="content">
            <p className="eyebrow">Vybrané projekty</p>
          </div>
          <div className="content experience-grid">
            {experiences.map(experience => (
                <div className="experience-card" key={experience.tag}>
                  <p className="eyebrow">{experience.tag}</p>
                  <h3>{experience.title}</h3>
                  <p>{experience.text}</p>
                </div>
            ))}
          </div>
        </section>

        <section className="sections">
          <div className="content">
            <p className="eyebrow">Moje schopnosti</p>
          </div>
          <div className="content skills-grid">
            {skills.map(skill => (
                <div className="skill" key={skill.name}>
                  <div className="skill-row">
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
            ))}
          </div>
        </section>
      </>
  )

}

export default Domov
