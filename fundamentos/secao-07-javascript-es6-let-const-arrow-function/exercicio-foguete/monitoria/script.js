// https://fav.farm/

// recuperando botão
const btn = document.getElementById('btn-click');
// recuperando parágrafo
const p = document.getElementById('click-count');

// variável pedida no enunciado
let clickCount = 0;

// eventListener
btn.addEventListener('click', () => {
// https://www.w3schools.com/js/js_operators.asp
clickCount += 1;
clickCount % 2 === 0 ? p.style.color = 'blue' : p.style.color = 'pink';
p.innerHTML = `${clickCount} clicks`;
}) 