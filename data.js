const portfolioData = [
    {
        year: "2026 — PRESENT",
        title: "Aminou Gym Management",
        role: "Développeur Freelance & Architecte BDD",
        description: "Conception et développement d'une application complète pour la gestion d'une salle de sport (500+ membres). Modélisation du schéma relationnel, gestion des abonnements, de la tarification et du suivi financier en temps réel.",
        tags: ["PostgreSQL", "Supabase", "SQL Avancé"],
        link: "#"
    },
    {
        year: "2026",
        title: "Plateforme Web UESBA",
        role: "Chef de projet technique",
        description: "Coordination d'une équipe de 4 personnes. De la rédaction du cahier des charges au déploiement. Développement de l'architecture back-end et administration de la base de données relationnelle associative.",
        tags: ["Gestion de Projet", "Backend", "Bases de données"],
        link: "#"
    },
    {
        year: "2025 — 2026",
        title: "Analyses de Données & BI",
        role: "Data Analyst",
        description: "Nettoyage via Power Query et conception de tableaux de bord interactifs. Analyse de la rétention (churn) des membres en croisant données de présence et flux financiers.",
        tags: ["Power BI", "Power Query", "Excel Avancé"],
        link: "#"
    }
];

const container = document.getElementById('projects-container');

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
            <a href="${project.link}" class="read-more-link">Voir l'étude de cas →</a>
        </div>
    </div>
    `;
    container.innerHTML += projectHTML;
});

// Gestion du défilement fluide pour la navigation
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