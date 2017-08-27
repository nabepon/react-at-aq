import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

class Game extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </Provider>
    );
  }
}

// ========================================

export default function main(){
  ReactDOM.render(
    <Game />,
    document.getElementById('container')
  );
}