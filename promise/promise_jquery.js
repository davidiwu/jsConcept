

function callMe() {
    var d = new $.Deferred();
    setTimeout(function() {
        d.resolve('some value compute asynchronously');
    }, 1000);
    return d.promise();
}

callMe().done(function(value) {
    alert(value);
});

// $.ajax returns a promise
function fetchData() {
    return $.ajax({});
}

fetchData().done(function(response) {
    // do something here.
});


// you can cast jQuery's deffereds to standard promises:
var jsPromise = Promise.resolve($.ajax('/whatever.json'))