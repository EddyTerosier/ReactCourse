"use stric";

// const add = (a,b) => {
//     return a + b;
// };

// SPREAD & REST

// SPREAD OPERATOR
// const arr = [1, 2, 3];

// ICI LES "..." ( SPREAD OPERATOR) SERVENT A AFFICHER LE TABLEAU EN ENTIER SANS INDEX
// console.log(...arr);

// const myObj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const myObj2 = {
//   ...myObj,
//   d: 4,
// };

// console.log(myObj2);

// // REST OPERATOR

// // "..."nom du parametre"" = REST = PREND TOUT LES ARGUMENTS ET LES METS SOUS FORME D'UN TABLEAU
// // function add(...args) {
// //     console.log(args);
// //     let result = 0;
// //     for (const arg of args) {
// //         result += arg;
// //     }
// //     return result;
// // }
// // console.log(add(2,20,50,900));

// // FONCTION ORDRE SUPERIEUR

// // FONCTION QUI A UNE FONCTION EN PARAMETRE OU QUI EN RETOURNE UNE

// const rawArr = [5, 6, 5889, 52, 415, 120];

// // const newArr = [];
// // for (let i = 0; i < rawArr.length; i++) {
// //     if (rawArr[i] > 100) {
// //         newArr.push(rawArr[i])
// //     }
// // }

// function suppArr(arr, fn) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// const arrSup100 = suppArr(rawArr, (item) => {
//   if (item > 100) {
//     return item;
//   }
// });
// console.log(arrSup100);

// // FONCTION CALL BACK

// const arr = [1, 2, 3, 4, 5, 6];

// // La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
// const mapedArr = arr.map((x) => x + 10);

// // La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
// const filteredArr = arr.filter(num => num > 2);

// // La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// arr.forEach(val =>{
//     console.log(val-90);
// })

// DESTRUCTURING

const pays = {
    nom: "Italie",
    pop: 60,
    langue: "Italien",
    voiture: "Lambo"
}

// ASSOCIE LES VALEURS DES OBJETS DU TABLEAU AU TABLEAU

const {nom, pop, langue, voiture} = pays;
console.log(nom, pop, langue, voiture);

// ON STOCK LES PARAMETRES D'UN OBJET SOUS LA FORME D'UNE FONCTION FLECHEE DANS UNE VARIABLE ICI "DATA"
const data = ({nom}) => nom;
console.log(data(pays));