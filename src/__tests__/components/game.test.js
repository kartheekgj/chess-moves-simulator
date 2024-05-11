import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from '../../components/Game/Game';
import Chessboard from '../../components/Game/Chessboard';
describe('Game component', () => {
  test('renders without crashing', () => {
    render(<Game />);
  });

  test('handles position selection', () => {
    onPositionSelect = jest.fn();
    const { getByTestId, getAllByTestId } = render(<Game />);
    const positionInput = getAllByTestId('selected-position')[12];
    fireEvent.change(positionInput);
    expect(positionInput).toHaveTextContent('E7');
  });

   test('selects chess pieces', () => {
     const { getAllByTestId } = render(<Game />);
     const piecesInput = getAllByTestId('selected-pieces')[0];
      fireEvent.click(piecesInput)
     expect(piecesInput.checked).toBe(true);
   });

  test('displays error message when position not selected', () => {
    const { getByTestId } = render(<Game />);
    fireEvent.click(getByTestId('btn-possible-moves'));
    expect(getByTestId('error-message')).toHaveTextContent('Please select a position on the grid.');
  });

});
