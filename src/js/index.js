//Obj-1: Passo 1  -->  Definindo [botoes] como [constante] da classe [.botao]
const botoes = document.querySelectorAll('.botao');

//Obj-2: Passo1  -->  Definindo a [const] como [.personagens]
const personagens = document.querySelectorAll('.personagem')

//Obj-1: Passo 2  -->  Percorrendo a lista de [botoes] para ver qual foi clicado e..
botoes.forEach((botao, indice) => { //Obj-2: [indice] sera a posiçao do Array(Lista) de personagem
    botao.addEventListener("click", () => { //... dando um classe ao [botao] quando for clicado
        
        desselecionarBotao(); //Obj-1: Passo 3  -->  ver se ja existe um botao selecionado antes
        desselecionarPersonagem(); //Obj-2: Passo 3  -->  ver se ja existe um personagem selecionado antes

        botao.classList.add("selecionado"); //Add [.selecionado]
        personagens[indice].classList.add("selecionado");//Obj-2: Passo 2  -->  adicionar o [selecionado] no [personagem]


        function desselecionarPersonagem() {
            const personagemSelecionado = document.querySelector(".personagem.selecionado");
            personagemSelecionado.classList.remove("selecionado");
        }

        function desselecionarBotao() {
            const botaoSelecionado = document.querySelector(".botao.selecionado"); //Const do Button ja Selecionado
            botaoSelecionado.classList.remove("selecionado");//Remove o Button ja [.selecionado]
        }
    });
});
