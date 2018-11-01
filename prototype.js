
/*

https://github.com/happymishra/JavaScriptTutorials/blob/master/Part1/Object.md


https://github.com/happymishra/JavaScriptTutorials/blob/master/Part2/Prototypes.md


When a function is created in JavaScript, JavaScript engine adds a prototype property to the function.
This prototype property is an object (called as prototype object) which has a constructor property by default.
constructor property points back to the function on which prototype object is a property.
We can access the function's prototype property using the syntax functionName.prototype.


All JavaScript objects inherit properties and methods from a prototype.

A JavaScript method is a property containing a function definition.

Date objects inherit from Date.prototype. Array objects inherit from Array.prototype.
The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, all inherit from Object.prototype.
*/

function Human(firstName, lastName){
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function(){
		return this.firstName + " " + this.lastName;
	}
}

console.log(Human.prototype);

var viratKohli = new Human("Virat", "Kohli");
console.log(viratKohli.__proto__);

Human.prototype === viratKohli.__proto__  //true;