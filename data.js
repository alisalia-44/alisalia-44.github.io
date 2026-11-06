/* =====================================================================
   data.js — LA SEULE FICHE À MODIFIER pour mettre à jour le site.
   Ici, uniquement du contenu. La logique est dans main.js.

   Pour ajouter un projet : copie un bloc { ... } dans portfolioData,
   change l'id (unique, sans espaces ni accents), puis remplis les champs.
   Les projets s'affichent dans l'ordre de la liste (le plus récent en premier).
   ===================================================================== */

const portfolioData = [
    {
        id: "aminou-gym",                      // unique, sans espaces ni accents
        en: {
            role: "Application Developer & Database Architect (Freelance)",
            description: "Design a gym management application for 500+ members: subscriptions, attendance, pricing and financial tracking.",
            longDesc: "<p>Freelance assignment to fully digitise the management of a gym with more than 500 members.</p><p>Design the relational schema on <strong>PostgreSQL (Supabase)</strong> and build the interface used to run the business.</p><p>The application tracks subscriptions, attendance and pricing, and includes a retention (churn) analysis that cross-references attendance with payment history.</p>",
            tags: ["PostgreSQL", "Supabase", "Advanced SQL"],
            linkLabel: ""
        },
        year: "2026",
        title: "Aminou Gym Management",
        role: "Développeur d'application & Architecte BDD (Freelance)",
        description: "Concevoir une application de gestion de salle de sport pour 500+ membres : abonnements, présence, tarification et suivi financier.",
        longDesc: "<p>Mission freelance visant à digitaliser intégralement la gestion d'une salle de sport accueillant plus de 500 membres.</p><p>Concevoir le schéma relationnel sous <strong>PostgreSQL (Supabase)</strong> et développer l'interface de pilotage de l'activité.</p><p>L'application permet le suivi des abonnements, de la présence, de la tarification et intègre une analyse de rétention (churn) en croisant la présence et l'historique des paiements.</p>",
        tags: ["PostgreSQL", "Supabase", "SQL avancé"],
        link: "",                              // laisse vide s'il n'y a pas de lien public
        linkLabel: ""                          // optionnel : texte du lien (sinon "Consulter le projet")
    },
    {
        id: "uesba-web",
        en: {
            title: "uesba.org web platform",
            role: "Web Project Manager",
            description: "Coordinate a team of 4, develop the back-end architecture and administer the relational database.",
            longDesc: "<p>Coordinate a team of 4 people, from drafting the requirements specification to putting the official platform into production.</p><p>Develop the back-end architecture, administer the relational database and oversee technical progress and the validation of deliverables with <strong>MS Project</strong> to keep to deadlines.</p>",
            tags: ["Project management", "Back-end", "Databases", "MS Project"],
            linkLabel: "Visit uesba.org"
        },
        year: "2026",
        title: "Plateforme web uesba.org",
        role: "Chef de projet web",
        description: "Coordonner une équipe de 4 personnes, développer l'architecture back-end et administrer la base de données relationnelle.",
        longDesc: "<p>Coordonner une équipe de 4 personnes, de la rédaction du cahier des charges jusqu'à la mise en production de la plateforme officielle.</p><p>Développer l'architecture back-end, administrer la base de données relationnelle et superviser l'avancement technique ainsi que la validation des livrables avec <strong>MS Project</strong> pour garantir le respect des délais.</p>",
        tags: ["Gestion de projet", "Back-end", "Bases de données", "MS Project"],
        link: "https://uesba.org",
        linkLabel: "Visiter uesba.org"
    },
    {
        id: "data-bi",
        en: {
            title: "Power BI projects & retention analysis",
            role: "Data Analyst",
            description: "Analyse the UESBA census data (400+ members) and the retention (churn) of Aminou Gym members.",
            longDesc: "<p><strong>1. UESBA census:</strong> clean and transform the data with Power Query, then build a dashboard covering more than 400 members, used directly by the Embassy and the executive board.</p><p><strong>2. Retention (churn) analysis:</strong> identify Aminou Gym members at risk of leaving by cross-referencing attendance and payment data in Power BI.</p>",
            tags: ["Power BI", "Power Query", "Advanced Excel", "Data analysis"],
            linkLabel: "See my GitHub"
        },
        year: "2026",
        title: "Projets Power BI & analyse de rétention",
        role: "Analyste de données",
        description: "Analyser les données du recensement UESBA (400+ membres) et la rétention (churn) des membres d'Aminou Gym.",
        longDesc: "<p><strong>1. Recensement UESBA :</strong> nettoyer et transformer les données via Power Query, puis créer un tableau de bord couvrant plus de 400 membres, utilisé directement par l'Ambassade et le bureau exécutif.</p><p><strong>2. Analyse de rétention (churn) :</strong> repérer les membres à risque d'abandon pour Aminou Gym en croisant les données d'assiduité et de paiements sous Power BI.</p>",
        tags: ["Power BI", "Power Query", "Excel avancé", "Analyse de données"],
        link: "https://github.com/alisalia-44",
        linkLabel: "Voir mon GitHub"
    },
    {
        id: "uesba-presidence",
        en: {
            title: "Executive Presidency — UESBA (2025-2026)",
            role: "President of the Union of Burkinabè Students and Interns in Algeria",
            description: "Lead the executive board (7 collaborators), organise community events and handle diplomatic representation.",
            longDesc: "<p>At the head of the UESBA executive board (7 collaborators): ensure overall coordination and the management of the organisation's community and digital projects.</p><p>Officially represent the student community before the Embassy of Burkina Faso in Algiers and the Ministry of Higher Education.</p>",
            tags: ["Leadership", "Management", "Representation", "Team management"],
            linkLabel: ""
        },
        year: "2026",
        title: "Présidence exécutive — UESBA (2025-2026)",
        role: "Président de l'Union des Étudiants et Stagiaires Burkinabè en Algérie",
        description: "Diriger le bureau exécutif (7 collaborateurs), organiser des événements communautaires et assurer la représentation diplomatique.",
        longDesc: "<p>À la tête du bureau exécutif de l'UESBA (7 collaborateurs) : assurer la coordination générale et la gestion des projets communautaires et numériques de l'organisation.</p><p>Représenter officiellement la communauté étudiante auprès de l'Ambassade du Burkina Faso à Alger ainsi qu'auprès du Ministère de l'Enseignement Supérieur.</p>",
        tags: ["Leadership", "Management", "Représentation", "Gestion d'équipe"],
        link: "",
        linkLabel: ""
    }
];

/* ---------- Formation (du plus récent au plus ancien) ---------- */
const educationData = [
    {
        en: { title: "Ingénieur des Travaux (applied engineering degree) — Networks and Computer Systems", meta: "Institut Supérieur de Technologies (Higher Institute of Technology) • 2027", desc: "Administer systems, networks and infrastructure." },
        title: "Ingénieur des Travaux — Réseaux et Systèmes Informatiques",
        meta: "Institut Supérieur de Technologies • 2027",
        desc: "Administrer les systèmes, les réseaux et les infrastructures."
    },
    {
        en: { title: "Higher National Diploma (BTS) in Computer Science — Databases", meta: "INSFP of Relizane, Algeria • 2027", desc: "Top of the class; Algerian government scholarship holder." },
        title: "BTS Informatique —  bases de données",
        meta: "INSFP de Relizane, Algérie • 2027 ",
        desc: "Major de promotion, Boursier de la République algérienne."
    },
    {
        en: { title: "Technical Baccalaureate (series H, computer science)", meta: "National Technical High School / ASL, Ouagadougou • 2024", desc: "Graduated with honours (“Bien”). 4th nationally; National Education Excellence Award." },
        title: "Baccalauréat technique (série H, informatique)",
        meta: "Lycée Technique National / ASL, Ouagadougou • 2024",
        desc: "Mention Bien. 4e rang national, Prix de l'excellence de l'éducation nationale."
    }
];

/* ---------- Compétences (groupes de tags) ---------- */
const skillsData = [
    {
        en: { title: "Databases & data", items: ["PostgreSQL", "SQL Server", "Advanced SQL", "Oracle Database", "UML / Merise", "Power BI", "Power Query", "Advanced Excel"] },
        title: "Bases de données & data",
        items: ["PostgreSQL", "SQL Server", "SQL avancé", "Oracle Database", "UML / Merise", "Power BI", "Power Query", "Excel avancé"]
    },
    {
        en: { title: "Development, systems & AI", items: ["PHP", "Java", "C++", "HTML5 / CSS3", "JavaScript", "Linux (Ubuntu)", "Claude Code", "Gemini CLI"] },
        title: "Développement, systèmes & IA",
        items: ["PHP", "Java", "C++", "HTML5 / CSS3", "JavaScript", "Linux (Ubuntu)", "Claude Code", "Gemini CLI"]
    }
];

/* ---------- Certifications ---------- */
const certificationsData = {
    en: { meta: "Microsoft / Coursera & Cisco Networking Academy", desc: "Power BI Data Analyst, Preparing Data for Analysis with Microsoft Excel, IT Customer Support & Security Support." },
    meta: "Microsoft / Coursera & Cisco Networking Academy",
    desc: "Power BI Data Analyst, Preparing Data for Analysis with Microsoft Excel, IT Customer Support & Security Support."

};

/* ---------- Contact (la section « Contact » du site) ----------
   L'email est assemblé par main.js (il n'est pas écrit en entier dans la page) pour limiter le spam. */
const contactData = {
    emailUser: "alimansoursalia",
    emailDomain: "gmail.com",
    github: "https://github.com/alisalia-44",
    linkedin: "https://www.linkedin.com/in/alisalia44",
    uesba: "https://uesba.org"
};

/* ---------- Textes du site, en français et en anglais ----------
   Pour corriger une traduction : modifie le texte du côté « en ». */
const uiText = {
    fr: {
        skip: "Aller au contenu", navAria: "Navigation principale", langAria: "Langue", brandSub: "Data & Systèmes",
        navProjects: "Projets", navBackground: "Parcours", navContact: "Contact",
        photoAlt: "Portrait d'Ali Mansour Salia",
        tagline: "Je conçois, administre et optimise des bases de données.",
        intro: "Ali Mansour Salia, aussi connu sous le nom d'Ali Salia, est un étudiant en informatique, spécialisé en base de données & data. Il vit en Algérie, et a présidé l'<a href=\"https://uesba.org\" target=\"_blank\" rel=\"noopener\">Union des Étudiants et Stagiaires Burkinabè en Algérie</a> (UESBA).",
        ctaProjects: "Voir mes projets", ctaLinkedin: "Me contacter sur LinkedIn",
        projectsTitle: "Projets et expériences", backgroundTitle: "Parcours et compétences",
        education: "Formation", skills: "Compétences", certifications: "Certifications",
        noscript: "Les projets s'affichent avec JavaScript. Retrouve-les aussi sur <a href=\"https://github.com/alisalia-44\">mon GitHub</a>.",
        readMore: "Voir plus", about: " sur ", viewProject: "Consulter le projet", close: "Fermer",
        contactTitle: "Contact", contactIntro: "Retrouvez mon travail ou contactez-moi ici.",
        footer: "© 2026 Ali Mansour Salia. Tous droits réservés.",
        docTitle: "Ali Mansour Salia (Ali Salia) — Bases de données & Data | Portfolio",
        docDesc: "Portfolio d'Ali Mansour Salia (Ali Salia), étudiant en informatique spécialisé en bases de données et data, président de l'UESBA. Projets et parcours."
    },
    en: {
        skip: "Skip to content", navAria: "Main navigation", langAria: "Language", brandSub: "Data & Systems",
        navProjects: "Projects", navBackground: "Background", navContact: "Contact",
        photoAlt: "Portrait of Ali Mansour Salia",
        tagline: "I design, administer and optimise databases.",
        intro: "Ali Mansour Salia, also known as Ali Salia, is a computer science student specialising in databases & data. He lives in Algeria and served as president of the <a href=\"https://uesba.org\" target=\"_blank\" rel=\"noopener\">Union of Burkinabè Students and Interns in Algeria</a> (UESBA).",
        ctaProjects: "View my projects", ctaLinkedin: "Contact me on LinkedIn",
        projectsTitle: "Projects and experience", backgroundTitle: "Background and skills",
        education: "Education", skills: "Skills", certifications: "Certifications",
        noscript: "Projects are displayed with JavaScript. You can also find them on <a href=\"https://github.com/alisalia-44\">my GitHub</a>.",
        readMore: "Read more", about: " about ", viewProject: "View the project", close: "Close",
        contactTitle: "Contact", contactIntro: "Follow my work or get in touch here.",
        footer: "© 2026 Ali Mansour Salia. All rights reserved.",
        docTitle: "Ali Mansour Salia (Ali Salia) — Databases & Data | Portfolio",
        docDesc: "Portfolio of Ali Mansour Salia (Ali Salia), computer science student specialising in databases and data, president of UESBA. Projects and background."
    }
};
