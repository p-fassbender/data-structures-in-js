const map = new Map([['a', 1], ['b', 2]])

map.set('c',3) // add a new value to the given Map

console.log(map.has('a')) // check if a given key exists in a given Map
console.log(map.has(2))

map.delete('c') // delete a given key:value pair fomr the given Map

console.log(map.size) // check the number of key:value pairs in the given Map

for (const [key, value] of map) {
    console.log(`${key}: ${value}`)
}

map.clear() // delete all key:value pairs in the given Map