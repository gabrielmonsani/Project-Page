document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Gerenciador de Senhas",
            description: "Um gerenciador de senhas é uma aplicação projetada para armazenar, organizar e proteger senhas e informações confidenciais de usuários de maneira segura e acessível. Esta ferramenta é essencialmente uma caixa-forte digital que oferece conveniência ao usuário final ao eliminar a necessidade de lembrar e inserir manualmente senhas complexas em vários serviços e plataformas online.",
            image: "https://raw.githubusercontent.com/gabrielmonsani/Project-Page/main/gerenciador-de-senhas-google.jpg",
            github: "https://github.com/gabrielmonsani?tab=repositories"
        },
        {
            title: "Blog Pessoal",
            description: "Um blog pessoal é um espaço digital onde indivíduos compartilham seus pensamentos, opiniões, experiências pessoais e interesses com um público mais amplo na internet. Ele serve como uma plataforma versátil e criativa para expressar ideias, conectar-se com outras pessoas e até mesmo para fins profissionais, dependendo dos objetivos do autor.",
            image: "https://raw.githubusercontent.com/gabrielmonsani/Project-Page/main/ilustracao-do-conceito-da-postagem-do-blog_114360-27120.jpg",
            github: "https://github.com/gabrielmonsani?tab=repositories"
        }
    ];

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
});
