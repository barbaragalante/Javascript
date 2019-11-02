const alunas = ["Raquel Pereira","Talita Barbosa","Lia Lobo",
"Daiana Moraes","Jennifer Carvalho","Valdeniza Fontineles", 
"Adrielly Gomes"];

// const lista = document.getElementById("lista-alunas");
// for (let i = 0; i < alunas.length; i++) {
//     let item = document.createElement ("li");   
//     item.textContent = alunas [i];
//     lista.appendChild (item);
// }
  
// // ou
const lista = document.getElementById("lista-alunas");

alunas.forEach(function(aluna) {
    let item = document.createElement ("li");
    item.textContent = aluna;
     lista.appendChild (item);

 });

let soma = 0;

const meuTitulo = document.querySelector(".titulo");

meuTitulo.addEventListener("click", function logar() {
    meuTitulo.style.color = "red";
    meuTitulo.classList.add("vermelha");
    // console.log(soma++)
});

