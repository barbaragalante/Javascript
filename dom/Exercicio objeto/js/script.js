const eu = {
    nome: "Barbara",
    profissao:"Desenvolvedora",
    idade: 23,
    site: "https://github.com/Encantriz"
    // "gatinho-preferido": "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
    // sem aspas funciona como variavel. 
}

const mae = document.getElementById("sou-a-mae");
// const nome = document.createElement("h2");
// mae.appendChild(nome);
// nome.textContent = eu["nome"];

// const profissao = document.createElement("h2");
// mae.appendChild(profissao);
// profissao.textContent = "Desenvolvedora";

// const idade = document.createElement("h2");
// mae.appendChild(idade);
// idade.textContent = "23";

// const site = document.createElement("a");
// mae.appendChild(site);
// site.textContent = "Meu GitHub";
// site.setAttribute("href","ttps://github.com/Encantriz");
// site.setAttribute("target","_blank");

// const gatinho = document.createElement("img");
// mae.appendChild(gatinho);
// gatinho.setAttribute("src",eu["gatinho-preferido"]);


// const divMae = document.querySelector("#sou-a-mae");
// const titulo = document.createElement("#h3");
// divMae.appendChild(titulo);
// titulo.textContent = eu["nome"];

// const idade = document.createElement("span");
// divMae.appendChild(idade);
// idade.textContent = eu["idade"];

// const profissao = document.createElement("p");
// divMae.appendChild(profissao);
// profissao.textContent = eu["profissao"];

// const meuSite = document.createElement("a");
// divMae.appendChild(meuSite);
// meuSite.textContent = "Acessar meu site";
// meuSite.setAttribute("href", "eu.site");

for (let propriedade in eu) {
    let paragrafo = document.createElement("p");
    mae.appendChild(paragrafo);
    paragrafo.textContent = eu[propriedade]
}
