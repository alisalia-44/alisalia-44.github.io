/* =====================================================================
   main.js — logique du site (tu n'as normalement pas besoin d'y toucher).
   Le contenu et les textes (FR / EN) viennent de data.js.
   ===================================================================== */
(function () {
    "use strict";

    // Échappe le texte simple pour éviter toute injection HTML accidentelle.
    // (longDesc est volontairement du HTML : c'est toi qui l'écris dans data.js.)
    const esc = (value) =>
        String(value).replace(/[&<>"']/g, (c) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[c]));

    /* ---------- Langue : français par défaut, anglais avec le bouton EN ou ?lang=en ---------- */
    const root = document.documentElement;
    let lang = "fr";
    try {
        const q = new URLSearchParams(location.search).get("lang");
        if (q === "fr" || q === "en") localStorage.setItem("lang", q);
        lang = q === "fr" || q === "en" ? q : localStorage.getItem("lang") || "fr";
    } catch (e) {
        lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "fr";
    }
    if (lang !== "en") lang = "fr";

    // Texte de l'interface dans la langue choisie (français si la traduction manque)
    const t = (key) => (uiText[lang] && uiText[lang][key]) || uiText.fr[key] || "";
    // Champ d'un élément de data.js dans la langue choisie (français si pas de version anglaise)
    const tr = (item, key) => (lang === "en" && item.en && item.en[key] ? item.en[key] : item[key]);

    const tagsHTML = (tags) => tags.map((x) => `<li>${esc(x)}</li>`).join("");

    /* ---------- Icônes de la section Contact ---------- */
    const ICONS = {
        email: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7.5 8.5 6 8.5-6"/></svg>',
        github: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        uesba: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>'
    };

    /* ---------- Rendu de la page (rappelé à chaque changement de langue) ---------- */
    const projectsContainer = document.getElementById("projects-container");
    let openId = null;

    function renderProjects() {
        projectsContainer.innerHTML = portfolioData.map((p) => `
            <article class="project" id="projet-${esc(p.id)}">
                <p class="project-year">${esc(p.year)}</p>
                <div class="project-content">
                    <h3>${esc(tr(p, "title"))}</h3>
                    <p class="project-role">${esc(tr(p, "role"))}</p>
                    <p class="project-desc">${esc(tr(p, "description"))}</p>
                    <ul class="tech-tags">${tagsHTML(tr(p, "tags"))}</ul>
                    <button class="text-link btn-voir-plus" type="button" data-id="${esc(p.id)}">
                        ${esc(t("readMore"))}<span class="chevron" aria-hidden="true">›</span>
                        <span class="sr-only">${esc(t("about"))}${esc(tr(p, "title"))}</span>
                    </button>
                </div>
            </article>
        `).join("");
    }

    function renderResume() {
        document.getElementById("education-container").innerHTML = educationData.map((e) => `
            <div class="resume-item">
                <h4>${esc(tr(e, "title"))}</h4>
                <p class="meta">${esc(tr(e, "meta"))}</p>
                <p class="desc-meta">${esc(tr(e, "desc"))}</p>
            </div>
        `).join("");

        document.getElementById("skills-container").innerHTML = skillsData.map((s) => `
            <div class="resume-item">
                <h4>${esc(tr(s, "title"))}</h4>
                <ul class="tech-tags">${tagsHTML(tr(s, "items"))}</ul>
            </div>
        `).join("");

        const c = certificationsData;
        document.getElementById("certifications-container").innerHTML = `
            <div class="resume-item">
                <p class="meta">${esc(tr(c, "meta"))}</p>
                <p class="desc-meta">${esc(tr(c, "desc"))}</p>
            </div>
        `;
    }

    function renderContact() {
        const d = contactData;
        const links = [
            { icon: "email", label: "Email", href: "mailto:" + d.emailUser + "@" + d.emailDomain },
            { icon: "github", label: "GitHub", href: d.github, ext: true, me: true },
            { icon: "linkedin", label: "LinkedIn", href: d.linkedin, ext: true, me: true },
            { icon: "uesba", label: "UESBA", href: d.uesba, ext: true }
        ];
        document.getElementById("contact-container").innerHTML = links.map((l) => `
            <a class="contact-link" href="${esc(l.href)}"${l.ext ? ` target="_blank" rel="${l.me ? "me " : ""}noopener"` : ""}>
                ${ICONS[l.icon]}<span>${esc(l.label)}</span>
            </a>
        `).join("");
    }

    // Textes fixes de index.html (balises data-i18n…), titre de l'onglet, description, état du bouton FR | EN
    function applyStatic() {
        root.lang = lang;
        document.title = t("docTitle");
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", t("docDesc"));
        document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
        document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
        document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
        document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.setAttribute("alt", t(el.dataset.i18nAlt)); });
        document.querySelectorAll(".lang-switch button").forEach((b) => {
            b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
        });
    }

    function renderAll() {
        applyStatic();
        renderProjects();
        renderResume();
        renderContact();
        if (openId && modal.open) openProject(openId);
    }

    /* ---------- Fenêtre d'étude de cas ---------- */
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalRole = document.getElementById("modal-role");
    const modalTags = document.getElementById("modal-tags");
    const modalBody = document.getElementById("modal-body");
    const modalLink = document.getElementById("modal-link");

    function openProject(id) {
        const project = portfolioData.find((p) => p.id === id);
        if (!project) return;
        openId = id;

        modalTitle.textContent = tr(project, "title");
        modalRole.textContent = tr(project, "role");
        modalTags.innerHTML = tagsHTML(tr(project, "tags"));
        modalBody.innerHTML = tr(project, "longDesc");

        if (project.link) {
            modalLink.href = project.link;
            modalLink.innerHTML = `${esc(tr(project, "linkLabel") || t("viewProject"))}<span class="chevron" aria-hidden="true">›</span>`;
            modalLink.classList.remove("hidden");
        } else {
            modalLink.classList.add("hidden");
        }

        if (!modal.open) modal.showModal();
        modal.scrollTop = 0;
        root.classList.add("modal-open");

        // Lien direct vers l'étude de cas (ex. …github.io/#projet-aminou-gym)
        history.replaceState(null, "", location.pathname + location.search + "#projet-" + id);
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
        openId = null;
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

    /* ---------- Bouton FR | EN ---------- */
    document.querySelectorAll(".lang-switch button").forEach((b) => {
        b.addEventListener("click", () => {
            if (b.dataset.lang === lang) return;
            lang = b.dataset.lang;
            try { localStorage.setItem("lang", lang); } catch (e) { /* stockage indisponible : le choix vaut pour cette visite */ }
            const url = new URL(location.href);
            url.searchParams.set("lang", lang);
            history.replaceState(null, "", url.pathname + url.search + url.hash);
            renderAll();
        });
    });

    renderAll();
    openFromHash();

    /* ---------- Menu : section active pendant le défilement ---------- */
    const navLinks = document.querySelectorAll(".nav-center a");
    const sections = ["projets", "parcours", "contact"].map((id) => document.getElementById(id));

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
