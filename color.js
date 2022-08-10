// let colors = require('colors');

// const printRainbow = (string) => {
//     console.log(string.rainbow);
// }

// printRainbow(process.argv[2]);

var colors = require('colors');

const arcoiris =(texto) => {
    return texto.rainbow
}
console.log(arcoiris(process.argv[2]));