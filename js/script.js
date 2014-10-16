// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/

var person = {
	fName: 'Daniel',
	lName: 'Zheng',
	email: 'dehuaz@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lName; }
};

console.log(person.getFullName());