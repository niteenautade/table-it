# table-it
This module can be used to convert any form of json or array to a HTML table.
```javascript
var tableit = require("table-it")
// Example 1 
var data = {
    "A":"A1",
    "B":"B1"
}
console.log( tableit(data) )

// Example 2
var data = [{
    "A":"A1",
    "B":"B1"
    },{
    "A":"A2",
    "B":"B2"
}]
console.log( tableit(data) )

// Example 3
var data = [{
    "A":"A1",
    "B":"B1"
    },{
    "A":[11,12,13],
    "B":"B2"
}]
console.log( tableit(data) )

// Example 4
var data = {
    "A":"A1",
    "B":[
            {
                "C":"C1"    
            }
        ]
}

console.log( tableit(data) )


```