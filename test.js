// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room == "billiards room" && suspect == "Mr. Parkes"/* your conditional goes here */) {
  weapon += "pool stick";
  solved == true;
} else if (room == "ballroom" && suspect == "Mr. Kalehoff"/* your conditional goes here */) {
  weapon += "poison";
  solved == true;
} else if (room =="gallery" && suspect == "Ms. Van Cleve" /* your conditional goes here */) {
  weapon += "trophy";
  solved == true;
} else {
  weapon += "knife";
  solved === true;
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved == true) {
	console.log(suspect + " did it in the " + room + "with the " + weapon +"!"/* your message goes here*/);
}
/* ****************************************** */

var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

