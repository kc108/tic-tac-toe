import React from 'react'



const Square = ({ value, onClick, isWinningSquare }) => {
// const Square = ({ value, children }) => {
    console.log('square rerender');

    // console.log(props);
    return (
        <div>
            <button 
            type="button" 
            className="square" 
            onClick={onClick}
            style={{fontWeight: isWinningSquare ? 'bold' : 'normal'}}
            >
            { value }
            </button>
        </div>
    )
}

export default Square
