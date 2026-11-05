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
        year: "2026",
        title: "Aminou Gym Management",
        role: "Développeur d'application & Architecte BDD (Freelance)",
        description: "Application de gestion de salle de sport pour 500+ membres : abonnements, présence, tarification et suivi financier.",
        longDesc: "<p>Mission freelance visant à digitaliser intégralement la gestion d'une salle de sport accueillant plus de 500 membres.</p><p>J'ai conçu le schéma relationnel sous <strong>PostgreSQL (Supabase)</strong> et développé l'interface de pilotage de l'activité.</p><p>L'application permet le suivi des abonnements, de la présence, de la tarification et intègre une analyse de rétention (churn) en croisant la présence et l'historique des paiements.</p>",
        tags: ["PostgreSQL", "Supabase", "SQL avancé"],
        link: "",                              // laisse vide s'il n'y a pas de lien public
        linkLabel: ""                          // optionnel : texte du lien (sinon "Consulter le projet")
    },
    {
        id: "uesba-web",
        year: "2026",
        title: "Plateforme web uesba.org",
        role: "Chef de projet web",
        description: "Coordination d'une équipe de 4 personnes, développement de l'architecture back-end et administration de la base de données relationnelle.",
        longDesc: "<p>En tant que chef de projet web, j'ai coordonné une équipe de 4 personnes, de la rédaction du cahier des charges jusqu'à la mise en production de la plateforme officielle.</p><p>J'ai développé l'architecture back-end, administré la base de données relationnelle et supervisé l'avancement technique ainsi que la validation des livrables avec <strong>MS Project</strong> pour garantir le respect des délais.</p>",
        tags: ["Gestion de projet", "Back-end", "Bases de données", "MS Project"],
        link: "https://uesba.org",
        linkLabel: "Visiter uesba.org"
    },
    {
        id: "data-bi",
        year: "2026",
        title: "Projets Power BI & analyse de rétention",
        role: "Analyste de données",
        description: "Recensement UESBA (400+ membres) et analyse de rétention (churn) des membres d'Aminou Gym.",
        longDesc: "<p><strong>1. Recensement UESBA :</strong> nettoyage et transformation des données via Power Query et création d'un tableau de bord couvrant plus de 400 membres, utilisé directement par l'Ambassade et le bureau exécutif.</p><p><strong>2. Analyse de rétention (churn) :</strong> repérage des membres à risque d'abandon pour Aminou Gym en croisant les données d'assiduité et de paiements sous Power BI.</p>",
        tags: ["Power BI", "Power Query", "Excel avancé", "Analyse de données"],
        link: "https://github.com/alisalia-44",
        linkLabel: "Voir mon GitHub"
    },
    {
        id: "uesba-presidence",
        year: "2026",
        title: "Présidence exécutive — UESBA (2025-2026)",
        role: "Président de l'Union des Étudiants et Stagiaires Burkinabè en Algérie",
        description: "Direction du bureau exécutif (7 collaborateurs), organisation d'événements communautaires et représentation diplomatique.",
        longDesc: "<p>À la tête du bureau exécutif de l'UESBA  (7 collaborateurs), j'assure la coordination générale et la gestion des projets communautaires et numériques de l'organisation.</p><p>Je représente officiellement la communauté étudiante auprès de l'Ambassade du Burkina Faso à Alger ainsi qu'auprès du Ministère de l'Enseignement Supérieur.</p>",
        tags: ["Leadership", "Management", "Représentation", "Gestion d'équipe"],
        link: "",
        linkLabel: ""
    }
];

/* ---------- Formation (du plus récent au plus ancien) ---------- */
const educationData = [
    {
        title: "Ingénieur des Travaux — Réseaux et Systèmes Informatiques",
        meta: "Institut Supérieur de Technologies • 2027",
        desc: "Administration systèmes, réseaux et infrastructures."
    },
    {
        title: "BTS Informatique —  bases de données",
        meta: "INSFP de Relizane, Algérie • 2027 ",
        desc: "Major de promotion, Boursier de la République algérienne."
    },
    {
        title: "Baccalauréat technique (série H, informatique)",
        meta: "Lycée Technique National / ASL, Ouagadougou • 2024",
        desc: "Mention Bien. 4e rang national, Prix de l'excellence de l'éducation nationale."
    }
];

/* ---------- Compétences (groupes de tags) ---------- */
const skillsData = [
    {
        title: "Bases de données & data",
        items: ["PostgreSQL", "SQL Server", "SQL avancé", "Oracle Database", "UML / Merise", "Power BI", "Power Query", "Excel avancé"]
    },
    {
        title: "Développement, systèmes & IA",
        items: ["PHP", "Java", "C++", "HTML5 / CSS3", "Linux (Ubuntu)", "Claude Code", "Gemini CLI"]
    }
];

/* ---------- Certifications ---------- */
const certificationsData = {
    meta: "Microsoft / Coursera & Cisco Networking Academy",
    desc: "Power BI Data Analyst, Preparing Data for Analysis with Microsoft Excel, IT Customer Support & Security Support."

};