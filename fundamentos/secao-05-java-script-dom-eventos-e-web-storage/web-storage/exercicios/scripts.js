window.onload = function () {
  let array = [
    "Mudar cor de fundo",
    "Mudar cor do texto",
    "Tamanho da fonte",
    "Espaçamento de linhas",
    "Tipo de fonte",
  ];

  function button(array) {
    for (let index = 0; index < array.length; index += 1) {
      const localButton = document.querySelector("section");
      const createButton = document.createElement("button");
      createButton.innerHTML = array[index];
      localButton.appendChild(createButton);
      createButton.addEventListener("click", clickButton);
    }
  }
  function clickButton(event) {
    const capture = event.target.innerHTML;

    switch (capture) {
      case "Mudar cor de fundo":
        const body = document.getElementsByTagName("body")[0];

        let cor = "indigo";
        switch (body.style.backgroundColor) {
          case "indigo":
            cor = "red";
            break;
          case "red":
            cor = "indigo";
            break;

          default:
            break;
        }

        body.style.backgroundColor = cor;
        localStorage.setItem("corDeFundo", cor);
        break;
      case "Mudar cor do texto":
        for (let index = 0; index < 6; index += 1) {
          const corDoTexto = document.querySelectorAll(".fonteColor")[index];
          let cor = "red";
          switch (corDoTexto.style.color) {
            case "red":
              cor = "green";
              break;
            case "green":
              cor = "red";
              break;
            default:
              break;
          }
          corDoTexto.style.color = cor;
          localStorage.setItem("corDeTexto", cor);
        }
        break;
      case "Tamanho da fonte":
        for (let index = 0; index < 5; index += 1) {
          const tamanhoDaFonte = document.getElementsByTagName("p")[index];
          let fonte = "10px";
          switch (tamanhoDaFonte.style.fontSize) {
            case "10px":
              fonte = "50px";
              break;

            case "50px":
              fonte = "10px";
              break;
            default:
              break;
          }
          tamanhoDaFonte.style.fontSize = fonte;
          localStorage.setItem("tamanhoDaFonte", fonte);
        }
        break;
      case "Espaçamento de linhas":
        for (let index = 0; index < 6; index += 1) {
          const espacamento = document.getElementsByTagName("p")[index];
          let espaco = "";
          switch (espacamento.style.lineHeight) {
            case "":
              espaco = "1.5";
              break;
            case "1.5":
              espaco = "";
              break;
            default:
              break;
          }
          espacamento.style.lineHeight = espaco;
          localStorage.setItem("espacamento", espaco);
        }
        break;
      case "Tipo de fonte":
        for (let index = 0; index < 6; index += 1) {
          const tipoDaFonte = document.getElementsByTagName("p")[index];
          let f = "";
          switch (tipoDaFonte.style.fontFamily) {
            case "":
              f = "monospace";
              break;
            case "monospace":
              f = "";
              break;
            default:
              break;
          }
          tipoDaFonte.style.fontFamily = f;
          localStorage.setItem("tipoDaFonte", f);
        }
        default:
          break;
    }
}
//chamar funções:
button(array);
get();
}
function get() {
  let corDeFundo = localStorage.getItem("corDeFundo");
  if (corDeFundo) {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = corDeFundo;
  }
  for (let index = 0; index < 6; index += 1) {
    let corDeTexto = localStorage.getItem("corDeTexto");
    if (corDeTexto) {
      const corDoTexto = document.querySelectorAll(".fonteColor")[index];
      corDoTexto.style.color = corDeTexto;
    }
  }
  for (let index = 0; index < 5; index += 1) {
    let tamanhoDoTexto = localStorage.getItem("tamanhoDaFonte");
    if (tamanhoDoTexto) {
      const tamanhoDaPalavra = document.getElementsByTagName("p")[index];
      tamanhoDaPalavra.style.fontSize = tamanhoDoTexto;
    }
  }
  for (let index = 0; index < 5; index += 1) {
    let espaco = localStorage.getItem("espacamento");
    if (espaco) {
      const p = document.getElementsByTagName("p")[index];
      p.style.lineHeight = espaco;
    }
  }
  for (let index = 0; index < 5; index += 1) {
    let fonte = localStorage.getItem("tipoDaFonte");
    if (fonte) {
      const p = document.getElementsByTagName("p")[index];
      p.style.fontFamily = fonte;
    }
  }
}
