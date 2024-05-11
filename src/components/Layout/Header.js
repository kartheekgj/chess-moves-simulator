import React from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? "dark" : ""}`}>
      <div className="">
        <h1>Chessboard Simulator </h1>
        <button onClick={onToggleDarkMode}>
          Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
