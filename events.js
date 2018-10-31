
/*
The browser has an event-driven, single-threaded programming model

Events are targeted to particular nodes

Events cause the invocation of event handler function

Netscape
    node["on" + type ] = f;

Microsoft
    node.attachEvent("on" + type, f);

W3C
    node.addEventListener(type, f, false);

use library instead to add event to node: jQuery

common DOM events:
Mouse Events	Keyboard Events	Form Events	Document/Window Events
click	        keypress	    submit	    load
dblclick	    keydown	        change	    resize
mouseenter	    keyup	        focus	    scroll
mouseleave	 	                blur	    unload

*/

// $(document).ready will run after page is loaded.

$(document).ready(
    function() {
        $("p").on({
            mouseenter: function() {
                $(this).css("background-color", "lightgray");
            },
            mouseleave: function() {
                $(this).css("background-color", "lightblue");
            },
            click: function() {
                $(this).css("background-color", "yellow");
            }
        });
        
        $("#box").on("click", function() {
            $(this).css("background-color", "blue");
        });
        
        $("h1").hover(function() {
            $(this).css("background-color", "red");
        }, function() {
            $(this).css("background-color", "white");
        });
    }
);
