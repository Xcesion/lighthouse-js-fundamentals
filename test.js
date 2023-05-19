// A room can be either of - dining room, gallery, ballroom, or billiards room
// var room = "billiards room";

// // A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// // Test your code by giving matching as well as unmatching names of the suspect
// var suspect = "Mr. Parkes"; 

// /* ****************************************** */

// /* IMPLEMENTATION LOGIC*/

// // Initial values
// var weapon = "";
// var solved = false;

// /*
// * To help solve this mystery, write a combination of conditional statements that:
// * 1. sets the value of weapon based on the room and
// * 2. sets the value of solved to true if the value of room matches the suspect's room
// */
// if (room == "billiards room" && suspect == "Mr. Parkes"/* your conditional goes here */) {
//   weapon += "pool stick";
//   solved == true;
// } else if (room == "ballroom" && suspect == "Mr. Kalehoff"/* your conditional goes here */) {
//   weapon += "poison";
//   solved == true;
// } else if (room =="gallery" && suspect == "Ms. Van Cleve" /* your conditional goes here */) {
//   weapon += "trophy";
//   solved == true;
// } else {
//   weapon += "knife";
//   solved === true;
// }
// /* ****************************************** */
// // The code below will run only when `solved` is true
// if (solved == true) {
// 	console.log(suspect + " did it in the " + room + "with the " + weapon +"!"/* your message goes here*/);
// }
// /* ****************************************** */

// var education = 'no high school diploma';

// // set the value of this based on a person's education
// var salary = 0;


// var x = 10;
// while (x <= 25) {
//   console.log('Printing out x = ' + x);
//   x = x + 2;
// }
// const amounts = [61.00, 52.25, 112.99, 5.00]; 

// let total = 0;
// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }
// console.log('Order total is: ', total);

//****************************************Loooping - Range******************************************************** */


// const range = function(start, end, step){
//   var some_array = [];
//   if((start !== undefined && end !== undefined && step !== undefined)&& (start < end) && (step > 0)){
//     for (var i = start; i <= end; i+=step){
//       some_array.push(i);
//     }
//     return some_array;
//   }else{
//     return some_array;
//   }
// }
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));


/***********************************Looping - lastIndexOf**************************** */


// const lastIndexOf = function(given_arr, num){
//   var result = -1;
//   for (var i = 0; i < given_arr.length; i++){
//     if(given_arr[i] == num){
//       result = i; 
//     }
//   }
//   return result;
// }

// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

/****************************************Concatenate Arrarys********************************************************************************** */

const concat = function(arr1, arr2){
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    console.log(result);
  }
  for (var j = 0; j < arr2.length; j++) {
    result.push(arr2[j]);
  }
  return result
}


// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
// console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
// console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);