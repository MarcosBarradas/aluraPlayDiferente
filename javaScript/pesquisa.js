import {conectaAPI} from './conectaAPI.js';
import transformaEmHtml from './mostrarVideos.js';

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');
const inputPesquisa = document.querySelector('[data-pesquisa]');

inputPesquisa.addEventListener('keyup', keyup => {
    if(keyup.code === `Enter`){
        botaoPesquisa.click();
    }
});

botaoPesquisa.addEventListener('click', click=> pesquisa(click));

async function pesquisa(click){
    click.preventDefault();
    const pesquisa = document.querySelector('[data-pesquisa]').value;
    const videosFiltrados = await conectaAPI.filtroDePesquisa(pesquisa);
    const lista = document.querySelector('[data-lista]');
    lista.innerHTML = '';
    videosFiltrados.forEach(video => {
        lista.appendChild(transformaEmHtml(video.titulo,video.descricao,video.url,video.imagem))
    })
}