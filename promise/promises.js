
/*
/_ ES6; ECMAScript 2015 (6th Edition, ECMA-262)
The definition of 'Promise' in that specification. _/
*/

var isMomHappy = false;

var willIGetNewPhone = new Promise(
    function(resolve, reject) {
        if(isMomHappy) {
            var phone = {
                brand:'Huawei',
                color:'black'
            };
            resolve(phone);  // fulfilled
        } else {
            var reason = new Error('Mom is not happy');
            reject(reason); // reject
        }
    }
);

/*
promise syntax look like this:

new Promise(/_executor_/ function(resolve, reject) { ... });
*/

// Consuming promises

var askMom = function() {
    willIGetNewPhone
        .then(function(fulfilled) {
            console.log(fulfilled);
        })
        .catch(function(error) {
            console.log(error.message);
        })
};
askMom();


// 2nd promise
var showOff = function(phone) {
    return new Promise(
        function(resolve, reject) {
            var message = 'Hey friend, I have a new phone ' +
                phone.color + ' ' + phone.brand + ' phone';
            
            resolve(message);
        }
    );
};

// 2nd promise, shorten it
var showOff2 = function(phone) {
    var message = 'Hey friend, I have a new phone ' +
        phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};


// call our promise
var askMom2 = function() {
    console.log('before asking mom');
    willIGetNewPhone
    .then(showOff2)  // chain it here
    .then(function(fulfilled) {
        console.log(fulfilled);
    })
    .catch(function(error) {
        console.log(error.message);
    })
    console.log('after asking mom');
};

askMom2();


// Promises are Asynchronous


// ES6 
let resultA, resultB, resultC;

function addAsync(num1, num2) {
    // use ES6 fetch API, which return a promise
    return fetch('http://www.example.com?num1=${num1}&num2=${num2}')
            .then(x => x.json());
}

addAsync(1, 2)
    .then(success => {
        resultA = success;
        return resultA;
    })
    .then(success => addAsync(success, 3))
    .then(success => {
        resultB = success;
        return resultB;
    })
    .then(success => addAsync(success, 4))
    .then(success => {
        resultC = success;
        return resultC;
    })
    .then(success => {
        console.log('total: ' + success);
        console.log(resultA, resultB, resultC);
    });