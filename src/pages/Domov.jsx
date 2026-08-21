import {Link} from "react-router-dom";
import "./Domov.css"
import SkillBar from "../components/SkillBar.jsx";

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
      tag: '03 / IS pre športové centrá / Ana. + QA',
      title: 'Informačný systém pre športové centrum',
      text: 'Spolupráca s klientom na aktualizácii a vylepšení existujúceho systému vrátane integrácie so službami tretích strán.',
    },
  ]

  const skills = [
    { name: 'Zber a analýza požiadaviek', level: 'Pokročilý', percent: 85 },
    { name: 'Funkčné špecifikácie', level: 'Pokročilý', percent: 82 },
    { name: 'Use Cases', level: 'Pokročilý', percent: 80 },
    { name: 'UML', level: 'Pokročilý', percent: 78 },
    { name: 'Práca s AI', level: 'Pokročilý', percent: 78 },
    { name: 'Manuálne testovanie', level: 'Mierne pokročilý', percent: 72 },
  ]

  return (
      <>
        <section className="sections">
          <div className="content">
            <p className="eyebrow">Funkčný analytik / QA</p>
            <h1>Prekladám potreby biznisu do špecifikácií, s ktorými vie vývoj pracovať.</h1>
            <div>
              <a className="btn btn-primary" href="/cv-martin-jevin.pdf" download> Stiahnuť CV (PDF) </a>
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
            <p className="eyebrow">Vybrané schopnosti</p>
          </div>
          <div className="content skills-grid">
            {skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} percent={skill.percent}></SkillBar>
            ))}
          </div>
        </section>
      </>
  )

}

export default Domov
