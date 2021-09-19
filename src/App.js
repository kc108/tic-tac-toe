import React, { useState } from "react";
import Board from './components/Board'
import { calculateWinner } from "./helpers";

import "./styles/root.scss"

const App = () => {

  const [history, setHistory] = useState([ {board: Array(9).fill(null), isXNext: true},
   ]);

  // Used to set Index of history Array of Objects above 
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove]

  console.log('history', history)

  // Changed this to history when implementing logic for game history
  // const [board, setBoard] = useState(Array(9).fill(null));
  // // console.log(board);

  // removed this for implementing game history
  // const [isXNext, setIsXNext] = useState(false);
  // // console.log('board rerender');

  // Changed to below to reference 
  // const winner = calculateWinner(board);
  // console.log(winner);

  const winner = calculateWinner(current.board);

  const message = winner 
    ? `Winner is ${winner}` 
    // Changed below line to implement Game History Logic
    // : `Next player is ${isXNext ? 'X' : 'O'}`;
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;


      const handleSquareClick = (position) => {
          // To Update to a Value state
          // setBoard(5);

          // If the board position exists, has an 'X' or 'O' then it will exit this function. Rather than not being able to toggle between 'X' and 'O'
          // Changed to below to implement 'Game History Logic'
          // if(board[position] || winner) {
          //     return;
          // }

          if(current.board[position] || winner) {
              return;
          }

          // Changed to 'setHistory' as part of 'Game History' logic implementation
          // setBoard((prev) => {
          
          setHistory((prev) => {

            const last = prev[prev.length - 1];

              // changed when implementing 'Game History' logic
              // return prev.map((square, pos) => {
              const newBoard = last.board.map((square, pos) => {
                  if(pos === position) {
                      // changed when implement 'Game History' logic
                      // return isXNext ? 'X' : '0';
                      return last.isXNext ? 'X' : '0';
                  }
                      return square;
              });

              return prev.concat({ board: newBoard, isXNext: !last.isXNext })
          });

          // No longer need this when implementing logic for 'Game History Logic'
          // setIsXNext((prev) => !prev);
          setCurrentMove(prev => prev + 1);
      };

      return (
        <div className="app">
          <h1>TIC TAC TOE</h1>
          <h2>{ message }</h2>
          {/* changed when implementing 'Game History' logic */}
          {/* <Board board={board} handleSquareClick={handleSquareClick} /> */}
          <Board board={current.board} handleSquareClick={handleSquareClick} />
        </div>
      );
    };

export default App;
