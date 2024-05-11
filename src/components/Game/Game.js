import React, { useState } from "react";
import "./Game.css";

import Chessboard from "./Chessboard";
import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";

import {
 CalculatePawnMovements, CalculateKingMovements, CalculateQueenMovements
} from './CalculateMoves'


export default function Game() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [selectedPieces, setSelectedPieces] = useState("");
  const [error, setError] = useState("");

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };
  const onSelectPiecesHandler = (pieceId) => {
    setPossibleMoves([]);
    setSelectedPosition("");
    setError("");
    setSelectedPieces(pieceId);
  };

  const calculatePossibleMoves = () => {
    setError("");
    if (selectedPosition === "") {
      setError("Please select a position on the grid.");
      return;
    }
    const col = selectedPosition.charCodeAt(0) - 64;
    const row = parseInt(selectedPosition[1], 10);
    let possibleMoves;
    if (selectedPieces === "pawn") {
      possibleMoves = CalculatePawnMovements(row, col);
    } else if (selectedPieces === "king"){
      possibleMoves = CalculateKingMovements(row, col);
    } else if(selectedPieces === "queen"){
      possibleMoves = CalculateQueenMovements(row, col);
    }
    setPossibleMoves(possibleMoves);
  };
  return (
    <div className="container">
      {error.length > 1 && <div className="error" data-testid="error-message">{error}</div>}
      <div className="content">
        <InputContainer
          selectedPieces={selectedPieces}
          setSelectedPieces={onSelectPiecesHandler}
          calculatePossibleMoves={calculatePossibleMoves}
        />
        <div className="chessboard-container">
          <Chessboard
            onPositionSelect={handlePositionSelect}
            selectedPosition={selectedPosition}
            possibleMoves={possibleMoves}
          />
        </div>
        <OutputContainer
          selectedPosition={selectedPosition}
          possibleMoves={possibleMoves}
        />
      </div>
    </div>
  );
}
