
define(function(products) {
    console.log("module: products loaded");
    return {
        reserveProduct: function() {
            console.log("Function: reserveProduct called");
            return true;
        }
    }
});