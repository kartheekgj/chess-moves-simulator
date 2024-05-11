import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Chessboard from "../../components/Game/Chessboard";

describe("Chessboard component", () => {
  
  test("renders without crashing", () => {
    render(<Chessboard />);
  });

  test("displays correct number of cells", () => {
    const { getAllByTestId } = render(<Chessboard />);
    const cells = getAllByTestId("selected-position");
    expect(cells.length).toBe(64);
  });
});
