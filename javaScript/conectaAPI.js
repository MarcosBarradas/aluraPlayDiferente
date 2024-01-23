const API_URL = `http://localhost:3000/videos`

async function listaVideos(){
    const conexao = await fetch(API_URL);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


//inserido por cliente
async function criaItem(titulo, descricao, url, imagem){
    const response = await fetch(API_URL,{
        method: `POST`, // nossa INTENÇÃO é inserir informações.
        headers: {'Content-Type':`application/json`},// tipo do conteúdo, como tratá-lo. 
        body: JSON.stringify({
            titulo,
            descricao: `${descricao} mil visualizações`,
            url,
            imagem
        })
    })
    return await response.json()
} 
async function filtroDePesquisa(pesquisaDoCliente){
    const videosFiltrados = await fetch(`http://localhost:3000/videos?q=${pesquisaDoCliente}`);
    return await videosFiltrados.json();
}

export const conectaAPI = {
    listaVideos,    
    criaItem,
    filtroDePesquisa
};
