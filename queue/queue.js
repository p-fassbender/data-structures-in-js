class Queue {
    constructor() {
        this.items = []
    }

    // insert at rear end of queue
    enqueue(element) {
        this.items.push(element)
    }

    // remove from front end of queue - first in first out
    dequeue() {
        return this.items.shift()
    }

    // returns whether or not there are elements in the queue
    isEmpty() {
        return this.items.length === 0
    }

    // returns the first element of the queue without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    // returns the number of elements in the queue
    size() {
        return this.items.length
    }

    // see the elements currently in queue
    print() {
        console.log(this.items.toString())
    }
}

const queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue(1)
queue.enqueue(12)
queue.enqueue(123)

console.log(queue.size())

queue.print()

console.log(queue.dequeue())

console.log(queue.peek())

