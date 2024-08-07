# Common Object Methods
### Object.keys(x)
returns an array of a given objects own keys  
```
let obj = {name: 'Preston', age: 28}
let keys = Object.keys(obj)
console.log(keys)
/* 
expected output
['name', 'age' ]
*/
```

### Object.values(x)
returns an array of a given objects own values  
```
let obj = {name: 'Preston', age: 28}
let values = Object.values(obj)
console.log(values)
/* 
expected output
['Preston', 28 ]
*/
```

### Object.entries(x)
returns an array of a given objects own key:value pairs  
```
let obj = {name: 'Preston', age: 28}
let entries = Object.entries(obj)
console.log(entries)
/* 
expected output
[
  [ 'name', 'Preston' ],
  [ 'age', 28 ]
] 
*/
```

# Time Complexity
* insert - O(1)
* remove - O(1)
* access - O(1)
* search - O(n)
* Object.keys() - O(n)
* Object.values() - O(n)
* Object.entries() - O(n)