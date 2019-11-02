// documentacao da api do github  https://developer.github.com/v3/
// requisição na api pela url https://api.github.com
// fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma

const url = 'http://api.giphy.com/v1/gifs/search?q=css&api_key=dc6zaTOxFJmzC&limit=1&offset=0'

async function buscarApi(url) {
    const response = await fetch(url)
    const json = await response.json()
    criarImagem(json.data);
    // .then(response => response.json())
    // .then(json => criarImagem(json.data))
    // .catch(erro => console.error(erro))
}


function criarImagem(array) {
    console.log(array)
    document.body.innerHTML = `
    <img src=${array[0].images.original.url}$>
    `
}

buscarApi(url).catch(erro => console.error(erro))