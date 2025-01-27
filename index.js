const inputItem = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');

const botaoAdicionar = document.getElementById('adicionar-item');
let contador = 0;

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (inputItem.value === '') {
        alert('Por favor, insira um item!');
        return;
    }
    
    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');
    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox';
    inputCheckBox.id = 'checkbox-' + contador++;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;
    
    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);


    const diaDaSemana = new Date ().toLocaleDateString('pt-BR', {
        weekday: 'long'
    });
    const data = new Date().toLocaleDateString('pt-BR')
    const hora = new Date().toLocaleTimeString('pt-BT', {
        hour: 'numeric',
        minute: 'numeric'
    })
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');
    
    itemDaLista.appendChild(itemData);

    listaDeCompras.appendChild(itemDaLista);
})

