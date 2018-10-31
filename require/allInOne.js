
/*
* The define function that handles definitions of modules. Differs from
* require() in that a string for the module should be the first argument,
* and the function to execute after dependencies are loaded should
* return a value to define the module corresponding to the first argument's
* name.
*/

define('mProducts', function(products) {
    console.log("module: mproducts loaded");
    return {
        reserveProduct: function() {
            console.log("Function: reserveProduct called");
            return true;
        }
    }
});


define('mCredits', function() {
    console.log("module: mcredits loaded");
    return {
        getCredits: function() {
            console.log("funcation: getCredits called");
            var credits = 100;
            return credits;
        }
    }
});


define('mPurchase', ["mCredits", "mProducts"], function(credits, products) {
    console.log("module: mpurchase loaded");
    return {
        purchaseProduct: function() {
            console.log("Function: purchaseProduct called");
            var credit = credits.getCredits();
            if(credit > 0) {
                products.reserveProduct();
                return true;
            }
            return false;
        }
    }
});

require(["mPurchase"], function(mPurchase) {
    console.log("main mmodule loaded")
    mPurchase.purchaseProduct();
});