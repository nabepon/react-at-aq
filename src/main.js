import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducer";

const store = createStore(reducer);

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