describe('shortestPathBetweenNodes', () => {
  const shortestPathBetweenNodes = require('../../src/exercises/shortest-path-between-nodes');

  test('should return the shortest path between two nodes', () => {
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
    const expectedPath = [0, 1, 3, 4, 6];
    expect(shortestPathBetweenNodes(graph, startNode, endNode)).toEqual(
      expectedPath
    );
  });
});
