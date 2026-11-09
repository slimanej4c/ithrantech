'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
type Lang = 'fr' | 'en';
const content = {
fr: {nav:['Projets','Expertise','Parcours','Contact'], available:'Indépendant', intro:'DU CODE AUX SOLUTIONS CONCRÈTES', title:<>Je transforme vos idées<br/>en produits <em>utiles.</em></>, description:'Développeur full-stack & entrepreneur indépendant. Je conçois des applications web, des solutions SaaS et des automatisations qui répondent à de vrais besoins.', work:'Explorer mes projets', talk:'Parlons de votre projet', scroll:'DÉCOUVRIR', stats:['Missions réalisées','Avis clients positifs','En freelance depuis'], selected:'UNE SÉLECTION DE MON TRAVAIL', projects:'Des idées. Du code. De l’impact.', projectIntro:'Applications, sites en production, projets à venir et logiciels locaux : découvrez mes réalisations et leurs interfaces.', detail:'Découvrir le projet', close:'Fermer', expertise:'DE L’IDÉE À LA MISE EN LIGNE', expertiseTitle:'Une vision produit.\nToute la stack.', expertiseDesc:'Du premier échange au déploiement, je relie les besoins métier aux bonnes solutions techniques.', services:['Applications web & SaaS','IA & automatisation','Infrastructure & données'], serviceDesc:['Des interfaces intuitives, des API solides et des outils métier conçus pour évoluer.','Intégration de l’IA, traitement d’images et automatisation des tâches répétitives.','Bases de données relationnelles, authentification et déploiement sur VPS Linux.'], journey:'UN PARCOURS, DEUX PERSPECTIVES', journeyTitle:'La technique au service\ndu terrain.', journeyDesc:'Avant de développer des logiciels, j’ai travaillé dans la prévention des risques. Cette expérience m’a appris à comprendre les problèmes avant de construire les solutions.', experience:['Développeur indépendant','Inspecteur HSE','DEP · Soutien informatique','Master · Hygiène, sécurité & environnement'], expDesc:['ComeUp · Applications, automatisation et outils sur mesure','Condor Electronics · Algérie','ESIDEM · Montréal, Canada · Formation de 1 800 heures','Université de Batna · Algérie'], contactLabel:'ET SI ON CONSTRUISAIT LA SUITE ?', contactTitle:<>Une idée en tête ?<br/><em>Faisons-la avancer.</em></>, contactDesc:'Un produit à lancer, un processus à simplifier ou un site à imaginer. Racontez-moi votre projet.', email:'Écrivez-moi', cv:'Télécharger le CV source', footer:'Conçu avec soin. Développé avec Next.js.', all:'Tous', product:'Produits SaaS', client:'Sites & clients', local:'Logiciels locaux', note:'Aperçu conceptuel · interface illustrative', role:'Développeur Full-Stack', dates:'2019 — Aujourd’hui'},
en: {nav:['Projects','Expertise','Journey','Contact'], available:'Independent', intro:'FROM CODE TO REAL-WORLD SOLUTIONS', title:<>Turning your ideas<br/>into <em>useful</em> products.</>, description:'Full-stack developer & independent entrepreneur. I build web applications, SaaS solutions and automations that solve real business problems.', work:'Explore my projects', talk:'Let’s talk about your project', scroll:'EXPLORE', stats:['Completed assignments','Positive client reviews','Freelancing since'], selected:'A SELECTION OF MY WORK', projects:'Ideas. Code. Real impact.', projectIntro:'Applications, production websites, upcoming projects and desktop software: explore my work and its interfaces.', detail:'Explore project', close:'Close', expertise:'FROM FIRST IDEA TO DEPLOYMENT', expertiseTitle:'A product mindset.\nThe entire stack.', expertiseDesc:'From our first conversation to deployment, I connect business needs with the right technical solutions.', services:['Web applications & SaaS','AI & automation','Infrastructure & data'], serviceDesc:['Intuitive interfaces, reliable APIs and business tools designed to grow.','AI integrations, image processing and automation of repetitive tasks.','Relational databases, authentication and deployment on Linux VPS.'], journey:'ONE JOURNEY, TWO PERSPECTIVES', journeyTitle:'Technology grounded\nin real experience.', journeyDesc:'Before building software, I worked in workplace risk prevention. That experience taught me to understand the problem before building the solution.', experience:['Independent developer','HSE Inspector','Vocational diploma · IT Support','Master’s · Health, Safety & Environment'], expDesc:['ComeUp · Applications, automation and custom tools','Condor Electronics · Algeria','ESIDEM · Montréal, Canada · 1,800-hour programme','University of Batna · Algeria'], contactLabel:'LET’S BUILD WHAT’S NEXT', contactTitle:<>Have an idea?<br/><em>Let’s move it forward.</em></>, contactDesc:'A product to launch, a process to simplify or a website to imagine. Tell me what you have in mind.', email:'Get in touch', cv:'Download source CV', footer:'Crafted with care. Built with Next.js.', all:'All projects', product:'SaaS products', client:'Websites & clients', local:'Desktop software', note:'Concept preview · illustrative interface', role:'Full-Stack Developer', dates:'2019 — Present'}
};
const projects = [
  {
    "name": "Vocarya",
    "type": "product",
    "tag": [
      "APPRENDRE LES LANGUES PAR LE DÉFI",
      "LANGUAGE LEARNING THROUGH CHALLENGES"
    ],
    "status": [
      "Disponible sur Google Play",
      "Available on Google Play"
    ],
    "description": [
      "Une application pour apprendre les langues à travers des défis, travailler le vocabulaire et explorer la grammaire dans une interface ludique.",
      "A language-learning application built around challenges, vocabulary practice and grammar in a playful interface."
    ],
    "stack": [
      "Langues · Languages",
      "Challenges",
      "Vocabulaire · Vocabulary"
    ],
    "images": [
      "vocarya1.png",
      "vocarya2.png"
    ],
    "color": "peach",
    "number": "01",
    "url": "https://play.google.com/store/apps/details?id=com.learnrepit&hl=fr_CA",
    "linkLabel": [
      "Voir sur Google Play",
      "View on Google Play"
    ]
  },
  {
    "name": "Inspectra",
    "type": "product",
    "tag": [
      "SUIVI DES MOYENS DE LUTTE CONTRE L’INCENDIE",
      "FIRE SAFETY EQUIPMENT TRACKING"
    ],
    "status": [
      "Non publié",
      "Not published"
    ],
    "description": [
      "Une application dédiée au suivi des moyens de lutte contre l’incendie, avec un tableau de bord pour consulter les équipements et leur suivi. Le projet n’est pas encore publié.",
      "An application for tracking fire safety equipment, with a dashboard to review equipment and its monitoring. The project has not yet been published."
    ],
    "stack": [
      "Sécurité incendie · Fire safety",
      "Suivi · Tracking"
    ],
    "images": [
      "inspectra 2.png",
      "insoectra.png"
    ],
    "color": "blue",
    "number": "02"
  },
  {
    "name": "EvacStudio",
    "type": "product",
    "tag": [
      "ÉDITEUR DE PLANS DE SÉCURITÉ",
      "FIRE SAFETY PLAN EDITOR"
    ],
    "status": [
      "À venir",
      "Coming soon"
    ],
    "description": [
      "Un projet d’éditeur interactif pour créer, annoter et exporter des plans d’évacuation, avec des pictogrammes de sécurité et un traitement d’images assisté par IA.",
      "An upcoming interactive editor for creating, annotating and exporting evacuation plans, with safety pictograms and AI-assisted image processing."
    ],
    "stack": [
      "Next.js",
      "Django REST",
      "OpenCV"
    ],
    "images": [
      "evac studio.jpeg"
    ],
    "color": "mint",
    "number": "03",
    "url": "https://evacstudio.ithrantech.com/",
    "linkLabel": [
      "Visiter le site",
      "Visit website"
    ]
  },
  {
    "name": "Smart HSE",
    "type": "product",
    "tag": [
      "PLATEFORME DE GESTION HSE",
      "HSE MANAGEMENT PLATFORM"
    ],
    "status": [
      "À venir",
      "Coming soon"
    ],
    "description": [
      "Un projet de plateforme modulaire pour digitaliser les processus HSE : équipements incendie, produits chimiques, personnel, accidents et organisation des sites.",
      "An upcoming modular platform to digitalise HSE processes: fire equipment, chemicals, personnel, accidents and site organisation."
    ],
    "stack": [
      "Next.js",
      "Django",
      "PostgreSQL"
    ],
    "images": [
      "HSESMART-6a3efa12be9a3.png",
      "hse samrt1.png"
    ],
    "color": "lavender",
    "number": "04"
  },
  {
    "name": "UPI Sécurité Incendie",
    "type": "client",
    "tag": [
      "SITE VITRINE · FRANCE",
      "BUSINESS WEBSITE · FRANCE"
    ],
    "status": [
      "En production",
      "In production"
    ],
    "description": [
      "Un site multipage pour une entreprise de sécurité incendie, présentant ses services avec un parcours de contact clair et une structure pensée pour le référencement.",
      "A multi-page fire safety company website presenting its services, with a clear contact journey and search-oriented page structure."
    ],
    "stack": [
      "Hostinger",
      "HTML / CSS",
      "SEO"
    ],
    "images": [
      "site erb upi incendie.jpeg"
    ],
    "color": "sand",
    "number": "05"
  },
  {
    "name": "Parcours Industrie",
    "type": "client",
    "tag": [
      "SITE WEB · VALORISATION DES COMPÉTENCES",
      "WEBSITE · PROFESSIONAL SKILLS"
    ],
    "status": [
      "En production",
      "In production"
    ],
    "description": [
      "Un site consacré à la valorisation de l’expérience professionnelle et aux parcours de reconnaissance des compétences dans l’industrie.",
      "A website focused on professional experience and pathways to recognising skills in industry."
    ],
    "stack": [
      "Site web · Website",
      "Responsive"
    ],
    "images": [
      "parcour industruie.png"
    ],
    "color": "blue",
    "number": "06"
  },
  {
    "name": "Prise de rendez-vous",
    "type": "client",
    "tag": [
      "SITE WEB · RÉSERVATION EN LIGNE",
      "WEBSITE · ONLINE BOOKING"
    ],
    "status": [
      "En production",
      "In production"
    ],
    "description": [
      "Une interface de prise de rendez-vous avec choix du service, calendrier, sélection d’un créneau et saisie des coordonnées.",
      "An appointment-booking interface with service selection, a calendar, time slots and contact information."
    ],
    "stack": [
      "Réservation · Booking",
      "Responsive"
    ],
    "images": [
      "site pour les rendez vous.png"
    ],
    "color": "sand",
    "number": "07"
  },
  {
    "name": "Sumba Tourism",
    "type": "client",
    "tag": [
      "VOYAGE & DÉCOUVERTE · INDONÉSIE",
      "TRAVEL & DISCOVERY · INDONESIA"
    ],
    "status": [
      "En production",
      "In production"
    ],
    "description": [
      "Une vitrine responsive pour une agence de tourisme : destinations, expériences et contenus cartographiques pour découvrir Sumba.",
      "A responsive tourism agency showcase featuring destinations, experiences and map content for exploring Sumba."
    ],
    "stack": [
      "Responsive",
      "Web design"
    ],
    "images": [],
    "color": "blue",
    "number": "08"
  },
  {
    "name": "Studio PDF",
    "type": "local",
    "tag": [
      "LOGICIEL LOCAL · DOCUMENTS",
      "DESKTOP SOFTWARE · DOCUMENTS"
    ],
    "status": [
      "Logiciel local",
      "Desktop software"
    ],
    "description": [
      "Un outil local pour manipuler des documents PDF : fusionner, extraire ou supprimer des pages, compresser et convertir des documents.",
      "A local PDF utility for merging files, extracting or removing pages, compressing and converting documents."
    ],
    "stack": [
      "PDF",
      "Documents",
      "Desktop"
    ],
    "images": [
      "pdf tools.png"
    ],
    "color": "sand",
    "number": "09"
  },
  {
    "name": "Video Manager",
    "type": "local",
    "tag": [
      "LOGICIEL LOCAL · VIDÉO",
      "DESKTOP SOFTWARE · VIDEO"
    ],
    "status": [
      "Logiciel local",
      "Desktop software"
    ],
    "description": [
      "Un outil vidéo local avec prévisualisation, sélection de passages et options de traitement et de qualité.",
      "A local video tool with preview, segment selection and processing and quality options."
    ],
    "stack": [
      "Vidéo · Video",
      "Desktop"
    ],
    "images": [
      "video manager.png"
    ],
    "color": "lavender",
    "number": "10"
  },
  {
    "name": "Assistant IA · Loi",
    "type": "local",
    "tag": [
      "LOGICIEL LOCAL · ASSISTANT IA",
      "DESKTOP SOFTWARE · AI ASSISTANT"
    ],
    "status": [
      "Logiciel local",
      "Desktop software"
    ],
    "description": [
      "Un assistant local pour explorer des textes de loi et leur structure, avec une interface de navigation et un espace de discussion assistée par IA.",
      "A local assistant for exploring legal texts and their structure, with a navigation interface and an AI-assisted conversation panel."
    ],
    "stack": [
      "IA · AI",
      "Documents",
      "Desktop"
    ],
    "images": [
      "loi assiastant ia.png"
    ],
    "color": "mint",
    "number": "11"
  },
  {
    "name": "ADN Concept",
    "type": "client",
    "tag": [
      "PODCASTS PÉDAGOGIQUES",
      "EDUCATIONAL PODCASTS"
    ],
    "status": [
      "En production",
      "In production"
    ],
    "description": [
      "Une plateforme de podcasts pédagogiques. L’enseignant attribue des parcours d’écoute, les élèves y accèdent par un lien sans mot de passe et peuvent reprendre là où ils se sont arrêtés. La progression est suivie par élève ou par classe.",
      "An educational podcast platform. Teachers assign listening activities, students access them via a password-free link and can resume where they left off. Teachers can track progress by student or class."
    ],
    "stack": [
      "Audio",
      "Reporting"
    ],
    "images": [
      "adn-concept.png"
    ],
    "color": "peach",
    "number": "12",
    "url": "https://adnconcept.ithrantech.com/",
    "linkLabel": [
      "Visiter le site",
      "Visit website"
    ]
  }
];
function Arrow({diagonal=false}:{diagonal?:boolean}) {return <span aria-hidden="true">{diagonal?'↗':'↗'}</span>}
function Preview({kind}:{kind:string}) {return <div className={`preview preview-${kind}`} aria-hidden="true">{kind==='mint'?<div className="mock-window"><div className="mock-bar"><b>e.</b><span>EvacStudio</span><i>● ● ●</i></div><div className="editor"><aside>⌖<br/>▧<br/>↗<br/>⊕<br/>▣</aside><div className="floorplan"><div className="room r1">01</div><div className="room r2">02</div><div className="room r3">03</div><div className="room r4">04</div><div className="escape">← ┄ ┄ ┄ ┄ ┄ ↑</div><div className="exit">EXIT ↗</div></div></div><span className="floating-label">↗ PDF EXPORT</span></div>:kind==='lavender'?<div className="mock-window dashboard"><div className="mock-bar"><b>h.</b><span>Himaya <small>WORKSPACE</small></span><i>● ● ●</i></div><div className="dash-body"><aside>▦<br/>◈<br/>▤<br/>⚙</aside><div className="dash-main"><strong>Vue d’ensemble <span>↗</span></strong><div className="mini-stats"><div>Sites<b>12</b></div><div>Équipements<b>248</b></div><div>Conformité<b>98%</b></div></div><div className="chart">{[35,55,40,70,60,85,72,95,80,100,90,115].map((h,i)=><i key={i} style={{height:h}}/>)}</div></div></div></div>:kind==='peach'?<div className="audio-art"><div className="vinyl"><span>p.</span></div><div className="audio-player"><span>◀ &nbsp; ▶ &nbsp; ▌▌</span><div className="wave">{Array.from({length:30},(_,i)=><i key={i} style={{height:12+(i*17%37)}}/>)}</div><small>12:48 ━━━━━●──── 24:00</small></div></div>:kind==='sand'?<div className="web-mock"><div>UPI<span>MENU ☰</span></div><h3>La sécurité,<br/>sans compromis.</h3><b>PROTECTION INCENDIE ↗</b><div className="fire-symbol">✳</div></div>:<div className="tourism-mock"><div>SUMBA<span>EXPLORE ↗</span></div><h3>Somewhere<br/><em>extraordinary.</em></h3><div className="sun"/><div className="hill hill-one"/><div className="hill hill-two"/></div>}</div>}
type Project = typeof projects[number];
function ProjectCover({project,lang}:{project:Project;lang:Lang}) {
 if (!project.images.length) return <Preview kind={project.color}/>;
 return <div className={`preview screenshot-cover preview-${project.color}`}><Image src={`/images/${encodeURIComponent(project.images[0])}`} alt={`${lang==='fr'?'Interface de':'Interface of'} ${project.name}`} fill sizes="(max-width: 700px) 88vw, 44vw" style={{objectFit:'contain'}} />{project.images.length>1&&<span className="image-count">{project.images.length} {lang==='fr'?'captures':'screenshots'}</span>}</div>;
}
function ProjectGallery({project,lang}:{project:Project;lang:Lang}) {
 const [active,setActive]=useState(0);
 if (!project.images.length) return <Preview kind={project.color}/>;
 return <div className="project-gallery"><div className={`gallery-stage preview-${project.color}`}><Image src={`/images/${encodeURIComponent(project.images[active])}`} alt={`${project.name} — ${lang==='fr'?'capture':'screenshot'} ${active+1}`} width={1600} height={1000} sizes="(max-width: 700px) 94vw, 900px" style={{width:'100%',height:'auto',maxHeight:'65vh',objectFit:'contain'}} /></div>{project.images.length>1&&<div className="gallery-thumbnails" aria-label={lang==='fr'?'Captures du projet':'Project screenshots'}>{project.images.map((file,i)=><button key={file} aria-label={`${lang==='fr'?'Afficher la capture':'Show screenshot'} ${i+1}`} aria-pressed={active===i} onClick={()=>setActive(i)}><Image src={`/images/${encodeURIComponent(file)}`} alt="" width={90} height={60} style={{objectFit:'contain'}}/><span>0{i+1}</span></button>)}</div>}</div>;
}
export default function Home(){const [lang,setLang]=useState<Lang>('fr');const [filter,setFilter]=useState('all');const [selected,setSelected]=useState<number|null>(null);const [menu,setMenu]=useState(false);const t=content[lang];const n=lang==='fr'?0:1;const selectedProject=selected===null?null:projects[selected];
useEffect(()=>{const saved=localStorage.getItem('portfolio-language');if(saved==='en'||saved==='fr')setLang(saved)},[]);
useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem('portfolio-language',lang)},[lang]);
useEffect(()=>{if(selected===null)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setSelected(null)};document.addEventListener('keydown',close);const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',close);document.body.style.overflow=prev}},[selected]);
return <><header className="header"><a className="logo" href="#" aria-label="IthranTech — Slimane Benmayouf">ithran<span>tech.</span></a><nav className={menu?'nav open':'nav'}>{t.nav.map((label,i)=><a key={i} href={`#${['projects','expertise','journey','contact'][i]}`} onClick={()=>setMenu(false)}>{label}</a>)}</nav><div className="header-right"><div className="language" aria-label="Language">{(['fr','en'] as Lang[]).map(l=><button key={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><a className="nav-contact" href="mailto:slimanebenmayouf@mail.com">{lang==='fr'?'Discutons':'Let’s talk'} ↗</a><button className="menu" aria-label="Menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>☰</button></div></header>
<main><section className="hero"><div className="availability"><span/>{t.available}</div><div className="hero-grid"><div className="hero-copy"><p className="identity-byline">Slimane Benmayouf <span>· IthranTech</span></p><p className="eyebrow">{t.intro}</p><h1>{t.title}</h1><p className="hero-description">{t.description}</p><div className="hero-actions"><a className="button dark" href="#projects">{t.work}<Arrow/></a><a className="text-link" href="#contact">{t.talk}<Arrow/></a></div></div><div className="hero-art" aria-hidden="true"><div className="orbital orbit-one"/><div className="orbital orbit-two"/><span className="art-index">ITHRANTECH — DIGITAL CRAFT</span><div className="code-object"><div className="object-top"/><div className="object-face"><span>&lt;/&gt;</span></div><div className="object-side"/></div><span className="art-chip chip-one">⌘ &nbsp; Full-stack</span><span className="art-chip chip-two"><span className="green-dot"/> SaaS & AI</span><span className="art-caption">IDEAS → CODE → IMPACT</span><span className="spark">✳</span></div></div><div className="hero-bottom"><div className="stats">{['50+','40+','2019'].map((s,i)=><div key={s}><strong>{s}</strong><span>{t.stats[i]}</span></div>)}</div><a className="scroll-link" href="#projects">{t.scroll}<span>↓</span></a></div></section>
<div className="tech-strip"><span>Python</span><span>✳</span><span>Django</span><span>✳</span><span>Next.js</span><span>✳</span><span>React</span><span>✳</span><span>TypeScript</span><span>✳</span><span>PostgreSQL</span><span>✳</span><span>OpenAI API</span></div>
<section id="projects" className="section projects"><div className="section-heading"><div><p className="eyebrow"><span className="section-number">01 /</span>{t.selected}</p><h2>{t.projects}</h2></div><p>{t.projectIntro}</p></div><div className="filters">{[['all',t.all],['product',t.product],['client',t.client],['local',t.local]].map(([id,label])=><button key={id} className={filter===id?'active':''} onClick={()=>setFilter(id)}>{label}{id==='all'&&<small>{projects.length.toString().padStart(2,'0')}</small>}</button>)}</div><div className="project-grid">{projects.map((p,i)=>(filter==='all'||filter===p.type)&&<button key={p.name} className="project-card" onClick={()=>setSelected(i)} aria-label={`${t.detail} : ${p.name}`}><div className="project-image"><ProjectCover project={p} lang={lang}/><span className="project-open">↗</span><span className="project-status"><i/>{p.status[n]}</span></div><div className="project-info"><div><p className="eyebrow">{p.tag[n]}</p><h3>{p.name}</h3></div><span className="project-index">/{p.number}</span></div><p className="project-description">{p.description[n]}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div></button>)}</div></section>
<section id="expertise" className="expertise section"><div className="expertise-intro"><p className="eyebrow"><span className="section-number">02 /</span>{t.expertise}</p><h2>{t.expertiseTitle}</h2><p>{t.expertiseDesc}</p><div className="expertise-mark" aria-hidden="true">✳</div></div><div className="services">{t.services.map((s,i)=><article key={s}><span className="service-icon">{['⌘','✧','▤'][i]}</span><div><h3>{s}</h3><p>{t.serviceDesc[i]}</p><div className="service-tech">{['Python · Django · Next.js · React · TypeScript','OpenAI API · OpenCV · Pillow · Pandas · Selenium','PostgreSQL · MySQL · Linux · Nginx · Git'][i]}</div></div><span className="service-number">0{i+1}</span></article>)}</div></section>
<section id="journey" className="section journey"><div><p className="eyebrow"><span className="section-number">03 /</span>{t.journey}</p><h2>{t.journeyTitle}</h2><p className="journey-desc">{t.journeyDesc}</p><a className="text-link" href="https://comeup.com/fr/@ithran" target="_blank" rel="noreferrer">{lang==='fr'?'Mon profil ComeUp':'My ComeUp profile'} ↗</a></div><div className="timeline">{t.experience.map((e,i)=><article key={e}><div className="timeline-date">{[t.dates,'2018 — 2023','2026','2015 — 2017'][i]}</div><h3>{e}</h3><p>{t.expDesc[i]}</p></article>)}</div></section>
<section id="contact" className="contact section"><div><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p><a className="button dark" href="mailto:slimanebenmayouf@mail.com">{t.email} ↗</a></div><div className="contact-details"><a href="mailto:slimanebenmayouf@mail.com">slimanebenmayouf@mail.com ↗</a><a href="tel:+15144490879">+1 514 449 0879 ↗</a><span>Slimane Benmayouf · IthranTech</span><span>Canada · {t.role}</span><a className="cv-link" href="/Slimane-Benmayouf-CV.txt" download>{t.cv} ↓</a></div><span className="contact-star" aria-hidden="true">✳</span></section></main><footer><a className="logo" href="#">ithran<span>tech.</span></a><span>© {new Date().getFullYear()} Slimane Benmayouf</span><span>{t.footer}</span><a href="#">{lang==='fr'?'Retour en haut':'Back to top'} ↑</a></footer>
{selected!==null&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><dialog open aria-modal="true" aria-labelledby="project-title" className="project-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" autoFocus onClick={()=>setSelected(null)}>{t.close} ×</button><ProjectGallery key={selected} project={projects[selected]} lang={lang}/><div className="modal-content"><p className="eyebrow">{projects[selected].status[n]}</p><h2 id="project-title">{projects[selected].name}</h2><p>{projects[selected].description[n]}</p><div className="tags">{projects[selected].stack.map(s=><span key={s}>{s}</span>)}</div><small>{projects[selected].images.length > 1 ? (lang==='fr'?'Captures du projet · Cliquez sur une miniature pour changer de vue.':'Project screenshots · Select a thumbnail to change the view.') : projects[selected].images.length === 1 ? (lang==='fr'?'Capture du projet':'Project screenshot') : t.note}</small>{selectedProject?.url ? <a className="button dark" href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.linkLabel[n]} ↗</a> : <a className="button dark" href="mailto:slimanebenmayouf@mail.com">{t.talk} ↗</a>}</div></dialog></div>}</>}
