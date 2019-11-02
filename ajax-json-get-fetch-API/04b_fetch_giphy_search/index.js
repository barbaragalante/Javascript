// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const input = document.querySelector("#gifInput");
const botao = document.querySelector("#gifButton");
const div = document.querySelector("#root");

botao.addEventListener('click',(e) => fazerFetch(e));

function fezerFetch(evento){
    
    event.preventDefault()
    const valorInput = input.value
    div.innerHTML = "" //limpar div
    const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}$&api_key=dc6zaTOxFJmzC&limit=10&offset=0`


    fetch(url){
        .then(response => (response.json())
        .then(json=>mostrarResultado(json))
        .catch(error =>console.error(e))
    }
    

    function mostrarResultado(json){
        const array = json.data

        array.forEach(element => {
            const srcImg = element.images.original.url
            div.innerHTML += `
            <img src=${srcImg}>
            `
        });



}