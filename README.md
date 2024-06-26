## ChessBoard Moves Simulator

### Chessboard: 
The chessboard is an 8 x 8 grid with 64 cells in it. With 8 rows (1, 2, 3.... 8) and 8 columns (A, B, C.... H), each cell can be uniquely identified with its cell number.

### Inputs and Outputs to your program:
- Input - The input string to your program will be the Type of chess piece and it’s position (cell number) on the chessboard. E.g. Pawn, G1
- Output - Once you execute the program, the output will be a string of all possible cells in which the chess piece can move from its current position. For the above input, the output would be G2.

### Solution
- The solution is developed using ReactJs with hooks for state management. Deployed in github gh-pages.

### Installation

```sh
git clone https://github.com/kartheekgj/chess-moves-simulator.git
npm install
npm run start
```
Open the running application at [http://localhost:3000/](http://localhost:3000/)

You can check the working version at [https://kartheekgj.github.io/chess-moves-simulator/](https://kartheekgj.github.io/chess-moves-simulator/)

## How Does It Work?
1. Open the application and locate the options panel on the left side of the screen.
2. Choose between a pawn, king, or queen by clicking on the respective option.
3. Click or tap on the desired position on the chessboard where you want to position the selected chess piece.
4. After selecting the position, click or tap on the "Possible Moves" button.
5. The application will highlight the selected position and display potential moves in dark red on the chessboard.
6. Review the highlighted squares to analyze the available move options.
7. Change your selection to see the possible moves
8. This is a PWA so it works in offline too.

## Lighthouse Report
![image](https://github.com/kartheekgj/chess-moves-simulator/assets/1484950/1dc7e837-896c-4ba7-9408-f65569dbaf37)

## Demo Simulation
![ezgif-3-ffd00c3589](https://github.com/kartheekgj/chess-moves-simulator/assets/1484950/3194c05c-e515-49ce-80db-d84cf05abebf)

## Coverage report 
![image](https://github.com/kartheekgj/chess-moves-simulator/assets/1484950/6140c2b4-a8c2-46b9-ba17-9c875dafeaee)



