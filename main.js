//função: define uma lista de ações que serão executadas quando a função for chamada. Palavra reservada para criar uma função em java

function insert(num) {//Inicio da função
    //variável é um espaço na memoria que armazena uma informação para uso posterior. Ao nomeá-la evite: n e letras maiúsculas no início, espaço entre palavras (use_ ou camelcase) e acentuação.
    //Captura o conteúdo atual exibido no elemento com id 'resultado' e armazena na variável 'número' 
    var numero = document.getElementById('resultado').innerHTML;
    //Atualiza o conteúdo do elemento 'resultado' concatenando o valor atual com o N ou o operador (+,-,/,*) passado no parâmetro num
    document.getElementById('resultado').innerHTML = numero + num;

}//FIm da função

//Função para limpar todo o conteúdo que aparece no visor (tag p  id=resultado)
function clean(){
    //Define que o conteúdo do elemento 'resultado' como um elemento de texto vazio, limpando a tela
    document.getElementById('resultado').innerHTML = "";
}
//Função para apagar o último caracter digitado
function del(){
    //Variável para armazenar a informação do visior (tag p)
    var resultado = document.getElementById('resultado').innerHTML;
    //Usa o método substring para remover o último caracter digitado na tela, atualizando o valor.0 método length retornará o tamanho da string, ou seja quantos elementos aparecem na tela.
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);

}
//Função 'calcular' irá avaliar a expressão da tela e realizar o calculo exibindo-o na tela
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    //Se o conteúdo da tela (tag p) não estiver vazio
    if(resultado){
        //Use a função eval() para avaliar a função matemática e retornar o resultado da opereção
        document.getElementById('resultado').
        innerHTML=eval(resultado);
    } //Senão, caso não haja nehum conteúdo no visor
    else{
        //Exibia uma mensagem de erro
        document.getElementById('resultado').
        innerHTML= 'IIIHH GAME OVER';

    }
}
document.addEventListener('keydown',function(event){
    //'Salva' a tecla pressionada
    var tecla = event.key
    if(/[0-9+\-*/]/.test(tecla)){
        insert(tecla);
    }
    else if(tecla == 'Enter'){
        calcular();
        }
        else if(tecla == 'Backspace'){
            del();
        }
        else if (tecla == 'Delete'){
            clean();
        }
    } //Fim da função
)//Fecha o bloco do evento
