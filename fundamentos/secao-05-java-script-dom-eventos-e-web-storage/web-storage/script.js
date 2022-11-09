// localStorage - salva os dados sem data de expiração. Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.
/*
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear(); // limpa todas as entradas salvas em localStorage
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0 */

// sessionStorage - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba (tab) ou o navegador (browser).

console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0

//OBS: Tanto o localStorage quanto o sessionStorage armazenam dados no formato chave e valor e os valores salvos serão sempre no formato string.

/*
const myObj = {
    name: 'Link',
    age: 20,
  };
  
   Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.
  
  localStorage.setItem('myData', JSON.stringify(myObj));
  
   Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.
  
   Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
  
  const recoveredObject = JSON.parse(localStorage.getItem('myData'));
  
   Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.
  
  console.log(recoveredObject); // { name: 'Link', age: 20 }
  */

  //Relembrando 🧠: Ao salvar strings no localStorage, não é necessário utilizar o JSON.stringify e nem o JSON.parse para recuperar as informações. Combinado?


//Veja agora mais exemplos do que pode ser salvo no localStorage ou sessionStorage:

/*
let organization = {
    name: 'trybe',
    since: 2019,
  };
  
  // A variável 'storage' pode ser localStorage ou sessionStorage
  let storage = localStorage;
  
  storage.setItem('escola', JSON.stringify(organization));
  let org = JSON.parse(storage.getItem('escola'));
  console.log(org); // { name: 'trybe', since: 2019 }
  
  let classes = ['2019/set', '2019/oct'];
  storage.setItem('turmas', JSON.stringify(classes));
  let cls = JSON.parse(storage.getItem('turmas'));
  console.log(cls); // ['2019/set', '2019/oct'] 
  
  */

  //Exemplo de utilização:

//Para os dois próximos exemplos, use separadamente cada script.

//index.html

/*
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo WebStorage</title>
</head>
<body>
  <header>
    <h1>Diferenças de armazenamento entre LocalStorage e WebStorage</h1>
  </header>
  <main>
    <section>
      <h2>Frases armazenadas</h2>
      <input type="text" id="phrases-input" />
      <button id="add-button">Adicionar frase</button>
      <div>
        <ul id="phrases-list">
        </ul>
      </div>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html> 

*/

//O script abaixo exemplifica um dos usos do localStorage. Recomendamos tirar um tempo para analisar bem cada função.

//Um bom ponto de atenção para decidir quando você deve usar um ou outro é perguntar a si mesmo sobre a importância da permanência da informação que você vai armazenar.

//script.js

const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};

//E o próximo script tem a mesma funcionalidade que o anterior. Mas a diferença se dá no momento em que você fecha a sua aba ou o seu navegador. Nós encorajamos você a experimentar por si só e ver o que acontece.

//script.js
/*
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

button.addEventListener('click', addPhraseToSessionStorage); 
*/