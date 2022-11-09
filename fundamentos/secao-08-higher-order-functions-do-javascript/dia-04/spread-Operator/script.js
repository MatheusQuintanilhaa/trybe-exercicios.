// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Morango', 'Maracujá'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Paçoca', 'Leite em pó', 'Calda'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const ItensAdicionados = [...fruit, ...additional]
  return ItensAdicionados;
};

console.log(fruitSalad(specialFruit, additionalItens));