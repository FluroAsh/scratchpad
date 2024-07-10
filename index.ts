const arr = [2, 5, 69, 3, 1, 2, 44, 92, 100, 21, 38];
console.clear();

const searchNum = 92;

const mid = arr[Math.floor(arr.length / 2)];
const start = arr[0];
const end = arr[arr.length - 1];
console.log({ mid, start, end });
//

// for (let i = 0; i < arr.length; i++) {
//   // if (arr[i] === searchNum) {
//   //   console.log(`Found it! >> ${searchNum} == ${arr[i]}`)
//   //   break
//   // }
// }
