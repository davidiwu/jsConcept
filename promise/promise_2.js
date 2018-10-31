
let promise = new Promise(
    function(resolve, reject) {
        resolve(1);
        setTimeout(() => resolve(2), 1000); // only the first resolve will be excuted.
    }
);

promise.then(alert); // will call alert(1)

let promise2 = new Promise(
    function(resolve, reject) {
        //resolve(1);
        setTimeout(() => resolve(2), 1000);
    }
);

promise2.then(success => {
    console.log(success);
});


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('run after 3 seconds'));

/*

https://javascript.info/promise-basics
http://plnkr.co/edit/gSQLOOs3AK3jbcCBKuna?p=preview


*/

var promisePending = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        message: "The man likes to keep his word",
        code: "aManKeepsHisWord"
      });
    }, 10 * 1000);
  });

console.log(promisePending);


keepsHisWord = false;
promise3 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesn't want to keep his word");
  }
});
console.log(promise3);

/*
https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
As we can see PromiseStatus can have three different values. 
    pending 
    resolved 
    rejected

*/