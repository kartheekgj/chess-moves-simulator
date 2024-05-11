import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? "dark" : ""}`}>  {/* Apply dark class conditionally */}
      <p>&copy; 2024 by Jayendra Kartheek</p>
    </footer>
  );
};

export default Footer;
