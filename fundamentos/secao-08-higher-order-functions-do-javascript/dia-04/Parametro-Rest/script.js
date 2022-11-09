// Feita a desestruturação, podemos utilizar o spread operator para juntar os valores do array workDays com os do array weekend, colocando-os em um novo array chamado weekdays.


const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']




// As propriedades do objeto student não são nada descritivas, não é mesmo? Se fôssemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado… pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  const name = student.a;
  console.log(name); // Maria

  