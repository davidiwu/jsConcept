

# install the browserify

run below command: (install npm first)

npm install -g browserify


# use the browserify

## 1. create modules using statement like this:

```javascript
    module.exports = (cat) => {
        return {
            total: 33,
            catagory: cat
        };
    }
```

## 2. use modules:
```javascript
    const products = require('./products');
```

## 3. generate bundle file:

run command:

browserify main.js -o bundle.js


## 4. use the bundle file in the html file:
```html
    <head>
        <script src="bundle.js"></script>
    </head>
```