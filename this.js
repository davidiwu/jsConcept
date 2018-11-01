
// The JavaScript this keyword

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 1234,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// A JavaScript method is a property containing a function definition.
// in a object method, like above, this refers to the 'owner' of the method
// so it refers to the person object, because the person object is the owner of the fullName method.

// when used alone, the owner is the Global object, so this refers to the global object
// in a browser window, the Global object is [object Window]
// In strict mode, when used alone, this also refers to the Global object [object Window]:

"use strict";
var x = this;

// this in a function(Default)
// In a JavaScript function, the owner of the function is the default binding for this.
// so, in a function, this refers to the Global object [object Window]
function myFunction() {
    return this;
}


// this in Event Handlers:
// in HTML event handlers, this refers to the HTML element that received the event:

<button onclick="this.style.display='none'">
    Click to Remove Me!
</button>


// Explicit Function Binding
// the call() and apply() methods are predefined JavaScript methods.
// they can both be used to call an object method with another object as argument.
var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"

// Details of the JavaScript call() Method
// the call() method is predefined JavaScript method
// It can be used to invoke(call) a method with an owner object as an argument
// with call(), an object can use a method belonging to another object.
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.call(person1);  // Will return "John Doe"

// the call() method can accept arguments:
var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
person.fullName.call(person1, "Oslo", "Norway");

// the apply() method is similar to the call() method, the difference is:
// the call() method takes arguments separately.
// the apply() method takes arguments as an array.
var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
person.fullName.apply(person1, ["Oslo", "Norway"]);



