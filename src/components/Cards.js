import React from 'react';

//function for displaying the cards in the grid
function Cards(props) {
    return(
        <div className='card'>
            <img src={props.src} alt='' onClick={props.handleLogic}/>
        </div>
    )
}

export default Cards;