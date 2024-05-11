import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./LayoutSection.css";

const LayoutSection = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`layout ${isDarkMode ? "dark" : ""}`}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default LayoutSection;
