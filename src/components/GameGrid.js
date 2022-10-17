import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import jam from '../assets/images/jam.png';
import chocolate from '../assets/images/chocolate.png';
import gummy from '../assets/images/gummy.png';
import bananaSplit from '../assets/images/banana-split.png';
import caramelApple from '../assets/images/caramelized-apple.png';
import lollipop from '../assets/images/lollipop.png';
import marshmallow from '../assets/images/marshmallow.png';
import pudding from '../assets/images/pudding.png';
import pie from '../assets/images/pie.png';
import bear from '../assets/images/gummy-bear.png';
import meringue from '../assets/images/meringue.png';
import iceCream from '../assets/images/ice-cream.png';

function GameGrid(props) {

    let images = [jam, chocolate, gummy, bananaSplit, caramelApple, lollipop, marshmallow, pie, pudding, bear, meringue, iceCream];

    const [cards, setNewCards] = useState(images);

    //function for shuffling array using Fisher-Yates algorithm
    const shuffleArray = (array) => {
        for(let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    }
    
    useEffect(() => {
        shuffleArray(cards);
        setNewCards(cards);
    });

    return(
        <div className='grid-container'>
            {cards.map(card => (
                 <Cards src={card} handleLogic={props.handleLogic} /> 
            ))}
        </div>
    )
} 

export default GameGrid;
