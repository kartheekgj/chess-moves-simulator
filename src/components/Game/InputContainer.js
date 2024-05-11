import React from "react";

const InputContainer = ({
  selectedPieces,
  setSelectedPieces,
  calculatePossibleMoves,
}) => {
  const chessPieces = [
    { id: "pawn", label: "Pawn ♙" },
    { id: "king", label: "King ♔" },
    { id: "queen", label: "Queen ♕" },
  ];
  return (
    <div className="input-container">
      {chessPieces.map((piece) => (
        <div key={piece.id}>
          <input
            type="radio"
            id={piece.id}
            name={piece.label}
            value={piece.id}
            data-testid="selected-pieces"
            checked={selectedPieces === piece.id}
            onChange={() => setSelectedPieces(piece.id)}
          />
          <label htmlFor={piece.id}>{piece.label}</label>
        </div>
      ))}
      <button className="button" onClick={calculatePossibleMoves} data-testid="btn-possible-moves">
        Possible moves
      </button>
    </div>
  );
};

export default InputContainer;
