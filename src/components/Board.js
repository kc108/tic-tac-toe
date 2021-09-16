import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    console.log(board);

    const [isNext, setIsNext] = useState(false);
    console.log('board rerender');

    const handleSquareClick = (position) => {
        // To Update to a Value state
        // setBoard(5);

        // If the board position exists, has an 'X' or 'O' then it will exit this function. Rather than not being able to toggle between 'X' and 'O'
        if(board[position]) {
            return;
        }

        setBoard((prev) => {

            return prev.map((square, pos) => {

                if(pos === position) {
                    return isNext ? 'X' : '0';
                }
                    return square;
            })

        })

        setIsNext((prev) => !prev);
    };

    const renderSquare = (position) => {
        return <Square value={board[position]} onClick={() => handleSquareClick(position)}/>
    }

    return (
        <div className="board">
            <div className="board-row">
                {/* onClick will only work this way because this is the way JS works */}
                { renderSquare(0) }
                { renderSquare(1) }
                { renderSquare(2) }
                {/* REPLACING THE BELOW WITH ABOVE */}
                {/* <Square value={board[0]} onClick={() => {
                    handleSquareClick(0)
                }} /> */}
                {/* <Square value={board[1]} /> */}
            </div>
            <div className="board-row">
                { renderSquare(3) }
                { renderSquare(4) }
                { renderSquare(5) }
            </div>
            <div className="board-row">
                { renderSquare(6) }
                { renderSquare(7) }
                { renderSquare(8) }
            </div>
        </div>
    )
}

export default Board;


