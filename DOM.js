
/*
1. Place <script src> tags as close to the buttom of the body as possible.

place CCS <link> as high in the head as possible

2. Minify and gzip script files
3. Reduce the number of script files as much as possible

*/

/*

Document Tree Structure

document
    document.documentElement
    document.body
    document.head

    child
        firstChild
        lastChild
        childNodes
    sibling
        nextSibling
        previousSibling

    parentNode

*/

function walkTheDom(node, func) {
    func(node);
    node = node.firstChild;
    while(node) {
        walkTheDom(node, func);
        node = node.nextSibling;
    }
}

function getElementsByClassName(className) {
    var results = [];
    walkTheDom(document.body, function(node) {
        var a, c = node.className, i;
        if(c) {
            a = c.split(' ');
            for(i = 0; i< a.length; i++) {
                if(a[i] === className) {
                    results.push(node);
                    break;
                }
            }
        }
    });
    return results;
}


/*
Style
    node.className
    node.style.stylename
    node.currentStyle.stylename // only IE
    
    equls:
    
    document.defaultView = window
    document.defaultView().
        getComputedStyle(node, "").
        getPropertyValue(stylename);



     CSS                    DOM
     background-color   <-> backgroundColor
     font-size          <-> fontSize
     float              <-> cssFloat
     z-index            <-> zIndex
*/


/*
Making elements

    document.createElement(tagName)
    document.createTextNode(text)
    node.cloneNode()
    node.cloneNode(true) // clone an element and all of its descendents

    node.appendChild(new)
    node.insertBefore(new, sibling)
    node.replaceChild(new, old)
    old.parentNode.replaceChild(new, old)
    node.removeChild(old)
        it returns the node
        be sure to remove any event handlers
    old.parentNode.removeChild(old)
    
*/