// function descendingOrder(n) {
//   return +n.toString().split("").sort().reverse().join("");
// }

// // Examples:
// // Input: 42145 Output: 54421
// // Input: 145263 Output: 654321
// // Input: 123456789 Output: 987654321

// console.log("descendingOrder(n): ", descendingOrder(1054782512));
function howMuchILoveYou(nbPetals) {
  const arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  if (nbPetals <= arr.length) {
    return arr[nbPetals - 1];
  } else {
    if (nbPetals % arr.length === 0) {
      return arr[(nbPetals % arr.length) + 5];
    } else return arr[(nbPetals % arr.length) - 1];
  }
}
console.log("howMuchILoveYou: ", howMuchILoveYou(273));
