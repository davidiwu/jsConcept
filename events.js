
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

*/