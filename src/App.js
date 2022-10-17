import React, { useState } from 'react';
import '../src/App.css'
import GameGrid from './components/GameGrid';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsArray, setCards] = useState([]);

  const handleScore = () => {
    setCurrentScore(currentScore + 1);
  }

  const getBestScore = () => {
    setBestScore((prevScore) => Math.max(prevScore, currentScore));
  }

  const handleClick = (card) => {
    setCards((prevArr) => [...prevArr, card]);
  }

  const reset = () => {
    setCurrentScore(0);
    setCards([]);
  }

  const handleLogic = (e) => {
    if(!cardsArray.includes(e.target.getAttribute('src'))) {
      handleClick(e.target.getAttribute('src'));
      handleScore();
    } else {
      getBestScore();
      reset();
    }
  }

  return(
    <div className='app'>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <GameGrid handleLogic={handleLogic}/>
      <Footer />
    </div>
  )
}

export default App;