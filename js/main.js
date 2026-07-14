import projects from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Render Projects into Sawad Bento Grid
    const projectsContainer = document.getElementById('projects-bento-container');
    
    if (projectsContainer && projects) {
        // Show top 6 projects
        const topProjects = projects.slice(0, 6);
        
        topProjects.forEach((project) => {
            const techString = project.tech.join(' • ');
            
            const cardHTML = `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="bento-card project-card col-span-1">
                    <div>
                        <div class="project-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3 class="project-title">${project.title.replace(/-/g, ' ')}</h3>
                    </div>
                    <p class="project-tech">${techString}</p>
                </a>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // Floating Nav Active State Scroll Logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = ['home', 'projects', 'contact'].map(id => document.getElementById(id)).filter(Boolean);

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});
