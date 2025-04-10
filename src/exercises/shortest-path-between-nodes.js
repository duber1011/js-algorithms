/*
Write a function that finds the shortest path between two nodes. Given a graph represented as an adjacent list with weights,
write the functions that will take the start and end nodes as input and returns the shortest path between them.
Weights between nodes should be only positive numbers, and  edges between nodes should be undirected.
Use adjacency matrix to represent the undirected graph input.

Example 1

Input: graph= { { 0, 2, 6, 0, 0, 0, 0 },
                { 2, 0, 0, 5, 0, 0, 0 },
                { 6, 0, 0, 8, 0, 0, 0 },
                { 0, 5, 8, 0, 10, 15, 0 },
                { 0, 0, 0, 10, 0, 6, 2 },
                { 0, 0, 0, 15, 6, 0, 6 },
                { 0, 0, 0, 0, 2, 6, 0 } }

StartNode= 0
EndNode=6

Output: 
The shortest path is through these nodes: 0 -> 1 -> 3 -> 4 -> 6
*/

function findShortestPath(graph, startNode, endNode) {
  const numNodes = graph.length;
  const distances = Array(numNodes).fill(Infinity);
  const previousNodes = Array(numNodes).fill(null);
  const visited = Array(numNodes).fill(false);

  distances[startNode] = 0;

  for (let i = 0; i < numNodes - 1; i++) {
    let minDistance = Infinity;
    let minNode = -1;

    for (let j = 0; j < numNodes; j++) {
      if (!visited[j] && distances[j] < minDistance) {
        minDistance = distances[j];
        minNode = j;
      }
    }

    visited[minNode] = true;

    for (let k = 0; k < numNodes; k++) {
      if (
        graph[minNode][k] > 0 &&
        !visited[k] &&
        distances[minNode] + graph[minNode][k] < distances[k]
      ) {
        distances[k] = distances[minNode] + graph[minNode][k];
        previousNodes[k] = minNode;
      }
    }
  }

  const path = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = previousNodes[currentNode];
  }

  return path;
}
// Test case
const graph = [
  [0, 2, 6, 0, 0, 0, 0],
  [2, 0, 0, 5, 0, 0, 0],
  [6, 0, 0, 8, 0, 0, 0],
  [0, 5, 8, 0, 10, 15, 0],
  [0, 0, 0, 10, 0, 6, 2],
  [0, 0, 0, 15, 6, 0, 6],
  [0, 0, 0, 0, 2, 6, 0],
];

const startNode = 0;
const endNode = 6;

const shortestPath = findShortestPath(graph, startNode, endNode);
console.log(`The shortest path is: ${shortestPath.join(' -> ')}`);
// Output: The shortest path is through these nodes: 0 -> 1 -> 3 -> 4 -> 6

module.exports = findShortestPath;
