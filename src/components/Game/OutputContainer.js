import React from "react";

const OutputContainer = ({ selectedPosition, possibleMoves }) => {
  return (
    <div className="output-container">
      <div>Output Data</div>
      {selectedPosition.length > 0 && (
        <div>
          Selected Position:
          <span className="list-data">{selectedPosition}</span>
        </div>
      )}
      <div>
        {possibleMoves.length > 0 && (
          <div>
            <p>Possible Moves</p>
            <ul className="list-container">
              {possibleMoves.map((move) => (
                <li className="list-data" key={move} data-testid="possible-moves">
                  {move}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputContainer;
