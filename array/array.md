# Common Array Methods
### push
adds the specified elements to the end of an array  
`arr.push(x, y, z)`

### pop
removes the last element from an array  
`arr.pop()`

### unshift
adds the specified elements to the beginning of an array  
`arr.unshift(x, y, z)`

### shift
removes the first element from an array  
`arr.shift()`

### map
creates a new array populated with the results of calling a provided function on every element in the original array  
```
let arr = [1, 2, 3, 4]
let newArr = arr.map((x) => x * 2)
console.log(newArr) // expected output [2, 4, 6, 8]
```

### filter
creates a copy of the original array, filtered down to just the elements that pass the provided test  
```
let arr = [1, 2, 3, 4]
let newArr = arr.filter((number) => number <= 2)
console.log(newArr) // expected output [1, 2]
```

### reduce
executes a supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element  
```
let arr = [1, 2, 3, 4]
let sum = arr.reduce((sum, current) => sum + current)
console.log(sum) // expected output 10
```

### concat
creates a new array by merging two or more arrays  
```
let arr1 = [1, 2, 3]
let arr2 = ['x', 'y', 'z']
let newArr = arr1.concat(arr2)
console.log(newArr) // expected output [1, 2, 3, 'x', 'y', 'z']
```

### slice
returns a portion of an array between indexes x and y (optional)  
```
let arr = ["water", "fire", "earth", "wind", "dark", "light"]
console.log(arr.slice(2)) // expected output ["earth", "wind", "dark", "light"]
console.log(arr.slice(2, 4)) // expected output ["earth", "wind"]
```

### splice
changes the contents of an arrya by removing, replacing, or adding elements  
splice(start, deleteCount, item1, item2, /* …, */ itemN)  
```
let arr = ["water", "fire", "earth", "wind", "dark", "light"]
arr.splice(1,0,"ice") // expected output ["water", "ice", "fire", "earth", "wind", "dark", "light"]
arr.splice(5,1,"dragon") // expected output ["water", "ice", "fire", "earth", "wind", "dragon", "light"]

```

# Time complexity
* insert / remove from end - O(1)
* insert / remove from beginning - O(n)
* access - O(1)
* search - O(n)
* push/pop - O(1)
* shift / unshift / concat / splice - O(n)
* forEach / map / filter / reduce - O(n)

