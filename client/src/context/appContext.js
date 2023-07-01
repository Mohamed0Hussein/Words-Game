import React, {  useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';
import { FETCH_WORDS, GAME_FINISHED, INCREMENT_ROUND, INCREMENT_SCORE, SET_RANK, SET_USER_NAME, START_GAME, USER_ANSWERED } from './actions';
const initialState = {
    userName:"",
    words:[],
    score:0,
    round:0,
    currentAnswer:'',
    finished:false,
    showAnswer:false,
    rank:0
    
}
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  
  const [state, dispatch ] = useReducer(reducer,initialState);
  const finishGame = () => {
    dispatch({
      type:GAME_FINISHED
    })
  }
  const setRank = (rank) => {
    dispatch({
      type:SET_RANK,
      payload:{
        rank
      }
    })
  }
  const startGame = () => {
    dispatch({
      type:START_GAME
    })
  }
  const userAnswered = (ans) => {
    dispatch({
      type:USER_ANSWERED,
      payload:{
        answer:ans
      }
    })
  }
  const incrementScore = () => {
    dispatch({
      type:INCREMENT_SCORE
    })
  }
  const incrementRound = () => {
    dispatch({
      type:INCREMENT_ROUND
    })
  }
  const setUserName = (name) => {
    dispatch({
        type:SET_USER_NAME,
        payload:{
            name
        }
    })
  }
  const fetchWords = (words) => {
    dispatch({
      type:FETCH_WORDS,
      payload:{
        words
      }
    })
  }
   useEffect(() => {
   },[])
   return (
    <AppContext.Provider
      value={{
        ...state,
        setUserName,
        fetchWords,
        userAnswered,
        incrementRound,
        incrementScore,
        startGame,
        finishGame,
        setRank
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
