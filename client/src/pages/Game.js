import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './gameStyle.css';
import { Card } from '../components/Card';
import { useAppContext } from '../context/appContext';

function Game() {
  const navigate = useNavigate();
  const {
    userName,
    words,
    round,
    incrementRound,
    incrementScore,
    score,
    showAnswer,
    fetchWords,
    finished,
    finishGame,
    rank,
    setRank,
  } = useAppContext();

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);

  // Fetch words from API when the component mounts
  useEffect(() => {
    if (words.length === 0) {
      axios.get('/api/words').then((res) => {
        fetchWords(res.data.words);
      });
    }
  }, []);

  // Calculate and update rank when the game finishes
  useEffect(() => {
    if (finished) {
      const userRank = score * 10;
      axios.post('/api/rank', { score: userRank }).then((res) => {
        setRank(res.data.finalScore);
      });
    }
  }, [finished, score, setRank]);

  // Function to handle user's answer selection
  function getAnswer(answer) {
    const isCorrect = answer === words[round]?.pos;

    // Update score based on the answer correctness
    if (isCorrect) {
      incrementScore();
    }

    setIsAnswerCorrect(isCorrect);
    incrementRound();

    // Finish the game if it's the last round
    if (round === 9) {
      finishGame();
    }
  }

  return (
    <div>
      {/* Render different views based on game state */}
      {finished ? (
        <div className='finishContainer'>
          {/* Display final score and rank */}
          {/* <p>{`${userName}, Your score is: ${score} / 10`}</p> */}
          <p>{`Your score is higher than ${rank}% of the scores`}</p>
          {/* Button to start a new game */}
          <button className='btn btn-secondary rerun' onClick={() => navigate('/')}>
            Try Again
          </button>
        </div>
      ) : (
        <div className='mainContainer'>
          {/* Display current word and answer status */}
          <p>{`Let the learning begin, ${userName}!! Your Word is:`}</p>
          <p className='word'>{words[round]?.word || 'None'}</p>
          {/* Display answer status */}
          {showAnswer && (
            <button
              className={`btn ${isAnswerCorrect ? 'btn-success' : 'btn-danger'} status`}
            >
              {isAnswerCorrect ? 'Correct! ✅' : 'Incorrect! ✖️'}
            </button>
          )}
          {/* Display current score */}
          {/* <p>{`Your Score is ${score} / ${round}`}</p> */}
          {/* Render answer cards */}
          <div className='cardsContainer'>
            <Card color='red' sendAnswer={getAnswer} />
            <Card color='green' sendAnswer={getAnswer} />
            <Card color='blue' sendAnswer={getAnswer} />
            <Card color='yellow' sendAnswer={getAnswer} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
