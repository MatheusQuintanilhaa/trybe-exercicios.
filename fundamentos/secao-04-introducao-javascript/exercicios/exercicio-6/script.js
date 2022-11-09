let xadrez = 'Rei';

switch (xadrez.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Uma casa apenas para qualquer direção.');
        break;
    case 'Dama':
    console.log('Pode mover-se para qualquer direção, quantas casas quiser desde que estejam livres');
    break;

    case 'Torre':
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal.');
    break;

    case 'Bispo':
    console.log('Move-se na diagonal, quantas casas quiser.');
    break;

    case 'Cavalo':
    console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas.');
    break;

    default:
    console.log('Peça inválida.');
    break;
    }





