import React from 'react'



const Square = ({ value, onClick, isWinningSquare }) => {
// const Square = ({ value, children }) => {
    console.log('square rerender');

    // console.log(props);
    return (
        <div>
            <button 
            type="button" 
            // className="square" 
            onClick={onClick}
            // Changed to use SASS Dynamic styling
            // style={{fontWeight: isWinningSquare ? 'bold' : 'normal'}}
            className={`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange' }`}
            >
            { value }
            </button>
        </div>
    )
}

export default Square
