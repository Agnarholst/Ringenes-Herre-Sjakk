// Lager et Array med IDer til 64 ruter

const chessBoard: string[] = [];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [
  ["king-b.svg", "king-w.svg", "queen-b.svg", "queen-w.svg"],
  [
    "bishop-b.svg",
    "bishop-w.svg",
    "knight-b.svg",
    "knight-w.svg",
    "rook-b.svg",
    "rook-w.svg",
  ],
  ["pawn-b.svg", "pawn-w.svg"],
];

function setSquareIDs() {
  for (let i = 1; i <= 8; i++) {
    for (let letter in letters) {
      let squareId: string = letters[letter] + i;
      chessBoard.push(squareId);
    }
  }
}

setSquareIDs();
console.log(chessBoard[chessBoard.length - 32]);

// Lager brettet basert på IDene

function makeBoard() {
  let arrayIndex = 64;
  for (let i = 1; i <= 8; i++) {
    arrayIndex = arrayIndex - 8;
    //const container1 = document.createElement("div");
    // Lag en div med container navn: container1, container2...
    let divRows = document.createElement("div");
    divRows.classList.add("boardContainer");

    let squareColorClass = ["lightSquare", "darkSquare"];
    for (let j = 1; j <= 8; j++) {
      let k = j;
      if (i % 2) {
        k = j + 1;
      }
      const divSquares = document.createElement("div");
      divSquares.setAttribute("id", chessBoard[arrayIndex]);
      divSquares.classList.add(squareColorClass[k % 2]);
      divRows.appendChild(divSquares);
      document.body.appendChild(divRows);
      arrayIndex++;
      if (j == 1) {
        const divNum = document.createElement("div");
        divSquares.appendChild(divNum);
        divNum.innerHTML = `${9 - i}`;
        divNum.classList.add("squareNum");
        divNum.style.color = "#b88762";
        if (k % 2) {
          divNum.style.color = "#edd6b0";
        }
        if (i == 8) {
          divNum.style.right = "25px";
        }
      }
      if (i == 8) {
        const divLetter = document.createElement("div");
        divSquares.appendChild(divLetter);
        divLetter.innerHTML = `${letters[j - 1]}`;
        divLetter.classList.add("squareLetter");
        divLetter.style.color = "#b88762";
        if (k % 2) {
          divLetter.style.color = "#edd6b0";
        }
        if (j == 1) {
          divLetter.style.left = "25px";
        }
      }
    }

    arrayIndex = arrayIndex - 8;
  }
}

function getPieces() {
  for (let i = 0; i < 3; i++) {
    for (let piece in pieces[i]) {
      let piecePath = "../../images/pieces-basic-svg/" + pieces[i][piece];
      console.log(pieces[i][piece]);
      const img = document.createElement("img");
      img.src = piecePath;
      document.body.appendChild(img);
      console.log(`This ${pieces[i][piece]}`);
      if (i === 1) {
        for (let j = 0; j < 1; j++) {
          let piecePath = "../../images/pieces-basic-svg/" + pieces[i][piece];
          const img = document.createElement("img");
          img.src = piecePath;
          document.body.appendChild(img);
        }
      }
      if (i === 2) {
        for (let j = 0; j < 7; j++) {
          let piecePath = "../../images/pieces-basic-svg/" + pieces[i][piece];
          const img = document.createElement("img");
          img.src = piecePath;
          document.body.appendChild(img);
        }
      }
    }
  }
}

makeBoard();
getPieces();
