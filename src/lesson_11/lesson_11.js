import "./lesson_11.scss";
const colors = ["red", "green", "aqua", "magenta"];
const randomIndex = Math.floor(Math.random() * colors.length);
const color = colors[randomIndex];
console.log(color);

const words = ["john", "teste", "asdasdas, asdasd,cadasxd", "ttt", "pppppp"];

// let longestWord = "";
// for (let i = 0; i < words.length; i++) {
//   if (longestWord.length < words[i].length) {
//     longestWord = words[i];
//   }
// }

const numbers = [0, 25, 45, 28, 456, 78, 12, 123, 567, 890, 124, 87];
const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 100) {
    newNumbers.push(numbers[i]);
  }
}

function greet() {
  const name = prompt("Enter ");
  alert("hello " + name);
}

function add(a, b) {
  if (!a || !b || isNaN(a) || isNaN(b)) {
    console.error("INPUT INCORRECT");
  } else {
    return a + b;
  }
}

function isEqual(arrayA, arrayB) {
  let isEqual = true;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

const y = isEqual([0, 2, 3], [0, 2, 3]); // true
const o = isEqual([0, 2, 4], [0, 2, 3]); // false
console.log(y, o);
alert(add(5, 9));
