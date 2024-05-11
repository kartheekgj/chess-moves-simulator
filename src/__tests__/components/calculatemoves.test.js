import {
  CalculatePawnMovements,
  CalculateKingMovements,
  CalculateQueenMovements,
} from "../../components/Game/CalculateMoves";

describe("CalculatePawnMovements", () => {
  test("returns correct possible moves for pawn at position (2, 1)", () => {
    expect(CalculatePawnMovements(4, 4)).toEqual(["D5"]);
  });

  test("returns no possible moves for pawn at position (8, 1)", () => {
    expect(CalculatePawnMovements(8, 1)).toEqual([]);
  });
});

describe("CalculateKingMovements", () => {
  test("returns correct possible moves for king at position (4, 4)", () => {
    expect(CalculateKingMovements(4, 4)).toEqual([
      "C3",
      "C4",
      "C5",
      "D3",
      "D5",
      "E3",
      "E4",
      "E5",
    ]);
  });
});

describe("CalculateQueenMovements", () => {
  test("returns correct possible moves for queen at position (4, 4)", () => {
    expect(CalculateQueenMovements(4, 4)).toEqual([
      "A4",
      "D1",
      "B4",
      "D2",
      "C4",
      "D3",
      "E4",
      "D5",
      "F4",
      "D6",
      "G4",
      "D7",
      "H4",
      "D8",
      "E5",
      "E3",
      "C5",
      "C3",
      "F6",
      "F2",
      "B6",
      "B2",
      "G7",
      "G1",
      "A7",
      "A1",
      "H8",
    ]);
  });
});
