const set = new Set([1, 2, 3])
set.add(4) // add a new value to the Set
set.add(4) // because the given value is already in the Set it will not be added again

for(const item of set) { // sets are iterable
    console.log(item)
}

console.log(set.has(4)) // check if the given value exists in the given Set

set.delete(3) // removes a given value from the given Set

console.log(set.size) // check the number of items in the Set

set.clear() // delete all values in the Set