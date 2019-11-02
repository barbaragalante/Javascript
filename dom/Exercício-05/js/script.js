
const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const mae = document.getElementById("lista-do-catalogo");

// const titulos = document.createElement("li");
// mae.appendChild(titulos);
// titulos.textContent = livros["titulo"];


// const autores = document.createElement("li");
// mae.appendChild(autores);
// autores.textContent = livros ["quemEscreveu"]

// const links = document.createElement("a");
// mae.appendChild(links);
// links.textContent = livros["link"];
// links.setAttribute("href", livros["link"]);
// links.setAttribute("target","_blank");

for( let dadosLivros in livros) {
    const titulos = document.createElement("h3");
    mae.appendChild(titulos);
    titulos.textContent = livros[dadosLivros]["titulo"];
    titulos.classList.add("livro__titulo");
    
    const autores = document.createElement("p");
    mae.appendChild(autores);
    autores.textContent = livros[dadosLivros]["quemEscreveu"]
    autores.classList.add("livro__autoria");

    const links = document.createElement("a");
    mae.appendChild(links);
    links.textContent = 'Ler mais';
    links.setAttribute("href", livros[dadosLivros]["link"]);
    links.setAttribute("target","_blank"); 
    links.classList.add("livro__link");

    let button = document.createElement('button');
    button.setAttribute('type','button')
    mae.appendChild(button);
    button.textContent = "Ja li";
    button.classList.add("botao-lido");

    button.addEventListener("click", function(evento){
        titulos.classList.add('livro__titulo--lido')
        titulos.classList.remove('livro__titulo--nao-lido')
    }
    )

    let btn = document.createElement('button');
    btn.setAttribute('type','button')
    mae.appendChild(btn)
    btn.textContent = "Desfazer"
    btn.classList.add("botao-desfazer");

    btn.addEventListener("click", function(evento){
        titulos.classList.add('livro__titulo--nao-lido')
        titulos.classList.remove('livro__titulo--lido')

    }
    )

}

// const listMae = document.getElementById("lista-do-catalogo");

// const meuLivro = document.createElement("li");
// listMae.appendChild(meuLivro);
// meuLivro.classList.add("livro");

// const tituloLivro = document.createElement("h3");
// meuLivro.appendChild(tituloLivro);
// tituloLivro.textContent = livros["1"]["titulo"];
// tituloLivro.classList.add("titulo__livro");

// const nomeAutor = document.createElement("p");
// meuLivro.appendChild(nomeAutor);
// nomeAutor.textContent = livros["1"]["quemEscreveu"];
// nomeAutor.classList.add("livro__autoria");

// const linkLivro = document.createElement("a");
// meuLivro.appendChild(linkLivro);
// linkLivro.setAttribute("href", livros["1"]["link"]);
// meuLivro.textContent = "leia aqui";
// linkLivro.classList.add("livro__link");
// }
