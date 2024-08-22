class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // time complexity: O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // time complexity: O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    // time complexity O(n)
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if (prev.next) {
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        if (this.isEmpty()) {
            console.log("the list is empty")
        } else {
            let curr = this.head
            let listValue = ''
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }
}

const list = new LinkedList()

console.log('list is empty? ', list.isEmpty())
console.log('list size: ', list.getSize())
list.print()

console.log("- PREPEND -")
list.prepend(1)
list.print()
list.prepend(2)
list.prepend(3)
list.print()

console.log("- APPEND -")
list.append("a")
list.print()
list.append("b")
list.append("c")
list.print()

console.log("- INSERT -")
list.insert(11, 0)
list.print()
list.insert(22, 0)
list.print()
list.insert(33, 1)
list.print()
list.insert(44, 2)
list.print()
console.log("list size: ", list.getSize())

console.log("- REMOVE FROM INDEX -")
console.log(list.removeFrom(15))
console.log(list.removeFrom(0))
list.print()
console.log(list.removeFrom(2))
list.print()
console.log("list size: ", list.getSize())

console.log("- REMOVE VALUE -")
console.log(list.removeValue(33))
list.print()
console.log(list.removeValue("a"))
list.print()
console.log(list.removeValue("gg"))
list.print()
console.log("list size: ", list.getSize())

console.log("- SEARCH VALUE -")
console.log(list.search(2))
console.log(list.search("b"))

console.log("- REVERSE -")
list.print()
list.reverse()
list.print()