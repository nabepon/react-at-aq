import React from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";
import { connect } from 'react-redux';
import { changeSquare } from "./reducer";

export class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.data.squares[i]} onClick={() => {
      this.props.dispatch(changeSquare(i));
    }} />;
  }
  render() {
    const winner = calculateWinner(this.props.data.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.data.xIsNext ? 'X' : 'O');
    }
    // const status = 'Next player: X';

    console.log(this.props);

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  }
};

const connected = connect(mapStateToProps)(Board);

export default connected;
