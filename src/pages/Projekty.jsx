import CaseStudyCard from "../components/CaseStudyCard.jsx";

function Projekty() {

  const caseStudies = [
    {
      tag: '01 / Nebankovka',
      title: 'Funkčný analytik',
      context: 'Tento projekt sa zameriaval na poskytovanie pôžičok klientom nebankovej spoločnosti. Súčasťou projektu bolo navrhnúť a implementovať viacero nových produktov do existujúceho riešenia.',
      role: `Na projekte som pôsobil ako funkčný analytik a podieľal som sa na návrhu nového produktu. V rámci tejto úlohy som si prehĺbil znalosti finančnej matematiky (najmä tým, že mojou úlohou bolo jej zmapovanie a zdokumentovanie) a fungovania bankovníctva.
        Zadanie prichádzalo priamo od klienta, mojou úlohou bolo vykomunikovať jeho predstavy a pretaviť ich do funkčného zadania spracovateľného pre vývojový tím. To zahŕňalo analýzu a pochopenie potrieb klienta,
        ktoré som následne spracoval do funkčnej špecifikácie obsahujúcej use case scenáre, ER diagramy a ďalšie UML diagramy relevantné pre danú problematiku.
        Na projekte som tiež úzko spolupracoval s UX tímom, kde som zabezpečoval, aby návrhy dávali funkčný zmysel. Okrem nových produktov som analyzoval aj nové funkcionality systému, napríklad „Gateway" pre nových klientov,
        čo v preklade znamená, že som s klientom definoval sadu pravidiel, kedy môže klient dostať úver.
        Ďalšou oblasťou, ktorú je vhodné zmieniť a na ktorej som sa tiež podieľal, bola nová administratívna service pre call centrum. Išlo o prechod z existujúceho riešenia tretej strany na nové interné riešenie.
        Podieľal som sa na analýze zobrazovania klientských prípadov a na pridávaní nových funkcionalít, ktoré uľahčujú prácu call centra.`,
      result: 'Acquisition service, nový finančný produkt, nové procesy dokumentácie, nová logika bonusových sadzieb, nová administratívna service',
      tags: ['Aktivity diagram', 'Use case scenáre', 'User stories', 'Sekvenčný diagram', 'ER Diagram', 'Jira', 'Confluence', 'Balsamiq', 'AI', 'Draw.io', 'Wireframes', 'Figma'],
    },
    {
      tag: '02 / IS pre športové centrá',
      title: 'Funkčný analytik + QA',
      context: 'Tento projekt sa zameriaval na informačný systém pre správu športových centier. Systém slúžil na rezervácie športovísk a kurzov, správu členstiev a rozvrhov, sledovanie progresu športovca, plánovanie tréningov a priebeh testov, pričom bolo potrebné ho napojiť aj na služby tretích strán.',
      role: `V projekte išlo o presun zo starého systému do nového. Mojou úlohou bolo s klientom vykomunikovať želanú funkcionalitu a navrhnúť nové riešenie, ktoré by zodpovedalo ich požiadavkám. V rámci projektu som navrhol správu testov, správu testovacích relácií a priebeh testov.
        Ďalšou časťou systému bolo napojenie na externú službu, ktorá klientovi dodávala testovacie zariadenia a poskytovala výsledné dáta, ktoré sa museli zobrazovať v našom systéme. V rámci toho som navrhol, ako sa dáta budú zobrazovať, a úzko som spolupracoval s vývojom na návrhu prepojenia týchto systémov cez API. Súčasťou mojej úlohy bolo aj samotné testovanie týchto zariadení, aby som overil, že namerané dáta zodpovedajú realite a správne sa zobrazujú v systéme.
        Zároveň som klienta presvedčil, aby prešiel na nový a modernejší dizajn systému. To sa mi podarilo hlavne pomocou prototypov, ktoré som vytvoril pomocou AI (Claude a mnou vytvorených skills). To umožnilo klientovi vyskúšať si systém tak, ako by fungoval v reálnej prevádzke.`,
      result: 'Nový systém prepojený s externou službou pre testovacie zariadenia cez API, moderný dizajn overený klikateľnými prototypmi, úspešný presun klienta zo starého riešenia',
      tags: ['API integrácia', 'Prototypovanie', 'Testovanie', 'Akceptačné kritériá', 'Jira', 'Confluence', 'Balsamiq', 'AI'],
    },
    {
      tag: '03 / Sociálna sieť',
      title: 'QA + Funkčný analytik',
      context: 'Tento projekt sa zaoberal sociálnou sieťou pre fanúšikov športu. Na stránkach sa zobrazovali články a videá z udalostí a pozvánky na nové udalosti. V rámci systému bolo možné zakúpiť si členstvá a užívateľom boli pridelené rôzne výhody.',
      role: `Na tomto projekte som pôsobil predovšetkým ako QA a sekundárne aj ako analytik. V rámci analytickej časti som navrhoval základnú funkcionalitu a wireframe, ktorý bol neskôr použitý pri vývoji.
        Na tomto projekte som si hlavne osvojil základy manuálneho testovania. Mojou úlohou bolo manuálne testovať funkcionalitu, spisovať testovacie scenáre v nástroji Xray a testovať API.
        Súčasťou mojej práce bolo aj zaznamenávanie a reportovanie nájdených chýb v Jire, ich overovanie po oprave a vykonávanie regresného testovania pred jednotlivými release-mi, aby nové zmeny nepokazili existujúcu funkcionalitu.`,
      result: 'Otestovaná funkcionalita, spísané testovacie scenáre',
      tags: ['Xray', 'Manuálne testovanie', 'Testovacie scenáre', 'User stories', 'Smoke testy', 'Regresné testovanie','Jira', 'Confluence', 'Balsamiq'],
    },
  ]

  return (
      <>
        <section>
          <div className="content">
            <p className="eyebrow">Projekty</p>
            <h1>Vybrané projekty a moja rola v nich.</h1>
            <p>Pri každom projekte uvádzam kontext zadania, čo som robil a aký bol výsledok.</p>
          </div>
        </section>

        <section>
          <div className="content">
            {caseStudies.map((studie) => (
                <CaseStudyCard key={studie.tag} tags={studie.tags} title={studie.title} tag={studie.tag} role={studie.role} context={studie.context} result={studie.result}></CaseStudyCard>
            ))}
          </div>
        </section>
      </>
  )
}

export default Projekty
