


  const obj2 = document.getElementById("foto");
  obj2.style.animation = "move 2s";
  const obj3 = document.getElementById("port");
  obj3.style.animation = "move 2s";
  const obj4 = document.getElementById("nome");
  obj4.style.animation = "move 3s";
  const obj5 = document.getElementById("sobrenome");
  obj5.style.animation = "move 4s";
  const obj6 = document.getElementById("subtitulo");
  obj6.style.animation = "move 6s";

function Notas() {
  const mensagem = document.createElement("p");
  mensagem.id = "info";
  const body = document.querySelector("body");
  body.appendChild(mensagem);
  const info = document.getElementById("info");
  if (window.innerWidth >= 1080) {
    info.style.width = "500px";
    info.style.height = "300px";
    info.style.position = "fixed";
    info.style.zIndex = "10";
    info.style.margin = "200px 0px 0px 800px";
    info.style.backgroundColor = "white";
    info.style.borderRadius = "20px";
    info.style.textAlign = "justify";
    info.style.fontSize = "20px";
    info.style.justifyContent = "center";
    info.style.alignItems = "center";
    info.style.display = "flex";
    info.style.border = "solid 2px black";
    info.innerHTML = "Este projeto foi desenvolvido para armazenar lembretes sobre acontecimentos relevantes do dia a dia. Ele permite adicionar textos, datas e fotos, facilitando a organização e o registro de informações importantes. O projeto foi construído utilizando HTML, CSS e JavaScript. CLIQUE NA IMAGEM para ir ate o repositorio.";
  }
}

function Zoo() {
  const mensagem = document.createElement("p");
  mensagem.id = "info";
  const body = document.querySelector("body");
  body.appendChild(mensagem);
  const info = document.getElementById("info");
  if (window.innerWidth >= 1080) {
    info.style.width = "500px";
    info.style.height = "300px";
    info.style.position = "fixed";
    info.style.zIndex = "10";
    info.style.margin = "200px 0px 0px 800px";
    info.style.backgroundColor = "white";
    info.style.borderRadius = "20px";
    info.style.textAlign = "justify";
    info.style.fontSize = "20px";
    info.style.justifyContent = "center";
    info.style.alignItems = "center";
    info.style.display = "flex";
    info.style.border = "solid 2px black";
    info.innerHTML = "Após participar do desafio DB , decidi melhorar um pouco o visual da minha solução, na criação de um sistema de separação de animais por tipo e habitat ideal. Utilizei o app Code Studio (grande aliado para quem não tem um pc). Recomendo fortemente, rodar o arquivo html através do app. CLIQUE NA IMAGEM para ir ate o repositorio.";
  }
}

function Crono() {
  const mensagem = document.createElement("p");
  mensagem.id = "info";
  const body = document.querySelector("body");
  body.appendChild(mensagem);
  const info = document.getElementById("info");
  if (window.innerWidth >= 1080) {
    info.style.width = "500px";
    info.style.height = "300px";
    info.style.position = "fixed";
    info.style.zIndex = "10";
    info.style.margin = "200px 0px 0px 800px";
    info.style.backgroundColor = "white";
    info.style.borderRadius = "20px";
    info.style.textAlign = "justify";
    info.style.fontSize = "20px";
    info.style.justifyContent = "center";
    info.style.alignItems = "center";
    info.style.display = "flex";
    info.style.border = "solid 2px black";
    info.innerHTML = "O projeto foi totalmemte construido com html, css e js. Se trata de um relogio cok função cronômetro (ou vice-versa rsrs).";
  }
}

function Remover() {
  for (i=0; i<4; i++) {
    document.getElementsByName("foto")[i].style.borderBottom = "0px";
    document.getElementsByName("foto")[i].style.borderLeft = "0px";
    document.getElementsByName("foto")[i].style.borderRight = "0px";
    document.getElementsByName("foto2")[i].style.borderBottom = "0px";
    document.getElementsByName("foto2")[i].style.borderLeft = "0px";
    document.getElementsByName("foto2")[i].style.borderRight = "0px";
    document.getElementsByName("foto3")[i].style.borderBottom = "0px";
    document.getElementsByName("foto3")[i].style.borderLeft = "0px";
    document.getElementsByName("foto3")[i].style.borderRight = "0px";
  }
  
  document.getElementById("info").remove();
}

function destacar() {
  if (window.innerWidth >= 1080) {
    for (i=0; i<4; i++) {
      document.getElementsByName("foto")[i].style.borderBottom = "solid 4px black";
      document.getElementsByName("foto")[i].style.borderLeft = "solid 4px black";
      document.getElementsByName("foto")[i].style.borderRight = "solid 4px black";
      document.getElementsByName("foto2")[i].style.borderBottom = "solid 4px black";
      document.getElementsByName("foto2")[i].style.borderLeft = "solid 4px black";
      document.getElementsByName("foto2")[i].style.borderRight = "solid 4px black";
      document.getElementsByName("foto3")[i].style.borderBottom = "solid 4px black";
      document.getElementsByName("foto3")[i].style.borderLeft = "solid 4px black";
      document.getElementsByName("foto3")[i].style.borderRight = "solid 4px black";
    }
  }
}

function inicio() {
    var inicio = document.getElementById("inicio");
    inicio.style.backgroundColor = "gray";
    setTimeout(() => {
      inicio.style.backgroundColor = "whitesmoke";
    }, 100)
    
    window.scroll({
      top: 60,
      left: 0,
      behavior: "smooth",
    })
}


function sobre() {
  
  if (window.innerWidth >= 1080) {
    var selecionar = document.getElementById("sobre");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 1450,
      left: 0,
      behavior: "smooth",
    })
  }else {
    var selecionar = document.getElementById("sobre");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 1850,
      left: 0,
      behavior: "smooth",
    })
  }
}

function estudo() {
  if (window.innerWidth >= 1080) {
    var selecionar = document.getElementById("formacao");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 2400,
      left: 0,
      behavior: "smooth",
    })
  }else {
    var selecionar = document.getElementById("formacao");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 3900,
      left: 0,
      behavior: "smooth",
    })
  }
}

function trabalho() {
  if (window.innerWidth >= 1080) {
    var selecionar = document.getElementById("xp");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 3500,
      left: 0,
      behavior: "smooth",
    })
  }else {
    var selecionar = document.getElementById("xp");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 5900,
      left: 0,
      behavior: "smooth",
    })
  }
   
}

function projetos() {
  if (window.innerWidth >= 1080) {
    var selecionar = document.getElementById("PROJETOS");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 5050,
      left: 0,
      behavior: "smooth",
    })
  }else {
    var selecionar = document.getElementById("PROJETOS");
    selecionar.style.backgroundColor = "gray";
    setTimeout(() => {
      selecionar.style.backgroundColor = "whitesmoke";
    }, 100)
    window.scroll({
      top: 8000,
      left: 0,
      behavior: "smooth",
    })
  }
    
}

function menu2() {
    var a = document.getElementById("botao");
    a.remove();
    document.getElementById("menu").innerHTML = '<button id="fechar" onclick="fechar()">x</button><button id="inicio" onclick="inicio()">Inicio</button><button id="sobre" onclick="sobre()">Sobre mim</button><button id="formacao" onclick="estudo()">Formação</button><button id="xp" onclick="trabalho()">Experiência</button><button id="PROJETOS" onclick="projetos()">Projetos</button>';
    var body2 = document.getElementById('menu2');
    var fechar = document.getElementById("fechar");
    var inicio = document.getElementById("inicio");
    var eu = document.getElementById("sobre");
    var formacao = document.getElementById("formacao");
    var xp = document.getElementById("xp");
    var projetos = document.getElementById("PROJETOS");
    var tela = window.innerWidth;
    var tamanho = 1080;
    body2.style.width = '300px';
    body2.style.height = '100px';
    body2.style.marginTop = '10px';
    body2.style.backgroundColor = 'whitesmoke';
  
        
   if (tela <= tamanho) {
        fechar.style.width = tela/2+"px";
        fechar.style.height = '100px';
        fechar.style.textAlign = 'right';
        fechar.style.borderTop = 'solid 2px cornflowerblue';
        fechar.style.borderLeft = 'solid 2px cornflowerblue';
        fechar.style.borderRight = 'solid 2px cornflowerblue';
        fechar.style.borderBottom = 'none';
        fechar.style.backgroundColor = 'whitesmoke';
        fechar.style.animation = 'move2 1s';
        fechar.style.fontSize = '40px';
        fechar.style.display = 'block';
        fechar.style.fontWeight = 'bold';
    
    
        inicio.style.width = tela/2+"px";
        inicio.style.height = '100px';
        inicio.style.borderTop = 'none';
        inicio.style.borderLeft = 'solid 2px cornflowerblue';
        inicio.style.borderRight = 'solid 2px cornflowerblue';
        inicio.style.borderBottom = 'none';
        inicio.style.display = 'block';
        inicio.style.backgroundColor = 'whitesmoke';
        inicio.style.animation = 'move2 1s';
        inicio.style.fontSize = '40px';
        inicio.style.fontWeight = 'bold';
    
    
        eu.style.width = tela/2+"px";
        eu.style.height = '100px';
        eu.style.animation = 'move2 1s';
        eu.style.backgroundColor = 'whitesmoke';
        eu.style.borderTop = 'none';
        eu.style.borderLeft = 'solid 2px cornflowerblue';
        eu.style.borderRight = 'solid 2px cornflowerblue';
        eu.style.borderBottom = 'none';
        eu.style.display = 'block';
        eu.style.fontSize = '40px';
        eu.style.fontWeight = 'bold';
    
    
        formacao.style.width = tela/2+"px";
        formacao.style.height = '100px';
        formacao.style.borderTop = 'none';
        formacao.style.borderLeft = 'solid 2px cornflowerblue';
        formacao.style.borderRight = 'solid 2px cornflowerblue';
        formacao.style.borderBottom = 'none';
        formacao.style.backgroundColor = 'whitesmoke';
        formacao.style.animation = 'move2 1s';
        formacao.style.fontSize = '40px';
        formacao.style.fontWeight = 'bold';
        
    
        xp.style.width = tela/2+"px";
        xp.style.height = '100px';
        xp.style.borderTop = 'none';
        xp.style.borderLeft = 'solid 2px cornflowerblue';
        xp.style.borderRight = 'solid 2px cornflowerblue';
        xp.style.borderBottom = 'none';
        xp.style.display = 'block';
        xp.style.backgroundColor = 'whitesmoke';
        xp.style.animation = 'move2 1s';
        xp.style.fontSize = '40px';
        xp.style.fontWeight = 'bold';
  
        projetos.style.width = tela/2+"px";
        projetos.style.height = '100px';
        projetos.style.borderTop = 'none';
        projetos.style.borderLeft = 'solid 2px cornflowerblue';
        projetos.style.borderRight = 'solid 2px cornflowerblue';
        projetos.style.borderBottom = 'solid 2px cornflowerblue';
        projetos.style.display = 'block';
        projetos.style.backgroundColor = 'whitesmoke';
        projetos.style.animation = 'move2 1s';
        projetos.style.fontSize = '40px';
        projetos.style.fontWeight = 'bold';
      }
   else {
        fechar.style.width = tela+"px";
        fechar.style.height = '45px';
        fechar.style.textAlign = 'justify';
        fechar.style.borderTop = 'solid 2px cornflowerblue';
        fechar.style.borderLeft = 'solid 2px cornflowerblue';
        fechar.style.borderRight = 'solid 2px cornflowerblue';
        fechar.style.borderBottom = 'none';
        fechar.style.backgroundColor = 'whitesmoke';
        fechar.style.animation = 'move6 1s';
        fechar.style.fontSize = '40px';
        fechar.style.float = 'left';

    
    
        inicio.style.width = tela+"px";
        inicio.style.height = '55px';
        inicio.style.borderTop = 'none';
        inicio.style.borderLeft = 'solid 2px cornflowerblue';
        inicio.style.borderRight = 'solid 2px cornflowerblue';
        inicio.style.borderBottom = 'none';
        inicio.style.display = 'block';
        inicio.style.backgroundColor = 'whitesmoke';
        inicio.style.animation = 'move6 1s';
        inicio.style.fontSize = '40px';
    
    
        eu.style.width = tela+"px";
        eu.style.height = '55px';
        eu.style.animation = 'move6 1s';
        eu.style.backgroundColor = 'whitesmoke';
        eu.style.borderTop = 'none';
        eu.style.borderLeft = 'solid 2px cornflowerblue';
        eu.style.borderRight = 'solid 2px cornflowerblue';
        eu.style.borderBottom = 'none';
        eu.style.display = 'block';
        eu.style.fontSize = '40px';
    
    
        formacao.style.width = tela+"px";
        formacao.style.height = '55px';
        formacao.style.borderTop = 'none';
        formacao.style.borderLeft = 'solid 2px cornflowerblue';
        formacao.style.borderRight = 'solid 2px cornflowerblue';
        formacao.style.borderBottom = 'none';
        formacao.style.backgroundColor = 'whitesmoke';
        formacao.style.animation = 'move6 1s';
        formacao.style.fontSize = '40px';
        
    
        xp.style.width = tela+"px";
        xp.style.height = '55px';
        xp.style.borderTop = 'none';
        xp.style.borderLeft = 'solid 2px cornflowerblue';
        xp.style.borderRight = 'solid 2px cornflowerblue';
        xp.style.borderBottom = 'none';
        xp.style.display = 'block';
        xp.style.backgroundColor = 'whitesmoke';
        xp.style.animation = 'move6 1s';
        xp.style.fontSize = '40px';
  
        projetos.style.width = tela+"px";
        projetos.style.height = '55px';
        projetos.style.borderTop = 'none';
        projetos.style.borderLeft = 'solid 2px cornflowerblue';
        projetos.style.borderRight = 'solid 2px cornflowerblue';
        projetos.style.borderBottom = 'solid 2px cornflowerblue';
        projetos.style.display = 'block';
        projetos.style.backgroundColor = 'whitesmoke';
        projetos.style.animation = 'move6 1s';
        projetos.style.fontSize = '40px'; 
      }
 
}

function fechar() {
   
    var fechar = document.getElementById("fechar");
    var inicio = document.querySelector("#inicio");
    var eu = document.getElementById("sobre");
    var formacao = document.getElementById("formacao");
    var xp = document.getElementById("xp");
    var projetos = document.getElementById("PROJETOS");
    var body2 = document.getElementById('menu2');
    var tela = window.innerWidth;
    var tamanho = 900;

   if (tela <= tamanho) {
        fechar.style.backgroundColor = "gray";
        setTimeout(() => {
          fechar.style.animation = 'move3 1s'
          inicio.style.animation = 'move3 1s';
          eu.style.animation = 'move3 1s';
          formacao.style.animation = 'move3 1s';
          xp.style.animation = 'move3 1s';
          projetos.style.animation = 'move3 1s';
        }, 200);

        setTimeout(() => {
          fechar.innerText = '';
          inicio.innerText = '';
          eu.innerText = '';
          formacao.innerText = '';
          xp.innerText = '';
          projetos.innerText = '';
          body2.style.width = '';
          body2.style.height = '';
          body2.style.marginTop = '';
          body2.style.backgroundColor = '';
        }, 400);
   }
   else {
        fechar.style.backgroundColor = "gray";
        setTimeout(() => {
          fechar.style.animation = 'move5 1s'
          inicio.style.animation = 'move5 1s';
          eu.style.animation = 'move5 1s';
          formacao.style.animation = 'move5 1s';
          xp.style.animation = 'move5 1s';
          projetos.style.animation = 'move5 1s';
        }, 200);
        setTimeout(() => {
          fechar.innerText = '';
          inicio.innerText = '';
          eu.innerText = '';
          formacao.innerText = '';
          xp.innerText = '';
          projetos.innerText = '';
          body2.style.width = '';
          body2.style.height = '';
          body2.style.marginTop = '';
          body2.style.backgroundColor = '';
        }, 400);
    
        }
 
    setTimeout(function() {
        document.getElementById("menu").innerHTML = '<button id="botao" onclick="menu2()"></button>';
        var botao = document.getElementById("botao");
        botao.style.animation = 'move4 1s';
    }, 1000);
    
}
