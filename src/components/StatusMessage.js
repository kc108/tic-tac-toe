import React from 'react'

const StatusMessage = ({ winner, current }) => {

// const message = winner 
    // ? `Winner is ${winner}` 
//     // Changed below line to implement Game History Logic
//     // : `Next player is ${isXNext ? 'X' : 'O'}`;
//     : `Next player is ${current.isXNext ? 'X' : 'O'}`;

const noMovesLeft = current.board.every((el) => el !== null);

    return (
    <div className="status-message">
        {/* '!!0' in React ensures that '0' is not returned and 0 is instead used as 'null' .. Condition needs a 'fragment' because there are multiple conditions*/}

        {winner && <>
        Winner is {' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                {winner}
            </span>
        </>
        }
        {!winner && 
            !noMovesLeft && 
            <>
            Next player is <span className={current.isXNext === 'X' ? 'text-green' : 'text-orange'}>{current.isXNext ? 'X' : 'O'} </span>
            </>} 
        {!winner && noMovesLeft && <>
        <span className="text-green">X</span> and <span className="text-orange">0</span>tied
        </>} 
    </div>
    );
};

export default StatusMessage;
