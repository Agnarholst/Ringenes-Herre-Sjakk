const myName: string = "Agnar";

console.log(myName);

const chessBoard: Array<String> = [];

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters);

let amount = 0;

function setSquareIDs() {
  for (let i = 1; i <= 8; i++) {
    for (let letter in letters) {
      let squareId: string = letters[letter] + i;
      chessBoard.push(squareId);
      amount++;
    }
  }
}

setSquareIDs();

console.log(amount);
console.log();
console.log(chessBoard);
