// C'est ICI que tu peux modifier tes textes et ajouter de nouveaux projets ou expériences !
const portfolioData = [
    {
        id: "aminou-gym",
        year: "2026",
        title: "Aminou Gym Management",
        role: "Développeur d'application & Architecte BDD (Freelance)",
        description: "Application de gestion de salle de sport pour 500+ membres : abonnements, présence, tarification et suivi financier.",
        longDesc: "<p>Mission freelance visant à digitaliser intégralement la gestion d'une salle de sport accueillant plus de 500 membres.</p><p>J'ai conçu le schéma relationnel sous <strong>PostgreSQL (Supabase)</strong> et développé l'interface de pilotage de l'activité.</p><p>L'application permet le suivi des abonnements, de la présence, de la tarification et intègre une analyse de rétention (churn) en croisant la présence et l'historique des paiements.</p>",
        tags: ["PostgreSQL", "Supabase", "SQL Avancé"],
        link: "" // Laisse vide si tu n'as pas de lien public
    },
    {
        id: "uesba-web",
        year: "2026",
        title: "Plateforme Web uesba.org",
        role: "Chef de projet web",
        description: "Coordination d'une équipe de 4 personnes, développement de l'architecture back-end et administration de la base de données relationnelle.",
        longDesc: "<p>En tant que chef de projet web, j'ai coordonné une équipe de 4 personnes, de la rédaction du cahier des charges jusqu'à la mise en production de la plateforme officielle.</p><p>J'ai développé l'architecture back-end, administré la base de données relationnelle et supervisé l'avancement technique ainsi que la validation des livrables avec <strong>MS Project</strong> pour garantir le respect des délais.</p>",
        tags: ["Gestion de Projet", "Backend", "Bases de données", "MS Project"],
        link: "https://uesba.org"
    },
    {
        id: "data-bi",
        year: "2026",
        title: "Projets Power BI & Analyse de Rétention",
        role: "Analyste de données",
        description: "Recensement UESBA (400+ membres) et analyse prédictive de rétention (churn) des membres du Aminou Gym.",
        longDesc: "<p><strong>1. Recensement UESBA :</strong> Nettoyage et transformation des données via Power Query et création d'un tableau de bord couvrant plus de 400 membres, utilisé directement par l'Ambassade et le bureau exécutif.</p><p><strong>2. Analyse de rétention (Churn) :</strong> Repérage des membres à risque d'abandon pour Aminou Gym en croisant les données d'assiduité et de paiements sous Power BI.</p>",
        tags: ["Power BI", "Power Query", "Excel Avancé", "Data Analysis"],
        link: "https://github.com/alisalia-44"
    },
    {
        id: "uesba-presidence",
        year: "2026",
        title: "Présidence Exécutive — UESBA",
        role: "Président de l'Union des Étudiants et Stagiaires Burkinabè en Algérie",
        description: "Direction du bureau exécutif (7 collaborateurs), organisation d'événements communautaires et représentation diplomatique.",
        longDesc: "<p>À la tête du bureau exécutif de l'UESBA (7 collaborateurs), j'assure la coordination générale et la gestion des projets communautaires et numériques de l'organisation.</p><p>Je représente officiellement la communauté étudiante auprès de l'Ambassade du Burkina Faso à Alger ainsi qu'auprès du Ministère de l'Enseignement Supérieur.</p>",
        tags: ["Leadership", "Management", "Représentation", "Gestion d'équipe"],
        link: ""
    }
];

const container = document.getElementById('projects-container');

// Injection des cartes de projets
portfolioData.forEach(project => {
    const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
    const projectHTML = `
    <div class="project-item">
        <div class="project-year">${project.year}</div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <div class="project-role">${project.role}</div>
            <p class="project-desc">${project.description}</p>
            <div class="tech-tags">
                ${tagsHTML}
            </div>
            <button class="read-more-link btn-voir-plus" data-id="${project.id}">Voir plus →</button>
        </div>
    </div>
    `;
    container.innerHTML += projectHTML;
});

// --- LOGIQUE DE LA FENÊTRE MODALE ---
const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const modalBody = document.getElementById("modal-body");
const modalLink = document.getElementById("modal-link");

// Ouverture
document.querySelectorAll(".btn-voir-plus").forEach(button => {
    button.addEventListener("click", (e) => {
        const projectId = e.currentTarget.getAttribute("data-id");
        const projectData = portfolioData.find(p => p.id === projectId);

        if (projectData) {
            modalTitle.textContent = projectData.title;
            modalTags.innerHTML = projectData.tags.map(tag => `<span>${tag}</span>`).join("");
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

// Fermeture
const closeModal = () => {
    modal.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// --- NAVIGATION FLUIDE ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));
        if (this.parentElement.classList.contains('nav-center')) {
            this.classList.add('active');
        }
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});