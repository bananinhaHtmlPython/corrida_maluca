//dom = document object manipulation
//document -> index.html (ou seja, se estivemos falando da DOM, sempre falamos sobre o index)
const carro1 = document.getElementById("carro1") //do documento, pegar elemento pelo id carro1
const carro2 = document.getElementById("carro2");// irá buscar pelo html todo para achar o id
//const carro 2 é igual a 
const botao1 = document.getElementById("botao1");
//a mesma coisa so que 2 em vez de 1
//misericórdia
const botao2 = document.getElementById("botao2");
const reiniciar = document.getElementById("reiniciar");
//Os alunos poderiam ser ótimos professores com as sujestões da linha 8, 7 e 5
const mensagem = document.getElementById("mensagem");
const chegada = document.querySelector(".chegada"); //ele irá buscar todo o documento que expecificar. Neste caso é a classe chegada (.chegada)
//query = consulta
//selector = seletor
///const = constante, valor não muda
let position1 = 0 //let pode mudar
let position2 = 0 //let pode mudar
let terminou = false //indicará se o jogo acabou (true) ou não (false)
//var -> escopo global
// let -> escopo local (Só pode ser vista de dentro)
//Ex: if(condição){
//  let nome
//}
// nome <- o nome não vai reconhecer
//
//let nome
//if()

function acelerar(jogador){ // os parâmetros são como ingredientes para ser feita a função. Neste caso, ée necessário um jogador para correr. Acelerar será uma função repetitiva.
    if(terminou) return; // se retornar vazio, o programa pausa. Como a variável é booleana, 
    // não será necessário expecificar mais sobre. Neste caso, If true = return.
    //  A função "terminou" irá verificar se o carrinho encostou na linha de chegada
    const limite = Math.max(0, chegada.offsetleft - carro1.offsetWidth) // estrutura: Math.max(tamanho mínimo, tamanho máximo)
    //o limite é a diferença don tamanho d carro e a distãncia da linha
    if (jogador === 1){// == : não difere número de texto, só valor ("1" e 1 seriam iguais).
    // Se usamos === seá algo mais preciso, restrijindo até mesmo o tipo dele para ser igual
        position1 = Math.min(position1 + 15, limite); //para evitar do carrinho atravessar a linha
        carro1.style.left = `${position1}px`//do elemento carro1, pegará do style o left e fazer concatenação (somar a cada tempo) 
        
        if(position1 >= limite){
            mensagem.textContent = "🏆 Jogador 1 venceu!" //textContent = 
            terminou = true;
        }
    }
    
    if (jogador === 2){// == : não difere número de texto, só valor ("1" e 1 seriam iguais).
    // Se usamos === seá algo mais preciso, restrijindo até mesmo o tipo dele para ser igual
        position2 = Math.min(position2 + 15, limite); //para evitar do carrinho atravessar a linha
        carro1.style.left = `${position2}px`//do elemento carro1, pegará do style o left e fazer concatenação (somar a cada tempo) 
        
        if(position2 >= limite){
            mensagem.textContent = "🏆 Jogador 2 venceu!" //textContent = 
            terminou = true;
        }
    }
}

botao1.addEventListener("click", function(){acelerar(1)});
botao2.addEventListener("click", function(){acelerar(2)});

document.addEventListener("keydown", function(evento){
    if(evento.repeat) return;//se a tecla clicar repetidamente, retornará vazio

    const tecla = evento.key.toLowerCase(); //todas as teclas que forem digitadas (letras) serão 

    if(tecla === "a"){
        acelerar(1);
    }

    if(tecla === "l"){
        acelerar(2)
    }
}) //keydown = quando a tecla baixa

reiniciar.addEventListener("click", function(){
    position1 =0;
    position2 = 0;
    terminou = false;

    carro1.style.left = "0px"
    carro1.style.left = "0px"

    mensagem.textContent = "Preparar, apontar, já!"
});

/*
para o turbo, será usada a mesma lógica do  
    position2 = Math.min(position2 + 15, limite); 
    carro1.style.left = `${position2}px` 
porém, mais diferente
*/

function turbo(){

}