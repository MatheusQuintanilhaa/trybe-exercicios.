function palindromo(string) {
    const stringReverse = string.split('').reverse().join('');

    if (string === stringReverse) {
        return true;
    } else {
        return false;
    }

}

console.log(palindromo('arara'));