const knightMoves = require('./knightMoves.js')

test('three steps', () => {
  const result = knightMoves([0, 0], [3, 3])
  const expected = [ [ 0, 0 ], [ 2, 1 ], [ 3, 3 ] ]
  expect(result).toEqual(expected);
});

test('three steps backward', () => {
  const result = knightMoves([3,3], [0,0])
  const expected = [[3,3],[1,2],[0,0]]
  expect(result).toEqual(expected);
});

test('two steps', () => {
  const result = knightMoves([0,0], [1,2])
  const expected = [[0,0],[1,2]]
  expect(result).toEqual(expected);
});