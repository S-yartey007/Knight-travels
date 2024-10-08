import { Queue } from "./queue.js";

function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = new Queue();
  queue.enqueue({ start: start, path: [start] });
  const visited = new Set().add(queue.front().start);

  while (!queue.isEmpty()) {
    let { start, path } = queue.dequeue();
    if (start[0] === end[0] && start[1] === end[1]) {
      return path;
    }
    for (let move of moves) {
      const nextSquare = [start[0] + move[0], start[1] + move[1]];
      if (isValidSquare(nextSquare) && !visited.has(nextSquare)) {
        visited.add(nextSquare);
        const newpath = [...path, nextSquare];
        const current = { start: nextSquare, path: newpath };
        queue.enqueue(current);
      }
    }
  }
  return "No possible path";
}

function isValidSquare(square) {
  return 0 <= square[0] && square[0] < 8 && 0 <= square[1] && square[1] < 8;
}

console.log(knightMoves([3, 3], [4, 3]));
