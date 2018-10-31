
// The require() function is used to run immediate functionalities,
// The define() is used to define modules for use in multiple locations.

define(["credits", "products"], function(credits, products) {
    console.log("module: purchase loaded");
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