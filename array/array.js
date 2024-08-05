const arr = [1, 2, 3, 'Preston']
console.log(arr[0]) // returns 1

arr.push(4) // add element to end of array
arr.unshift(0) // add element to beginning of array 
arr.pop() // remove an element from the end of array
arr.shift() // remove an element from the beginning of array

for(const index of arr) {
    console.log(index)
}

// other array methods: map, filter, reduce, concat, slice, and splice

let arr2 = [1, 2, 3, 4]
let sum = arr2.reduce((sum, current) => sum + current)
console.log(sum) // expected output 10