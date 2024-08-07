const obj = {
    name: 'Preston',
    age: 28,
    "is-awesome": true,
    sayMyName: function() {
        console.log(`my name is ${this.name}`)
    }
}

console.log(obj)
console.log(obj.name)
console.log(obj['age'])
console.log(obj['is-awesome'])

obj.hobby = "video games"
console.log(obj)

delete obj.hobby
console.log(obj)

obj.sayMyName()

let entries = Object.entries(obj)
console.log(entries)