// run commands:
// npm install -g browserify
// browserify main.js -o bundle.js

const products = require('./products');

var inventory = products("Sports Ware");

console.log(inventory.total);
console.log(inventory.catagory);