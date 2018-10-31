
define(function() {
    console.log("module: credits loaded");
    return {
        getCredits: function() {
            console.log("funcation: getCredits called");
            var credits = 100;
            return credits;
        }
    }
});