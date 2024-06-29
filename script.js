document.addEventListener("DOMContentLoaded", function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectsContainer = document.getElementById('projects');
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                projectElement.innerHTML = `
                    <h2>${project.title}</h2>
                    <img src="${project.image}" alt="${project.title}">
                    <div class="description">
                        <p>${project.description}</p>
                        <a href="${project.github}" target="_blank">GitHub</a>
                    </div>
                `;

                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Erro ao carregar os projetos:', error));
});
