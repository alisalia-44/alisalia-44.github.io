// C'est ICI que tu pourras modifier tes textes et ajouter des projets !
const portfolioData = [
    {
        id: "aminou-gym",
        year: "2026 — PRESENT",
        title: "Aminou Gym Management",
        role: "Développeur Freelance & Architecte BDD",
        description: "Conception d'une application de gestion pour une salle de sport (500+ membres). Modélisation relationnelle, abonnements et suivi financier.",
        longDesc: "<p>Mission freelance visant à digitaliser la gestion d'une salle de sport. J'ai conçu le schéma relationnel sous PostgreSQL (hébergé sur Supabase) et développé l'interface de pilotage complète.</p><p>L'application permet la gestion des abonnements en temps réel, le suivi de présence, la tarification dynamique, et intègre une analyse de rétention (churn) pour identifier les membres à risque.</p>",
        tags: ["PostgreSQL", "Supabase", "SQL Avancé"],
        link: "" // Laisse vide si tu n'as pas de lien public
    },
    {
        id: "uesba-web",
        year: "2026",
        title: "Plateforme Web UESBA",
        role: "Chef de projet technique",
        description: "Coordination d'une équipe de 4 personnes. Conception de l'architecture back-end et base de données relationnelle associative.",
        longDesc: "<p>En tant que chef de projet web pour l'association, j'ai coordonné une équipe de 4 personnes, de la rédaction stricte du cahier des charges jusqu'à la mise en production du site officiel.</p><p>Mes tâches principales incluaient le développement de l'architecture back-end, l'administration de la base de données relationnelle, et la supervision des livrables pour garantir les délais avec MS Project.</p>",
        tags: ["Gestion de Projet", "Backend", "Bases de données"],
        link: "https://uesba.org"
    },
    {
        id: "data-bi",
        year: "2025 — 2026",
        title: "Analyses de Données & BI",
        role: "Data Analyst",
        description: "Recensement UESBA. Nettoyage via Power Query et conception de tableaux de bord interactifs d'aide à la décision.",
        longDesc: "<p>J'ai mené le recensement complet de l'UESBA. Les données brutes ont été nettoyées et structurées via Power Query.</p><p>J'ai ensuite conçu un tableau de bord analytique couvrant plus de 400 membres. Cet outil de Business Intelligence est actuellement exploité par l'ambassade et le bureau exécutif de l'association pour orienter leurs décisions stratégiques.</p>",
        tags: ["Power BI", "Power Query", "Excel Avancé"],
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
            <button class="read-more-link btn-voir-plus" data-id="${project.id}">Voir l'étude de cas →</button>
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
        const projectId = e.target.getAttribute("data-id");
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

// --- SCROLL FLUIDE POUR LA NAVBAR ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));
        if(this.parentElement.classList.contains('nav-center')) {
            this.classList.add('active');
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});