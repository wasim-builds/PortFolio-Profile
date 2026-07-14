import projects from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Render Projects into Sawad Vertical List
    const projectsContainer = document.getElementById('projects-list');
    
    if (projectsContainer && projects) {
        projects.forEach((project) => {
            const techString = project.tech.join(' • ');
            
            const cardHTML = `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-list-item">
                    <div class="project-image-box">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${techString}</p>
                    </div>
                    <div class="project-arrow">↗</div>
                </a>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
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
