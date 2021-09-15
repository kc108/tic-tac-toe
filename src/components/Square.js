import React from 'react'



const Square = ({ value }) => {
// const Square = ({ value, children }) => {

    // console.log(props);
    return (
        <div>
            <button type="button" className="square">{ value }</button>
        </div>
    )
}

export default Square
