import { contributions, projects, skills, experience } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    // ---- Page Loader ----
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 800);
    }

    // ---- Render Contributions ----
    const contribContainer = document.getElementById('contributions-list');
    if (contribContainer && contributions) {
        contributions.forEach((contrib, index) => {
            const orgInitial = contrib.org.charAt(0).toUpperCase();
            const prsToShow = contrib.prs.slice(0, 3);
            const remaining = contrib.prs.length - 3;

            const prsHTML = prsToShow.map(pr => `
                <a href="https://github.com/${contrib.org}/${contrib.repo}/pull/${pr.num}" target="_blank" class="contrib-pr">
                    <span class="contrib-pr-type ${pr.type}">${pr.type}</span>
                    <span class="contrib-pr-num">#${pr.num}</span>
                    <span class="contrib-pr-title">${pr.title}</span>
                </a>
            `).join('');

            const moreHTML = remaining > 0 ? `<div class="contrib-more">+${remaining} more PR${remaining > 1 ? 's' : ''}</div>` : '';

            const card = document.createElement('div');
            card.className = 'contrib-card reveal';
            card.innerHTML = `
                <div class="contrib-header">
                    <div class="contrib-org">
                        <div class="contrib-org-avatar">${orgInitial}</div>
                        <div>
                            <span class="contrib-org-name">${contrib.org}</span>
                            <span class="contrib-repo">${contrib.repo}</span>
                        </div>
                    </div>
                    <span class="contrib-pr-count">${contrib.count} PR${contrib.count > 1 ? 's' : ''}</span>
                </div>
                <p class="contrib-desc">${contrib.description}</p>
                <div class="contrib-prs">${prsHTML}${moreHTML}</div>
            `;
            contribContainer.appendChild(card);
        });
    }

    // ---- Render Projects ----
    const projectsContainer = document.getElementById('projects-list');
    if (projectsContainer && projects) {
        projects.forEach((project, index) => {
            const tagsHTML = project.tech.map(t => `<span class="project-tag">${t}</span>`).join('');
            const num = String(index + 1).padStart(2, '0');
            const starsHTML = project.stars > 0 ? `
                <span class="project-stars">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ${project.stars}
                </span>` : '';

            // C1 FIX: Assign multiple filter categories so featured projects appear in their real category too
            const cat = project.category.toLowerCase();
            const aiCats = ['ai', 'ml', 'nlp', 'computer vision', 'ai / ml', 'ai / nlp', 'nlp / ml', 'nlp / security', 'ai / healthcare', 'ml infrastructure'];
            const webCats = ['web', 'productivity', 'mobile', 'data science', 'platform', 'health tech'];
            let primaryFilter = 'other';
            if (aiCats.some(c => cat.includes(c))) primaryFilter = 'ai';
            else if (webCats.some(c => cat.includes(c))) primaryFilter = 'web';

            // Store all matching filter categories as comma-separated
            const allFilters = ['all'];
            if (project.featured) allFilters.push('featured');
            allFilters.push(primaryFilter);

            // C2 FIX: Add project image to card
            const imageHTML = project.image ? `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>` : '';

            const card = document.createElement('a');
            card.href = project.github;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'project-card reveal';
            card.dataset.filter = allFilters.join(',');
            card.innerHTML = `
                <div class="project-card-header">
                    <h3 class="project-num">${num}</h3>
                    <div class="project-title-group">
                        <h4 class="project-title">${project.title}</h4>
                        <span class="project-category">${project.category}</span>
                    </div>
                </div>
                ${imageHTML}
                <div class="project-body">
                    <h5>About</h5>
                    <p>${project.description}</p>
                    <div class="project-tags">${tagsHTML}</div>
                </div>
                <div class="project-footer">
                    ${starsHTML}
                    <span class="project-link">
                        View on GitHub
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </span>
                </div>
            `;
            projectsContainer.appendChild(card);
        });

        // ---- Project Filters ----
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                const cards = projectsContainer.querySelectorAll('.project-card');
                cards.forEach(card => {
                    // C1 FIX: Check if the card's filter list includes the selected filter
                    const cardFilters = card.dataset.filter.split(',');
                    if (filter === 'all' || cardFilters.includes(filter)) {
                        card.style.display = '';
                        card.style.opacity = '0';
                        requestAnimationFrame(() => {
                            card.style.opacity = '1';
                            card.style.transition = 'opacity 0.4s ease';
                        });
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ---- Render Skills ----
    const skillsContainer = document.getElementById('skills-list');
    if (skillsContainer && skills) {
        skills.forEach(group => {
            const groupHTML = document.createElement('div');
            groupHTML.className = 'skill-group';

            const title = document.createElement('h3');
            title.className = 'skill-group-title';
            title.textContent = group.category;
            groupHTML.appendChild(title);

            const grid = document.createElement('div');
            grid.className = 'skill-grid';

            group.items.forEach(skill => {
                const item = document.createElement('div');
                item.className = 'skill-item reveal';
                item.style.setProperty('--level', `${skill.level}%`);
                item.innerHTML = `
                    <img src="${skill.icon}" alt="${skill.name}" loading="lazy" onerror="this.style.display='none'">
                    <span class="skill-name">${skill.name}</span>
                    <div class="skill-bar"><div class="skill-bar-fill"></div></div>
                `;
                grid.appendChild(item);
            });

            groupHTML.appendChild(grid);
            skillsContainer.appendChild(groupHTML);
        });
    }

    // ---- Render Experience ----
    const expContainer = document.getElementById('experience-list');
    if (expContainer && experience) {
        experience.forEach((exp, index) => {
            const iconMap = {
                work: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
                research: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
                education: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>'
            };

            const item = document.createElement('div');
            item.className = 'exp-item reveal';
            item.innerHTML = `
                <div class="exp-dot ${exp.type}">${iconMap[exp.type] || ''}</div>
                <div class="exp-content">
                    <h3>${exp.title}</h3>
                    <div class="exp-org">${exp.org}</div>
                    <p>${exp.description}</p>
                    <span class="exp-date">${exp.date}</span>
                </div>
            `;
            expContainer.appendChild(item);
        });
    }

    // ---- Scroll Reveal (Intersection Observer) ----
    const revealElements = document.querySelectorAll('.reveal, .stat, .contrib-card, .project-card, .skill-item, .exp-item, .contact-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 6) * 0.06}s`;
        revealObserver.observe(el);
    });

    // ---- Active Nav Highlighting ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.top-nav .nav-icon');

    if (sections.length > 0 && navLinks.length > 0) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.dataset.section === id);
                    });
                }
            });
        }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

        sections.forEach(section => navObserver.observe(section));
    }

    // ---- Mobile Hamburger Menu ----
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            mobileMenuBtn.classList.toggle('open');
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileMenuBtn.classList.remove('open');
            });
        });
    }

    // ---- Custom Cursor ----
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        function animateCursor() {
            outlineX += (mouseX - outlineX) * 0.12;
            outlineY += (mouseY - outlineY) * 0.12;
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const interactives = document.querySelectorAll('a, button, .filter-btn, .project-card, .contrib-card, .skill-item, .contact-item');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hovering');
                cursorOutline.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hovering');
                cursorOutline.classList.remove('hovering');
            });
        });
    }

    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
