// Base de données du Parcours
const parcours = [
    {
        role: "Ingénieur des travaux — Réseaux et Systèmes Informatiques",
        institution: "Institut Supérieur de Technologies (IST)",
        description: "Spécialisation en administration systèmes, réseaux et technologies d'infrastructure."
    },
    {
        role: "Président exécutif",
        institution: "Union des Étudiants et Stagiaires Burkinabè en Algérie (UESBA)",
        description: "Direction du bureau exécutif (7 collaborateurs). Représentation institutionnelle auprès de l'Ambassade et du Ministère."
    },
    {
        role: "BTS Informatique — Option Base de données",
        institution: "INSFP de Relizane",
        description: "Major de promotion (moyenne 16,8/20). Conception, requêtage relationnel, optimisation et administration de données."
    },
    {
        role: "Baccalauréat technique (H, informatique)",
        institution: "Lycée Technique Nationale/ASL",
        description: "Mention Bien. 4e rang national. Prix de l'excellence de l'éducation nationale."
    }
];

// Base de données des Projets (Études de cas détaillées)
const projets = [
    {
        id: "uesba-web",
        title: "Plateforme Web UESBA",
        shortDesc: "Coordination d'équipe et modélisation de la base de données relationnelle.",
        longDesc: "<p>En tant que chef de projet web, j'ai coordonné une équipe de 4 personnes pour concevoir l'architecture backend et administrer la base de données relationnelle du site officiel de l'association.</p><p>Supervision de l'avancement technique et validation des livrables en garantissant le respect des délais via MS Project.</p>",
        tags: ["Gestion de projet", "Backend", "MS Project"],
        link: "https://uesba.org"
    },
    {
        id: "aminou-gym",
        title: "Aminou GYM Management System",
        shortDesc: "Application de gestion complète pour une salle de sport (500+ membres).",
        longDesc: "<p>Mission freelance visant à digitaliser la gestion d'une salle de sport. Conception du schéma relationnel sous PostgreSQL (hébergé sur Supabase) et développement de l'interface de pilotage.</p><p>L'application gère les abonnements, la présence, la tarification, le suivi financier et l'analyse de rétention (churn) des membres à risque.</p>",
        tags: ["PostgreSQL", "Supabase", "Appsmith"],
        link: "" 
    },
    {
        id: "powerbi-uesba",
        title: "Analyses de Données & Tableaux de bord",
        shortDesc: "Recensement et visualisation dynamique de données avec Power BI et Excel.",
        longDesc: "<p>Réalisation du recensement de l'UESBA. Nettoyage des données via Power Query et conception d'un tableau de bord couvrant plus de 400 membres. Cet outil est actuellement exploité par l'ambassade et le bureau de l'association pour la prise de décision stratégique.</p>",
        tags: ["Power BI", "Power Query", "Excel avancé"],
        link: "https://github.com/alisalia-44"
    }
];

// 1. Injection du Parcours
const timelineContainer = document.getElementById("timeline-container");
timelineContainer.innerHTML = parcours.map(item => `
    <div class="timeline-item">
        <div class="timeline-role">${item.role}</div>
        <div class="timeline-place">${item.institution}</div>
        <div class="timeline-desc">${item.description}</div>
    </div>
`).join("");

// 2. Injection des Projets
const projectsContainer = document.getElementById("projects-container");
projectsContainer.innerHTML = projets.map(proj => `
    <div class="card">
        <div>
            <h3>${proj.title}</h3>
            <p>${proj.shortDesc}</p>
            <div class="tags">
                ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
        </div>
        <button class="btn-voir-plus" data-id="${proj.id}">Voir l'étude de cas →</button>
    </div>
`).join("");

// 3. Logique de la Fenêtre Modale
const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const modalBody = document.getElementById("modal-body");
const modalLink = document.getElementById("modal-link");

// Ouvrir la modale
document.querySelectorAll(".btn-voir-plus").forEach(button => {
    button.addEventListener("click", (e) => {
        const projectId = e.target.getAttribute("data-id");
        const projectData = projets.find(p => p.id === projectId);

        if (projectData) {
            modalTitle.textContent = projectData.title;
            modalTags.innerHTML = projectData.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
            modalBody.innerHTML = projectData.longDesc;
            
            if (projectData.link) {
                modalLink.href = projectData.link;
                modalLink.classList.remove("hidden");
            } else {
                modalLink.classList.add("hidden");
            }

            modal.classList.remove("hidden");
        }
    });
});

// Fermer la modale
const closeModal = () => {
    modal.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

// Fermer au clic à l'extérieur de la fenêtre
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});