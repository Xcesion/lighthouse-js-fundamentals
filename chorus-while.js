// const chorus = "Let's dance!";
// let repeat = 0;
// while (repeat < 10) {
//   console.log(chorus+ repeat.toLocaleString("en-US")); // added repeat tracking the loop result
//   repeat++;
// }
// console.log("Until the sun comes up!");

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*"); // when repeat is at the 6 times [5] in the loop
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");