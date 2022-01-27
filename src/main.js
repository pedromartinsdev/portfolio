const repos = axios.get('https://api.github.com/users/pedromartinsdev/repos')
    .then(function (response) {
        const starredRepos = response.data.filter(starredRepos => starredRepos.stargazers_count !== 0)
        createNewProjectCard(starredRepos)    
    })
    .catch(function (error) {
        console.warn(error);
    });

function createNewProjectCard(repos) {
    for (const repo in repos) {
        if (Object.hasOwnProperty.call(repos, repo)) {
            const repoStarred = repos[repo];

            const a = document.createElement('a');

            const div = document.createElement('div');
            div.setAttribute('class', 'project-card')
            const body = document.getElementById('projects-container')
            body.append(a)
            a.append(div)
            a.setAttribute('href', repoStarred.svn_url)
            a.setAttribute('target', '_blank')
            const p = document.createElement('p');
            const span = document.createElement('span');
            div.append(span, p)
            
            span.innerText = repoStarred.name.toUpperCase()
            p.innerText = repoStarred.description
        }
    }
}
