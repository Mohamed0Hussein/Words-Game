import React from 'react';
import './cardStyle.css';
import { useAppContext } from '../context/appContext';

export const Card = ({ color, sendAnswer }) => {
  const { currentAnswer, userAnswered } = useAppContext();

  function answered() {
    userAnswered(type);
    sendAnswer(type);
  }

  let chosenColor;
  let type;

  // Determine the chosen color and corresponding type based on the provided color prop
  switch (color) {
    case 'red':
      chosenColor = 'btn btn-danger';
      type = 'noun';
      break;
    case 'green':
      chosenColor = 'btn btn-success';
      type = 'verb';
      break;
    case 'blue':
      chosenColor = 'btn btn-primary';
      type = 'adverb';
      break;
    case 'yellow':
      chosenColor = 'btn btn-warning';
      type = 'adjective';
      break;
    default:
      chosenColor = 'btn';
      type = '';
  }

  return (
    <div className='main'>
      <div className='card'>
        <button className={chosenColor} onClick={answered}>
          {type}
        </button>
      </div>
    </div>
  );
};
