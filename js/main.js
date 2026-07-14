import projects from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Project Rendering (Redoyanul Haque Layout)
    const projectsContainer = document.getElementById('projects-container');
    
    if (projectsContainer && projects) {
        // Take top 6 projects for the premium showcase to avoid clutter
        const topProjects = projects.slice(0, 6);
        
        topProjects.forEach((project, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            const toolsString = project.tech.join(', ');
            
            const cardHTML = `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-item fade-in">
                    <div class="project-content">
                        <div class="project-num">${num}</div>
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-category">${project.tech[0]} / Engineering</div>
                        
                        <div class="project-tools-heading">Tools and features</div>
                        <div class="project-tools">${toolsString}</div>
                    </div>
                    <div class="project-image-wrapper">
                        <!-- We use an abstract gradient/placeholder that fits the dark theme since specific project images aren't available -->
                        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, rgba(20,15,25,1) 0%, rgba(194,164,255,0.1) 100%);"></div>
                    </div>
                </a>
            `;
            
            projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // 2. Loading Screen Logic (Redoyanul Theme)
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
            
            loadingHover.style.left = `${x - 125}px`;
            loadingHover.style.top = `${y - 60}px`;
        });

        // Click to enter
        enterBtn.addEventListener('click', () => {
            loadingWrap.classList.add('loading-clicked');
            loadingScreen.classList.add('loading-clicked');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000); 
        });
    }

    // 3. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .tech-box, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
});
