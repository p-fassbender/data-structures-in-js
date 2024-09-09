// adjacency matrix representation
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]
console.log(matrix[0][1])

// adjacency list representation
const adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}
console.log(adjacencyList['A'])