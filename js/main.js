import projects from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Project Rendering
    const projectsContainer = document.getElementById('projects-container');
    
    if (projectsContainer && projects) {
        projects.forEach((project, index) => {
            // Create tech tags HTML
            const techTags = project.tech.map(t => `<span>${t}</span>`).join('');
            
            // Create SVG Icon for GitHub Link
            const githubIcon = `
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            `;

            // Construct Card HTML with Premium CSS Classes
            const cardHTML = `
                <div class="project-card glass-panel hidden" style="transition-delay: ${(index % 3) * 0.15}s">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub Repository">
                            ${githubIcon}
                        </a>
                    </div>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">
                        ${techTags}
                    </div>
                </div>
            `;
            
            projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // 2. Sticky Navbar Glassmorphism Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // We keep observing so they can fade in/out if desired, or unobserve to run once:
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe static elements
    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Observe dynamically created project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // 4. Loading Screen Logic (Redoyanul Theme)
    const loadingScreen = document.getElementById('loading-screen');
    const enterBtn = document.getElementById('enter-btn');
    const loadingWrap = document.querySelector('.loading-wrap');
    const loadingHover = document.querySelector('.loading-hover');

    if (loadingScreen && enterBtn && loadingWrap && loadingHover) {
        // Hover tracking
        loadingWrap.addEventListener('mousemove', (e) => {
            const rect = loadingWrap.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Apply offset for visual center
            loadingHover.style.left = `${x - 125}px`;
            loadingHover.style.top = `${y - 60}px`;
        });

        // Click to enter
        enterBtn.addEventListener('click', () => {
            loadingWrap.classList.add('loading-clicked');
            loadingScreen.classList.add('loading-clicked');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000); // Wait for transition
        });
    }
});
