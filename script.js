

function inicio() {
    window.scroll({
      top: 60,
      left: 0,
      behavior: "smooth",
    })
}


function sobre() {
    window.scroll({
      top: 1250,
      left: 0,
      behavior: "smooth",
    })
}

function estudo() {
    window.scroll({
      top: 2720,
      left: 0,
      behavior: "smooth",
    })
}

function trabalho() {
    window.scroll({
      top: 3850,
      left: 0,
      behavior: "smooth",
    })
}

function projetos() {
    window.scroll({
      top: 5050,
      left: 0,
      behavior: "smooth",
    })
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
    var tamanho = 900;
    body2.style.width = '300px';
    body2.style.marginTop = '50px';
    body2.style.backgroundColor = 'whitesmoke';
        
   if (tela <= tamanho) {
        fechar.style.width = '420px';
        fechar.style.height = '35px';
        fechar.style.textAlign = 'justify';
        fechar.style.borderTop = 'solid 2px cornflowerblue';
        fechar.style.borderLeft = 'solid 2px cornflowerblue';
        fechar.style.borderRight = 'solid 2px cornflowerblue';
        fechar.style.borderBottom = 'none';
        fechar.style.backgroundColor = 'whitesmoke';
        fechar.style.animation = 'move2 1s';
        fechar.style.fontSize = '25px';
    
    
        inicio.style.width = '420px';
        inicio.style.height = '35px';
        inicio.style.borderTop = 'none';
        inicio.style.borderLeft = 'solid 2px cornflowerblue';
        inicio.style.borderRight = 'solid 2px cornflowerblue';
        inicio.style.borderBottom = 'none';
        inicio.style.display = 'block';
        inicio.style.backgroundColor = 'whitesmoke';
        inicio.style.animation = 'move2 1s';
        inicio.style.fontSize = '25px';
    
    
        eu.style.width = '420px';
        eu.style.height = '35px';
        eu.style.animation = 'move2 1s';
        eu.style.backgroundColor = 'whitesmoke';
        eu.style.borderTop = 'none';
        eu.style.borderLeft = 'solid 2px cornflowerblue';
        eu.style.borderRight = 'solid 2px cornflowerblue';
        eu.style.borderBottom = 'none';
        eu.style.display = 'block';
        eu.style.fontSize = '25px';
    
    
        formacao.style.width = '420px';
        formacao.style.height = '35px';
        formacao.style.borderTop = 'none';
        formacao.style.borderLeft = 'solid 2px cornflowerblue';
        formacao.style.borderRight = 'solid 2px cornflowerblue';
        formacao.style.borderBottom = 'none';
        formacao.style.display = 'block';
        formacao.style.backgroundColor = 'whitesmoke';
        formacao.style.animation = 'move2 1s';
        formacao.style.fontSize = '25px';
        
    
        xp.style.width = '420px';
        xp.style.height = '35px';
        xp.style.borderTop = 'none';
        xp.style.borderLeft = 'solid 2px cornflowerblue';
        xp.style.borderRight = 'solid 2px cornflowerblue';
        xp.style.borderBottom = 'none';
        xp.style.display = 'block';
        xp.style.backgroundColor = 'whitesmoke';
        xp.style.animation = 'move2 1s';
        xp.style.fontSize = '25px';
  
        projetos.style.width = '420px';
        projetos.style.height = '35px';
        projetos.style.borderTop = 'none';
        projetos.style.borderLeft = 'solid 2px cornflowerblue';
        projetos.style.borderRight = 'solid 2px cornflowerblue';
        projetos.style.borderBottom = 'solid 2px cornflowerblue';
        projetos.style.display = 'block';
        projetos.style.backgroundColor = 'whitesmoke';
        projetos.style.animation = 'move2 1s';
        projetos.style.fontSize = '25px';
      }
   else {
        fechar.style.width = '1570px';
        fechar.style.height = '35px';
        fechar.style.textAlign = 'justify';
        fechar.style.borderTop = 'solid 2px cornflowerblue';
        fechar.style.borderLeft = 'solid 2px cornflowerblue';
        fechar.style.borderRight = 'solid 2px cornflowerblue';
        fechar.style.borderBottom = 'none';
        fechar.style.backgroundColor = 'whitesmoke';
        fechar.style.animation = 'move5 1s';
        fechar.style.fontSize = '25px';
    
    
        inicio.style.width = '1070px';
        inicio.style.height = '35px';
        inicio.style.borderTop = 'none';
        inicio.style.borderLeft = 'solid 2px cornflowerblue';
        inicio.style.borderRight = 'solid 2px cornflowerblue';
        inicio.style.borderBottom = 'none';
        inicio.style.display = 'block';
        inicio.style.backgroundColor = 'whitesmoke';
        inicio.style.animation = 'move5 1s';
        inicio.style.fontSize = '25px';
    
    
        eu.style.width = '1070px';
        eu.style.height = '35px';
        eu.style.animation = 'move5 1s';
        eu.style.backgroundColor = 'whitesmoke';
        eu.style.borderTop = 'none';
        eu.style.borderLeft = 'solid 2px cornflowerblue';
        eu.style.borderRight = 'solid 2px cornflowerblue';
        eu.style.borderBottom = 'none';
        eu.style.display = 'block';
        eu.style.fontSize = '25px';
    
    
        formacao.style.width = '1070px';
        formacao.style.height = '35px';
        formacao.style.borderTop = 'none';
        formacao.style.borderLeft = 'solid 2px cornflowerblue';
        formacao.style.borderRight = 'solid 2px cornflowerblue';
        formacao.style.borderBottom = 'none';
        formacao.style.display = 'block';
        formacao.style.backgroundColor = 'whitesmoke';
        formacao.style.animation = 'move5 1s';
        formacao.style.fontSize = '25px';
        
    
        xp.style.width = '1070px';
        xp.style.height = '35px';
        xp.style.borderTop = 'none';
        xp.style.borderLeft = 'solid 2px cornflowerblue';
        xp.style.borderRight = 'solid 2px cornflowerblue';
        xp.style.borderBottom = 'none';
        xp.style.display = 'block';
        xp.style.backgroundColor = 'whitesmoke';
        xp.style.animation = 'move5 1s';
        xp.style.fontSize = '25px';
  
        projetos.style.width = '1070px';
        projetos.style.height = '35px';
        projetos.style.borderTop = 'none';
        projetos.style.borderLeft = 'solid 2px cornflowerblue';
        projetos.style.borderRight = 'solid 2px cornflowerblue';
        projetos.style.borderBottom = 'solid 2px cornflowerblue';
        projetos.style.display = 'block';
        projetos.style.backgroundColor = 'whitesmoke';
        projetos.style.animation = 'move5 1s';
        projetos.style.fontSize = '25px'; 
        }
 
}

function fechar() {
   
    var fechar = document.getElementById("fechar");
    var inicio = document.querySelector("#inicio");
    var eu = document.getElementById("sobre");
    var formacao = document.getElementById("formacao");
    var xp = document.getElementById("xp");
    var projetos = document.getElementById("PROJETOS");
    var tela = window.innerWidth;
    var tamanho = 900;

   if (tela <= tamanho) {
        fechar.style.animation = 'move3 1s';
        inicio.style.animation = 'move3 1s';
        eu.style.animation = 'move3 1s';
        formacao.style.animation = 'move3 1s';
        xp.style.animation = 'move3 1s';
        projetos.style.animation = 'move3 1s';
        fechar.innerText = '.';
        inicio.innerText = '';
        eu.innerText = '';
        formacao.innerText = '';
        xp.innerText = '';
        projetos.innerText = '';        
        }
   else {
        fechar.style.animation = 'move6 1s';
        inicio.style.animation = 'move6 1s';
        eu.style.animation = 'move6 1s';
        formacao.style.animation = 'move6 1s';
        xp.style.animation = 'move6 1s';
        projetos.style.animation = 'move6 1s';
        fechar.innerText = '.';
        inicio.innerText = '';
        eu.innerText = '';
        formacao.innerText = '';
        xp.innerText = '';
        projetos.innerText = '';   
        }
 
    setTimeout(function() {
        document.getElementById("menu").innerHTML = '<button id="botao" onclick="menu2()">MENU</button>';
        var botao = document.getElementById("botao");
        botao.style.animation = 'move4 1s';
    }, 1000);
    
}