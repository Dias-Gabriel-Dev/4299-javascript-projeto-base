
const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVaiza(listaDeCompras) {
    const intensDaLista = listaDeCompras.querySelectorAll('li');
    if (intensDaLista.length === 0) {
        mensagemListaVazia.style.display = 'block'
    } else {
        mensagemListaVazia.style.display = 'none'
    }
}
export default verificarListaVaiza;