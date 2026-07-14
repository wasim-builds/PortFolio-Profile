import projects from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Render Projects into Horizontal List
    const projectsContainer = document.getElementById('projects-list');
    
    if (projectsContainer && projects) {
        projectsContainer.className = 'projects-h-container';
        projectsContainer.innerHTML = '';
        
        projects.forEach((project, index) => {
            const techString = project.tech.join(', ');
            const num = String(index + 1).padStart(2, '0');
            
            const cardHTML = `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-h-card" style="animation-delay: ${index * 0.1}s">
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

        // Horizontal scroll hijack logic
        const wrapper = document.getElementById('projects-scroll-wrapper');
        const container = document.getElementById('projects-list');

        function updateScroll() {
            if (!wrapper || !container) return;
            const rect = wrapper.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calculate progress of the sticky wrapper
            let progress = 0;
            if (rect.top <= 100) { // 100 is the sticky top offset
                progress = Math.abs(rect.top - 100) / (rect.height - viewportHeight);
            }
            if (progress > 1) progress = 1;
            if (progress < 0) progress = 0;
            
            // Max translate distance
            const maxTranslate = container.scrollWidth - container.parentElement.clientWidth;
            
            if (maxTranslate > 0) {
                container.style.transform = `translateX(-${progress * maxTranslate}px)`;
            }
        }

        window.addEventListener('scroll', updateScroll);
        window.addEventListener('resize', updateScroll);
        
        // Initial call
        updateScroll();
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
