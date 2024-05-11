import React from "react";

const Buildboard = ({ onPositionSelect, selectedPosition, possibleMoves }) => {
  const cells = [];
  for (let row = 8; row >= 1; row--) {
    for (let col = 1; col <= 8; col++) {
      const cellId = `${String.fromCharCode(64 + col)}${row}`;
      let color = (row + col) % 2 === 0 ? "black" : "white";
      if (selectedPosition === cellId) {
        color = "selected";
      } else if (possibleMoves && possibleMoves.includes(cellId)) {
        color = "possible-move";
      }
      cells.push(
        <div key={cellId} className={`cell ${color}`} onClick={() => onPositionSelect(cellId)} data-testid="selected-position">
          {cellId}
        </div>
      );
    }
  }
  return cells;
};

const Chessboard = ({onPositionSelect, selectedPosition, possibleMoves}) => {
  return (
    <div className="chessboard">
      <Buildboard onPositionSelect={onPositionSelect} selectedPosition={selectedPosition} possibleMoves={possibleMoves}/>
    </div>
  );
};

export default Chessboard;
