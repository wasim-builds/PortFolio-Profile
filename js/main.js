import projects from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Render Projects into Grid Layout
    const projectsContainer = document.getElementById('projects-list');
    
    if (projectsContainer && projects) {
        projectsContainer.className = 'projects-grid';
        projectsContainer.innerHTML = '';
        
        projects.forEach((project, index) => {
            const techString = project.tech.join(', ');
            const num = String(index + 1).padStart(2, '0');
            
            const cardHTML = `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-card" style="animation-delay: ${index * 0.1}s">
                    <div class="project-h-header">
                        <h3 class="project-num">${num}</h3>
                        <div class="project-title-group">
                            <h4 class="project-title">${project.title}</h4>
                            <span class="project-category">Project</span>
                        </div>
                    </div>
                    <div class="project-h-tools">
                        <h5>Tools and features</h5>
                        <p>${techString}</p>
                    </div>
                    <div class="project-h-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                </a>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // Navigation Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.top-nav .nav-icon');
    
    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Custom Trailing Cursor Logic
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;

            // Direct instant positioning for the dot
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Smooth trailing animation for the outline ball
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { 
                duration: 500, 
                fill: "forwards" 
            });
        });
    }

});
