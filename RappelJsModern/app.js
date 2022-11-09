"use stric"

// const add = (a,b) => {
//     return a + b;
// };

// SPREAD & REST

// SPREAD OPERATOR
const arr = [1,2,3];

// ICI LES "..." ( SPREAD OPERATOR) SERVENT A AFFICHER LE TABLEAU EN ENTIER SANS INDEX
console.log(...arr);

const myObj = {
    a:1,
    b:2,
    c:3
}

const myObj2 = {
    ...myObj,
    d:4,
}

console.log(myObj2);

// REST OPERATOR

// "..."nom du parametre"" = REST = PREND TOUT LES ARGUMENTS ET LES METS SOUS FORME D'UN TABLEAU
function add(...args) {
    console.log(args);
    let result = 0;
    for (const arg of args) {
        result += arg;
    }
    return result;
}
console.log(add(2,20,50,900));