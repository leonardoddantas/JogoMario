const mario = document.querySelector(".mario"); //O querySelector pegar algum elemento, seja por class (".nomeclass") seja por id ("#nomeid") ele deve ser usado no lugar de getElmentBy
//Ele também pega a tag ("p") mas nesse caso vai pegar apenas o primeiro p de cima para baixo no html se tiver mais de um, caso queira selecionar todos faço isso querySelectoAll("p")
const pipe = document.querySelector("#pipe");
function jump() {
    mario.classList.add('jump'); //o classList retorna muitas coisa que podermos fazer mas o classList.add("") adiciona a class jump criada lá no css no elemento mario
    setTimeout(function() { //o setTimeout cria ações no softawe que é executada depois de um tempo ou de tempo em tempo
        mario.classList.remove('jump'); //Remove a class jump de mario
    }, 1000);
}

const loop = setInterval(() => { //o setInterval cria ações no softawe que é executada depois de um tempo ou de tempo em tempo
    const pipePosition = pipe.offsetLeft; //pegar o letf do pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", ""); //O mais serve como um number(), ele converte para intiro, O getComputedStyle() serve para pegar o valor
    //de um elemento no css nesse exemplo estou pegando o bottom do mario. O replace receber duas string e trocar a primeira pela segunda, marioPositiom recebe uma string com px, ex:120px quando 
    //passo o px e depois nada replace("px" "") quero trocar o px por nada. Posso usar isso de varias formas, posso trocar uma string px por vh por exemplo
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = '120px';
        mario.style.animation = 'none';
        mario.style.bottom = '90px';
        mario.src = "img/game-over.png"
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
        clearInterval(loop); //serve para dar um fim em setInterval()
    }
}, 10);
document.addEventListener('keydown', jump); //o elemento.addEventListener("evento", função) é a mesma coisa que você criar uma função js e la no html chamar a função atraves de um onclick
//Aqui você faz assim se elemento se você selecionou o elemento e deu o nome de div por exemplo fica assim div.addEventListener("click", nomedafunção), isso muito mais bonito do que escrever no html
//O evento keydown é ativada quando eu tecla é precionada temos também o keyup que é ativado quando a tecla volta ao normal