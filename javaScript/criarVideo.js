import {conectaAPI} from './conectaAPI.js';

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener(`submit`, submit=>itemDoCliente(submit));

async function itemDoCliente(submit){
    submit.preventDefault();
    const titulo = document.querySelector('[data-titulo]').value
    const imagem = document.querySelector('[data-imagem]').value
    const url = document.querySelector('[data-url]').value
    const descricao = Math.round(Math.random() * 1000).toString();

    await conectaAPI.criaItem(titulo,descricao,url,imagem);
    window.location.href = `../pages/envio-concluido.html`;
}