
var singleton = ( function() {
    var privateVariable = 0;
    function privateFunction(x) {
        privateVariable ++;
        console.log(privateVariable);
    }

    return {
        firstMethod: function(a, b) {
            privateVariable ++;
            console.log(privateVariable);
        },
        sencondMethod: function(c, d) {
            privateFunction(c);
        }
    }
}()
);

singleton.firstMethod(1, 2);
