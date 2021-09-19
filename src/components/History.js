import React from 'react'

// Destructured history in App.js to get access to the State
const History = ({ history, moveTo, currentMove }) => {
    return (
    <div className="history-wrapper">
        <ul className="history">
            {
                // Using '_' because not intending to use the actual value, and instead of the 2nd parameter being index, relabeling to 'move' to reprez the move 
                history.map((_, move) => {
                return (
                <li key={move}>
                    <button 
                    className={`btn-move ${move === currentMove} ? 'active' : ''}`}
                    // Replaced inline styles with SASS-Styling
                    //    style={{
                    //        fontWeight: move === currentMove ? 'bold' : 'normal',
                    //    }} 
                    type="button" onClick={() => {
                        moveTo(move)
                    }}>{ move === 0 ? 'Go to game start' : `Go to move #${move}` }</button>
                </li>
                );
            })}
        </ul>
    </div>
    )
}

export default History
