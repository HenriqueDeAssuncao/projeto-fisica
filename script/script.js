let hamburguer = document.getElementById('hamburguer');
let mostrarMenu = document.getElementById('mostrarMenu');
let fecharMenu = document.getElementById('fecharMenu');

let setaBaixo = document.getElementById('setaBaixo');
let setaCima = document.getElementById('setaCima');
let recursos = document.getElementById('mostrarRecursos')


function slideMenu() {
    mostrarMenu.style.display = 'block';
    hamburguer.style.display = 'none';
    fecharMenu.style.display = 'block';
}

function slideFecharMenu() {
    mostrarMenu.style.display = 'none';
    hamburguer.style.display = 'block';
    fecharMenu.style.display = 'none';
}

function slideSetaBaixo() {
    setaBaixo.style.display = 'none';
    setaCima.style.display = 'block';
    recursos.style.display = 'block';
}

function slideSetaCima() {
    setaBaixo.style.display = 'block';
    setaCima.style.display = 'none';
    recursos.style.display = 'none';
}