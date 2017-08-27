import calculateWinner from "./calculateWinner";

export function changeSquare(i) {
  console.log("changeSquare", i);
  return dispatch => {
    setTimeout(() =>{
      dispatch({
        type: "CHANGE_SQUARE",
        payload: i,
      })
    }, 1000);
  }
}

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};

export default function reducer(state, action) {
  console.log("reducer", state);
  if(!state){
    return initialState;
  }
  if(action.type === "CHANGE_SQUARE"){
    const squares = state.squares.slice();
    if (calculateWinner(squares) || squares[action.payload]) {
      return state;
    }
    squares[action.payload] = state.xIsNext ? 'X' : 'O';
    return {
      ...state,
      squares: squares,
      xIsNext: !state.xIsNext,
    };
  }
  return state;
}