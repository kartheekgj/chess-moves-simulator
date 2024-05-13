export const CalculatePawnMovements = (row, col) => {
  const possibleMoves = [];
  const nextRow = row + 1;
  if (nextRow <= 8) {
    possibleMoves.push(`${String.fromCharCode(64 + col)}${nextRow}`);
  }
  return possibleMoves;
};

export const CalculateKingMovements = (row, col) => {
  const possibleMoves = [];
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      const nextCol = col + dx;
      const nextRow = row + dy;

      if (nextCol >= 1 && nextCol <= 8 && nextRow >= 1 && nextRow <= 8) {
        possibleMoves.push(`${String.fromCharCode(64 + nextCol)}${nextRow}`);
      }
    }
  }
  return possibleMoves;
};

export const CalculateQueenMovements = (row, col) => {
  const possibleMoves = [];
  for (let i = 1; i <= 8; i++) {
    if (i !== col) possibleMoves.push(`${String.fromCharCode(64 + i)}${row}`);
    if (i !== row) possibleMoves.push(`${String.fromCharCode(64 + col)}${i}`);
  }
  for (let i = 1; i <= 8; i++) {
    if (col + i <= 8 && row + i <= 8)
      possibleMoves.push(`${String.fromCharCode(64 + col + i)}${row + i}`);
    if (col + i <= 8 && row - i >= 1)
      possibleMoves.push(`${String.fromCharCode(64 + col + i)}${row - i}`);
    if (col - i >= 1 && row + i <= 8)
      possibleMoves.push(`${String.fromCharCode(64 + col - i)}${row + i}`);
    if (col - i >= 1 && row - i >= 1)
      possibleMoves.push(`${String.fromCharCode(64 + col - i)}${row - i}`);
  }
  return possibleMoves;
};
