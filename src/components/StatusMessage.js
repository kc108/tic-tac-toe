import React from 'react'

const StatusMessage = ({ winner, current }) => {

// const message = winner 
    // ? `Winner is ${winner}` 
//     // Changed below line to implement Game History Logic
//     // : `Next player is ${isXNext ? 'X' : 'O'}`;
//     : `Next player is ${current.isXNext ? 'X' : 'O'}`;

const noMovesLeft = current.board.every((el) => el !== null);

    return (
    <h2>
        {/* '!!0' in React ensures that '0' is not returned and 0 is instead used as 'null' */}
        {!!0 && winner && `Winner is ${winner}`}
        {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`} 
        {!winner && noMovesLeft && 'X and O tied'} 
    </h2>
    );
};

export default StatusMessage;
