// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// const chooseStations = function (stations) {
//   const goodStations = [];
//   for (const station of stations) {
//     if(station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")){
//       goodStations.push(station[0])
//     };
//   };
//   return(goodStations);  
// };

// chooseStations(stations);

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// const finalPosition = function(moves) {
//   var position = [0,0];
//   for(const move of moves){
//     switch(move){
//       case('east'):
//         position[0]++;
//         break;
//       case('west'):
//         position[0]--;
//         break;
//       case('north'):
//         position[1]++;
//         break;
//       case('south'):
//         position[1]--;
//         break;
//     }
//   }
//   return position;
// }

// finalPosition(moves);

//*******************************************Age Calculator ***************************************************** */
// const ageCalculator =function(name, yearOfBirth, currentYear){
//   var introduction = "";
//   old = currentYear - yearOfBirth;
//   introduction = name + " is "+ old.toLocaleString("en-US") + " years old."
//   return introduction
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));


//*********************************************How many hundreds *************************************************** */
// const howManyHundreds = function(num) {
//   var hund = 0;
//   var count = num/100;
//   hund = hund + Math.floor(count);
//   return hund;
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

// ********************************Area Calculator ************************************************/

// const calculateRectangleArea = function(length, width){
//   var area = 0;
//   if(length >= 0 && width >= 0){
//     area = length*width;
//     return area;
//   }else{
//     return undefined;
//   }
// }

// const calculateTriangleArea = function(base, height){
//   var area = 0;
//   if(base >= 0 && height >= 0){
//     area = (base * height) / 2
//     return area;
//   }else{
//     return undefined;
//   }
// }

// const calculateCircleArea = function(radius){
//   var area = 0;
//   if(radius >= 0){
//     area = Math.PI * (radius **2)
//     return area;
//   }else{
//     return undefined;
//   } 
// }
// //calculateRectangleArea(length, width)
// //calculateTriangleArea(base, height)
// //calculateCircleArea(radius)

// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(10, -5));    // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined


// var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
// console.log((donuts[-2])+"hi");
// donuts.splice(-2, 0, "chocolate frosted", "glazed");
// console.log(donuts);

// var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];

// console.log(turnMeIntoAString.join(''));

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts);

