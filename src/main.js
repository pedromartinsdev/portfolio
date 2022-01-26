axios.get('https://api.github.com/users/pedromartinsdev/repos')
    .then(function (response) {
        const starredRepos = response.data.filter(starredRepos => starredRepos.stargazers_count !== 0)
        console.log(starredRepos)
    })
    .catch(function (error) {
        console.warn(error);
    });


document.body.onload = adcElemento;

function adcElemento() {
    // cria um novo elemento div
    // e dá à ele conteúdo
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá, cumdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddprimentos!");
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("projects-container");

    document.body.insertBefore(divNova, divAtual);
}