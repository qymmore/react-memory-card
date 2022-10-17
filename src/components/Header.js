import React from 'react';

function Header(props) {
    return(
        <div className='score-board'>
            <h1>Dessert Game</h1>
            <div className='scores'>
                <h2>Score: {props.currentScore} </h2>
                <h2>Best score: {props.bestScore} </h2>
            </div>
        </div>
    )
} 

export default Header;