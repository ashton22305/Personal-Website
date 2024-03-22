async function loadProjects() {
    // Request projects
    const request = new Request("./projects.json");
    const response = await fetch(request);

    const data = await response.json();

    // Manipulate DOM to display projects
    const projects = document.getElementById("projects");
    for(const project of data) {
        const projectbox = document.createElement("a");
        projectbox.setAttribute("class", "project");
        projectbox.setAttribute("href", project.url);
        projects.appendChild(projectbox);

        const title = document.createElement("h2");
        title.textContent = project.name;
        projectbox.appendChild(title);

        const description = document.createElement("p");
        description.textContent = project.description;
        projectbox.appendChild(description);
    }
}

window.addEventListener("load", loadProjects);