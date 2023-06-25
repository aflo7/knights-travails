

export default function knightMoves(start, end) {

  function Node(pos, path) {
    return { pos, path };
  }

  const startNode = Node(start, [start])
  const q = [startNode];
  let currentNode = q.shift();
  let visited = new Set()
  while (JSON.stringify(currentNode.pos) !== JSON.stringify(end)) {
    const generatedMoves = [
      [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
    ];
    let moves = []
    generatedMoves.forEach(move => {
      if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return
      if (visited.has(JSON.stringify(move))) return

      visited.add(JSON.stringify(move))
      moves.push(move)
    })
    moves.forEach((move) => {
      const node = Node(move, currentNode.path.concat([move]));
      q.push(node);
    });
    currentNode = q.shift();
  }
  return currentNode.path
}