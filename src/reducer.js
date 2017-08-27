
export function changeSquare(i) {
  console.log("changeSquare", i);
  return {
    type: "CHANGE_SQUARE",
  }
}

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};


export default function reducer() {
  return initialState;
}