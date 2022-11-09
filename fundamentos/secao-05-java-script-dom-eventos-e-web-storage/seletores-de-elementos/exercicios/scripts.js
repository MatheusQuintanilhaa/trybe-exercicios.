/*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */
    //1
      const conectarTagP = document.getElementsByTagName('p')[1];

      conectarTagP.innerText = 'Formado na trybe e trabalhando.';
    //2
      const corDoQuadrado = document.getElementsByClassName('main-content')[0];

      function colorir() {
        corDoQuadrado.style.backgroundColor = 'rgb(76,164,109)';
      }
      colorir();
      //3
      const corDeFundo = document.getElementsByClassName('center-content')[0];

      function pintar() {
        corDeFundo.style.backgroundColor = 'white';
      }
      pintar();
      
      //4

      const paragrafo = document.getElementsByClassName('title')[0];

      function par() {
        paragrafo.innerText = 'Exercício - JavaScript';
      }
      par();

      //5
      
      const primeiroTexto = document.getElementsByTagName('p')[0];

      function text() {
        primeiroTexto.style.textTransform = 'Uppercase';
      }
      text();

      //6
      const exibir = document.getElementsByTagName('p');
      function exibicao(){
        for (let index = 0; index < exibir.length; index+= 1) {
          console.log(exibir[index]);
        }
      }
      exibicao();

