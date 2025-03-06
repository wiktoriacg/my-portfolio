let currentProject = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const tocLinks = document.querySelectorAll('.toc-link');

// Funkcja do pokazywania projektu
function showProject(index) {
    if (index < 0 || index >= totalProjects) return; // Zabezpieczenie przed wyjściem poza zakres
    projects.forEach((project, i) => {
        project.classList.remove('active');
        if (i === index) {
            project.classList.add('active');
        }
    });
    currentProject = index;
}

// Przycisk "Poprzednia"
prevBtn.addEventListener('click', () => {
    if (currentProject > 0) {
        showProject(currentProject - 1);
    }
});

// Przycisk "Następna"
nextBtn.addEventListener('click', () => {
    if (currentProject < totalProjects - 1) {
        showProject(currentProject + 1);
    }
});

// Spis treści
tocLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showProject(index);
    });
});

// Pokazujemy pierwszy projekt po załadowaniu strony
showProject(0);