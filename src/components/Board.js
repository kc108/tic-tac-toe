import React from 'react'
import Square from './Square'

const Board = ({ board, handleSquareClick, winningSquares }) => {
    
    const renderSquare = (position) => {

        const isWinningSquare = winningSquares.includes(position)

        return <Square value={board[position]} onClick={() => handleSquareClick(position)}
        isWinningSquare={isWinningSquare}
        />
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


