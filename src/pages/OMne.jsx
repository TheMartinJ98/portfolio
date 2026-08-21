import TimelineEntry from '../components/TimelineEntry.jsx'
import './OMne.css'

function OMne() {
  const experiences = [
    { date: '02/2023 - 07/2026', place: 'TechFides', title: 'Funkčný analytik', text: 'Analýza a návrh nových modulov informačného systému, vrátane modelovania procesov, definovania používateľských scenárov a validácie požiadaviek s klientom. Súčasťou práce bola aj tvorba UML diagramov a prototypov s využitím AI, ako aj priama komunikácia s klientom počas celého životného cyklu projektu.' },
    { date: '08/2023 - 12/2023', place: 'TechFides', title: 'QA Tester', text: 'Hlavnou náplňou práce bolo manuálne testovanie, testovanie API, reportovanie nájdených chýb a spisovanie testovacích scenárov.' },
  ]

  const education = [
    { date: '2021 - 2024', place: 'Mendelova univerzita Brno', title: 'Otvorená informatika / Inžiniersky titul', text: 'V rámci tohto oboru som sa venoval datovej analýze a strojovému učeniu.' },
    { date: '2018 - 2021', place: 'Mendelova univerzita Brno', title: 'Otvorená informatika / Bakalársky titul', text: 'V rámci tohto oboru som sa špecializoval na vývoj webových aplikácií.' },
    { date: '2014 - 2018', place: 'Gymnázium Jána Adama Raymana', title: 'Stredoškolské vzdelanie', text: 'Všeobecné stredoškolské vzdelanie s dôrazom na matematiku a prírodné vedy.' },
  ]

  return (
    <>
      <section>
        <div className="content hero-with-photo">
          <div>
            <p className="eyebrow">O mne</p>
            <h1>Analytik s chuťou rozvíjať sa.</h1>
          </div>
          <div className="avatar-placeholder">
            <img src="/martin-jevin.jpg" alt="Martin Jevin" className="avatar-image" />
          </div>
        </div>
      </section>

      <section>
        <div className="content bio-grid">
          <div className="bio-text">
            <p className="bio-lead">Mám 3,5 roka skúseností s biznis a funkčnou analýzou, ktoré dopĺňa certifikácia ECBA.</p>
            <p>K práci pristupujem systematicky, snažím sa, aby boli požiadavky zrozumiteľné predtým, než sa dostanú do vývoja.
              Najlepšie sa mi darí v tímoch, kde môžem byť pri celom cykle od zberu požiadaviek až po overenie výsledku,
              keďže vďaka skúsenostiam s QA viem posúdiť riešenie z oboch strán, ako analytik aj ako tester. Najviac ma bavia projekty,
              kde treba navrhnúť proces alebo systém od základu, nie len upravovať to, čo už existuje.
              Za dobre odvedenú analýzu považujem takú, po ktorej vývojový tím nemá zbytočné otázky a výsledný produkt sedí s tým, čo klient naozaj potreboval.</p>
            <p>Do budúcna by som sa rád posunul smerom k vedeniu analytického tímu. Popri tom ma baví tvoriť prototypy pomocou AI a rád by som sa v tejto oblasti ďalej rozvíjal,
              spolu s bližším prepojením na UX dizajn. Priebežne sa vzdelávam v oblasti AI a programovania.</p>
          </div>
          <div className="fact-sheet">
            <div className="fact-row">
              <span className="eyebrow">Rola</span>
              <span>Funkčný a biznis analytik / QA </span>
            </div>
            <div className="fact-row">
              <span className="eyebrow">Certifikácia</span>
              <span>ECBA</span>
            </div>
            <div className="fact-row">
              <span className="eyebrow">Jazyky</span>
              <span>Slovenčina, Angličtina</span>
            </div>
            <div className="fact-row">
              <span className="eyebrow">Dostupnosť</span>
              <span>Full-time / freelance</span>
            </div>
            <a className="btn btn-primary" href="/cv-martin-jevin.pdf" download>Stiahnuť CV (PDF)</a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content">
          <p className="eyebrow section-title">Vzdelanie</p>
          <div className="timeline">
            {education.map((item) => (
              <TimelineEntry key={item.date + item.place} date={item.date} place={item.place} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content">
          <p className="eyebrow section-title">Skúsenosti</p>
          <div className="timeline">
            {experiences.map((item) => (
              <TimelineEntry key={item.date + item.place} date={item.date} place={item.place} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OMne
