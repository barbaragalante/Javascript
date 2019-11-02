function ensaboar(){
    criaText('começou a ensaboar')
}

function criaTexto(texto) {
    const div = doxument.querryselector('#root');
    div.innerHTML += `<p>${texto}$</p>`
    
}

const sabao = true;
const agua = true;

function ensaboar(){
    return new Promise((resolve, reject) => {
        if (sabao){
            criaTexto('começou a ensaboar');
            setTimeout(() => {
                resolve('terminou de ensaboar');
            }, 5000);
        } else {
            reject('nao consigo ensaboar');
        }
        })
  
        function enxaguar() {
            return new Promise((resolve, reject) => {

                if(agua){
                    setTimeout(() => {
                        resolve('terminou de enxaguar');
                    }, 2000 );
                }else{
                    reject('nao consigo enxaguar')
                }
              
            })
        }
}


Promise.all([ensaboar(), enxaguar()])
.then(resAll =>resAll.forEach(res => criaTexto(res)
.catch(err => console.log(arr))))



    
