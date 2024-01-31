//const { getEffectiveConstraintOfTypeParameter } = require("typescript");

const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')
const nomeCor = document.getElementById('nome-cor-selecionada')
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2= document.getElementById('2-imagem-miniatura')

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};
const azulInverno = {
    nome: 'Azul-inverno',
    pasta:'imagens-azul-inverno'
};
const meiaNoite = {
    nome: 'Meia-noite',
    pasta:'imagens-meia-noite'
};
const estelar = {
    nome:'Estelar',
    pasta:'imagens-estelar'
};
const rosaClaro = {
    nome:'rosaClaro',
    pasta: 'imagens-rosa-claro'
};
const opcoesDeCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro]
const opcoesTamanho = ['41 mm','45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);//chama o caracter
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'

}

function trocarTamanho(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesDeCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado]
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){

        imagemVisualizacao.classList.add('caixa-pequena')
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }

}
function trocarCor(){
   const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
   corSelecionada = idOpcaoSelecionada.charAt(0);
   tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesDeCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado]

   nomeCor.innerText = 'Cor -' + opcoesDeCores[corSelecionada].nome

   miniaturaImagem0.src = './imagens/opcoes-cores/'+ opcoesDeCores[corSelecionada].pasta + '/imagem-0.jpeg'
   miniaturaImagem1.src = './imagens/opcoes-cores/'+ opcoesDeCores[corSelecionada].pasta + '/imagem-1.jpeg'
   miniaturaImagem2.src = './imagens/opcoes-cores/'+ opcoesDeCores[corSelecionada].pasta + '/imagem-2.jpeg'

   imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}