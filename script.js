// 🔥 GitHub Username
const username = "urkushagra";

// 🚀 Fetch Repositories
async function fetchRepos() {
    const container = document.getElementById("repo-container");

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        container.innerHTML = "";

        repos
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 6)
            .forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.classList.add("project-card");

                repoCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description provided."}</p>
                    <a href="${repo.html_url}" target="_blank">View Code</a>
                `;

                container.appendChild(repoCard);
            });

    } catch (error) {
        container.innerHTML = "<p>Failed to load projects.</p>";
    }
}
repoCard.innerHTML = `
    <h3>${repo.name}</h3>
    <p>${repo.description || "No description provided."}</p>
    <div class="btn-group">
        <a href="${repo.html_url}" target="_blank">Code</a>
        <a href="https://${username}.github.io/${repo.name}" target="_blank">Live</a>
    </div>
`;

fetchRepos();
