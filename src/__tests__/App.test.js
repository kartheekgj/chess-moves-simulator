import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Chessboard Simulator/i)).toBeInTheDocument();
});