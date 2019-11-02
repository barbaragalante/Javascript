// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const requisicaoHTTP = new XMLHttpRequest();
requisicaoHTTP.open('GET',enderecoAPI);
requisicaoHTTP.send();
requisicaoHTTP.onreadystatechange = function pegandoresposta(){
    if(requisicaoHTTP.readyState === 4){
        if(requisicaoHTTP.status === 200){
            console.log('a resposta esta pronta')
        }else{
            const statusCode = requisicaoHTTP.status;
            const statusMensagem = requisicaoHTTP.statusText;
            console.error
        }
    }
}