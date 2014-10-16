// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict";

var person = {
	fName: 'Daniel',
	lName: 'Zheng',
	email: 'dehuaz@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lName; }
};

console.log('running the getElementBy function on person object('')')
console.log(person.getFullName());

console.log('')

for (prop in person) {
	console.log(person[prop])
}