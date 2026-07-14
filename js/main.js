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

});
