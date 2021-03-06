
//The second parameter to require() or requirejs() is an anonymous function 
// which takes an object that is used to call the functions inside the dependent file.

// The require() function is used to run immediate functionalities,
// The define() is used to define modules for use in multiple locations.

// RequireJS waits until all the dependent modules are loaded before executing the functionality.
// If any modules are missing, it doesn’t execute any code. 

// RequireJS uses Asynchronous Module Loading (AMD) for loading files. 
// Each dependent module will start loading through asynchronous requests in the given order

//Even though the file order is considered, 
// we cannot guarantee that the first file is loaded before the second file 
// due to the asynchronous nature. 
// So, RequireJS allows us to use the shim config to define the sequence of files which need to be loaded in correct order.


// here can use require or requirejs, they are exactly the same.
// The reason is some environments might already have a require, in which case RequireJS doesn't overwrite it and allows usage of the library through requirejs

require(["purchase"], function(purchase) {
    console.log("main module loaded")
    purchase.purchaseProduct();
});

/*

 requirejs(["purchase"], function(purchase) {
    console.log("main module loaded")
    purchase.purchaseProduct();
});

 */