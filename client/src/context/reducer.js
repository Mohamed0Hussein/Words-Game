import { FETCH_WORDS, GAME_FINISHED, INCREMENT_ROUND, INCREMENT_SCORE, SET_RANK, SET_USER_NAME, START_GAME, USER_ANSWERED} from "./actions";
// import { initialState } from "./appContext";
const reducer = (state ,action) => {
    if (action.type === START_GAME) {
        return {
          ...state,
          finished:false,
          round:0,
          score:0,
          showAnswer:false
        };
    }
    if (action.type === SET_USER_NAME) {
        return {
          ...state,
          userName:action.payload.name
        };
    }
    if(action.type === FETCH_WORDS){
      return{
        ...state,
        words:action.payload.words
      }
    }
    if(action.type === USER_ANSWERED){
      return{
        ...state,
        currentAnswer:action.payload.answer,
        showAnswer:true
      }
    }
    if(action.type === INCREMENT_ROUND){
      return{
        ...state,
        round:state.round + 1
      }
    }
    if(action.type === INCREMENT_SCORE){
      return{
        ...state,
        score:state.score + 1
      }
    }
    if(action.type === GAME_FINISHED){
      return{
        ...state,
        finished:true,
        round:10
      }
    }
    if(action.type === SET_RANK){
      return{
        ...state,
        rank:action.payload.rank
      }
    }

    throw new Error(`no such action : ${action.type}`)
}   

export default reducer;