const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
for (let i = 1; i < oddsAndEvens.length; i += 1) {
  for (let i2 = 0; i2 < i; i2 += 1) {
    if (oddsAndEvens[i] < oddsAndEvens[i2]) {
        let size = oddsAndEvens[i];
        oddsAndEvens[i] = oddsAndEvens[i2];
        oddsAndEvens[i2] = size;
      }
    }
  }
  return oddsAndEvens;
};
console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);