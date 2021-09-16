import React from 'react'



const Square = ({ value, onClick }) => {
// const Square = ({ value, children }) => {

    // console.log(props);
    return (
        <div>
            <button 
            type="button" 
            className="square" 
            onClick={onClick}
            >
            { value }
            </button>
        </div>
    )
}

export default Square
