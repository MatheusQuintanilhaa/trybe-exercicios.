// exercício 1
// verificação && retorno p quando for verdadeiro
escopo && console.log('DENTRO DO IF');

// vericação ? retorno p quando for verdadeiro : retorno p quando for falso
const testingScope = (escopo) => escopo ? 'DENTRO DO IF' : 'DENTRO DO ELSE';

console.log(testingScope(false)); 