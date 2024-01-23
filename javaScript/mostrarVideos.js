
import { conectaAPI } from "./conectaAPI.js";
const listaHTML = document.querySelector(`[data-lista]`); // vamos inserir aqui itens do json em formato html usando a função transformaEmLi
export default function transformaEmHtml(titulo, descricao, url, imagem, id){
    const video = document.createElement(`li`);
    video.className = `videos__item`;
    video.setAttribute(`id`, id);
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
    return video //retorna um elemento li HTML -> é preciso colocar essa li dentro de algum lugar, na ul .videos__container
}
//transformar objetos json em elemento html com suas devidas informações. pra isso usaremos forEach.

//pra cada listaAPI a gente atribui em outra lista que está no html os valores da listaAPI no formato html, graças a função transformaEmVideo que pegas as informações do item e dispoe como html
async function listaVideo() {
    const listaAPI = await conectaAPI.listaVideos();
    listaAPI.forEach(item => listaHTML.appendChild(transformaEmHtml(item.titulo, item.descricao, item.url, item.imagem, item.id)))
}
listaVideo()