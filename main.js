/* =====================================================================
   main.js — logique du site (tu n'as normalement pas besoin d'y toucher).
   Le contenu vient de data.js.
   ===================================================================== */
(function () {
    "use strict";

    // Échappe le texte simple pour éviter toute injection HTML accidentelle.
    // (longDesc est volontairement du HTML : c'est toi qui l'écris dans data.js.)
    const esc = (value) =>
        String(value).replace(/[&<>"']/g, (c) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[c]));

    const tagsHTML = (tags) => tags.map((t) => `<li>${esc(t)}</li>`).join("");

    /* ---------- Projets ---------- */
    const projectsContainer = document.getElementById("projects-container");

    projectsContainer.innerHTML = portfolioData.map((p) => `
        <article class="project" id="projet-${esc(p.id)}">
            <p class="project-year">${esc(p.year)}</p>
            <div class="project-content">
                <h3>${esc(p.title)}</h3>
                <p class="project-role">${esc(p.role)}</p>
                <p class="project-desc">${esc(p.description)}</p>
                <ul class="tech-tags">${tagsHTML(p.tags)}</ul>
                <button class="text-link btn-voir-plus" type="button" data-id="${esc(p.id)}">
                    Voir plus<span class="chevron" aria-hidden="true">›</span>
                    <span class="sr-only"> sur ${esc(p.title)}</span>
                </button>
            </div>
        </article>
    `).join("");

    /* ---------- Formation, compétences, certifications ---------- */
    document.getElementById("education-container").innerHTML = educationData.map((e) => `
        <div class="resume-item">
            <h4>${esc(e.title)}</h4>
            <p class="meta">${esc(e.meta)}</p>
            <p class="desc-meta">${esc(e.desc)}</p>
        </div>
    `).join("");

    document.getElementById("skills-container").innerHTML = skillsData.map((s) => `
        <div class="resume-item">
            <h4>${esc(s.title)}</h4>
            <ul class="tech-tags">${tagsHTML(s.items)}</ul>
        </div>
    `).join("");

    document.getElementById("certifications-container").innerHTML = `
        <div class="resume-item">
            <p class="meta">${esc(certificationsData.meta)}</p>
            <p class="desc-meta">${esc(certificationsData.desc)}</p>
        </div>
    `;

    /* ---------- Fenêtre d'étude de cas ---------- */
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalRole = document.getElementById("modal-role");
    const modalTags = document.getElementById("modal-tags");
    const modalBody = document.getElementById("modal-body");
    const modalLink = document.getElementById("modal-link");
    const root = document.documentElement;

    function openProject(id) {
        const project = portfolioData.find((p) => p.id === id);
        if (!project) return;

        modalTitle.textContent = project.title;
        modalRole.textContent = project.role;
        modalTags.innerHTML = tagsHTML(project.tags);
        modalBody.innerHTML = project.longDesc;

        if (project.link) {
            modalLink.href = project.link;
            modalLink.innerHTML = `${esc(project.linkLabel || "Consulter le projet")}<span class="chevron" aria-hidden="true">›</span>`;
            modalLink.classList.remove("hidden");
        } else {
            modalLink.classList.add("hidden");
        }

        if (!modal.open) modal.showModal();
        modal.scrollTop = 0;
        root.classList.add("modal-open");

        // Lien direct vers l'étude de cas (ex. …github.io/#projet-aminou-gym)
        history.replaceState(null, "", "#projet-" + id);
    }

    projectsContainer.addEventListener("click", (e) => {
        const button = e.target.closest(".btn-voir-plus");
        if (button) openProject(button.dataset.id);
    });

    document.getElementById("close-modal").addEventListener("click", () => modal.close());

    // Clic en dehors du contenu = fermeture
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.close();
    });

    // Fermeture (bouton, Échap ou clic extérieur)
    modal.addEventListener("close", () => {
        root.classList.remove("modal-open");
        if (location.hash.startsWith("#projet-")) {
            history.replaceState(null, "", location.pathname + location.search + "#projets");
        }
    });

    // Ouvre directement l'étude de cas si l'adresse contient #projet-xxx
    function openFromHash() {
        if (location.hash.startsWith("#projet-")) {
            openProject(location.hash.slice("#projet-".length));
        }
    }
    window.addEventListener("hashchange", openFromHash);
    openFromHash();

    /* ---------- Menu : section active pendant le défilement ---------- */
    const navLinks = document.querySelectorAll(".nav-center a");
    const sections = ["projets", "parcours"].map((id) => document.getElementById(id));

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((a) =>
                    a.classList.toggle("active", a.dataset.section === entry.target.id)
                );
            });
        }, { rootMargin: "-35% 0px -55% 0px" });
        sections.forEach((s) => s && observer.observe(s));
    }
})();
