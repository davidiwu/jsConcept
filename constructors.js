
function constructor(spec) {

    var that = otherMaker(spec),
        member,
        method = function() {
            // spec, member, method
        };

    that.method = method;

    return that;
}


// example:
// functional inheritance
function gizmo(id) {
    return {
        id: id,
        toString: function() {
            return "gizmo " + this.id;
        }
    };
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function(testid) {
        return testid === this.id;
    };
    return that;
}

// same as above, except make id private:
function gizmo2(id) {
    return {
        toString: function() {
            return "gizmo " + id;
        }
    };
}

function hoozit2(id) {
    var that = gizmo2(id);
    that.test = function(testid) {
        return testid === id;
    };
    return that;
}
