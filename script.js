let currentPlayer = "red";

const redPath = [
    "r1", "r2", "r3", "r4", "r5",
    "r6", "r7", "r8", "r9", "r10", "r11", "r12", "r13",
    "g1", "g2", "g3", "g4", "g5",
    "g6", "g7", "g8", "g9", "g10", "g11", "g12", "g13",
    "y1", "y2", "y3", "y4", "y5",
    "y6", "y7", "y8", "y9", "y10", "y11", "y12", "y13",
    "b1", "b2", "b3", "b4", "b5",
    "b6", "b7", "b8", "b9", "b10", "b11", "b12",
    "rh1", "rh2", "rh3", "rh4", "rh5",
    "win-red"

];

const greenPath = [
    "g1", "g2", "g3", "g4", "g5",
    "g6", "g7", "g8", "g9", "g10", "g11", "g12", "g13",
    "y1", "y2", "y3", "y4", "y5",
    "y6", "y7", "y8", "y9", "y10", "y11", "y12", "y13",
    "b1", "b2", "b3", "b4", "b5",
    "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13",
    "r1", "r2", "r3", "r4", "r5",
    "r6", "r7", "r8", "r9", "r10", "r11", "r12",
    "gh1", "gh2", "gh3", "gh4", "gh5",
    "win-green"

];


const yellowPath = [
    "y1", "y2", "y3", "y4", "y5",
    "y6", "y7", "y8", "y9", "y10", "y11", "y12", "y13",
    "b1", "b2", "b3", "b4", "b5",
    "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13",
    "r1", "r2", "r3", "r4", "r5",
    "r6", "r7", "r8", "r9", "r10", "r11", "r12", "r13",
    "g1", "g2", "g3", "g4", "g5",
    "g6", "g7", "g8", "g9", "g10", "g11", "g12",
    "yh1", "yh2", "yh3", "yh4", "yh5",
    "win-yellow"

];


const bluePath = [
    "b1", "b2", "b3", "b4", "b5",
    "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13",
    "r1", "r2", "r3", "r4", "r5",
    "r6", "r7", "r8", "r9", "r10", "r11", "r12", "r13",
    "g1", "g2", "g3", "g4", "g5",
    "g6", "g7", "g8", "g9", "g10", "g11", "g12", "g13",
    "y1", "y2", "y3", "y4", "y5",
    "y6", "y7", "y8", "y9", "y10", "y11", "y12",
    "bh1", "bh2", "bh3", "bh4", "bh5",
    "win-blue"

];



updateBlinkingBoard();
// ------------Player Selection Script --------------------
function nextPlayer() {
    const players = ["red", "green", "blue", "yellow"];
    const currentIndex = players.indexOf(currentPlayer);
    currentPlayer = players[(currentIndex + 1) % players.length];
    updateBlinkingBoard();
}
// ------------Dice Roll Script --------------------
document.getElementById("red-dice").addEventListener("click", function () {
    if (currentPlayer !== "red") {
        alert("It's not Red's turn!❌");
        return;
    }
    var redDiceValue = Math.floor(Math.random() * 6) + 1;
    var redDiceImage = "images/" + "dice_" + redDiceValue + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", redDiceImage);

    const homePieces = [...document.querySelectorAll('.red-piece')].filter(p => !p.dataset.position);

    if (redDiceValue === 6) {
        if (homePieces.length > 0) {
            enableTokenClick("red"); 
            enableBoardPieceMove("red", 6); 
        } else {
            enableBoardPieceMove("red", 6);
        }
    } else {
        enableBoardPieceMove("red", redDiceValue);
        nextPlayer();
    }
});
document.getElementById("green-dice").addEventListener("click", function () {
    if (currentPlayer !== "green") {
        alert("It's not Green's turn!❌");
        return;
    }
    var greenDiceValue = Math.floor(Math.random() * 6) + 1;
    var greenDiceImage = "images/" + "dice_" + (greenDiceValue) + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", greenDiceImage);
    if (greenDiceValue === 6) {
        alert("Red rolled a 6! You can move a piece out of the home area.🎲");
        enableTokenClick("green");
    } else {
        // alert("Next player's turn: Blue 💙");
        enableBoardPieceMove("green", greenDiceValue);
        nextPlayer();
    }
});
document.getElementById("blue-dice").addEventListener("click", function () {
    if (currentPlayer !== "blue") {
        alert("It's not Blue's turn!❌");
        return;
    }
    var blueDiceValue = Math.floor(Math.random() * 6) + 1;
    var blueDiceImage = "images/" + "dice_" + blueDiceValue + ".png";

    document.querySelectorAll("img")[2].setAttribute("src", blueDiceImage);
    if (blueDiceValue === 6) {
        enableTokenClick("blue");
        alert("Red rolled a 6! You can move a piece out of the home area.🎲");
    }
    else {
        // alert("Next player's turn: Yellow 💛");
        enableBoardPieceMove("blue", blueDiceValue)
        nextPlayer();
    }
});
document.getElementById("yellow-dice").addEventListener("click", function () {
    if (currentPlayer !== "yellow") {
        alert("It's not Yellow's turn!❌");
        return;
    }
    var yellowDiceValue = Math.floor(Math.random() * 6) + 1;
    var yellowDiceImage = "images/" + "dice_" + yellowDiceValue + ".png";

    document.querySelectorAll("img")[3].setAttribute("src", yellowDiceImage);
    if (yellowDiceValue === 6) {
        alert("Red rolled a 6! You can move a piece out of the home area.🎲");
        enableTokenClick("yellow");
    } else {
        // alert("Next player's turn: Red ❤️");
        enableBoardPieceMove("yellow", yellowDiceValue);
        nextPlayer();
    }
});

// ----------Piece Selection ----------
function enableTokenClick(color) {
    const pieces = document.querySelectorAll(`.${color}-piece`);

    function movePiece() {
        if (this.dataset.position) {
            alert("This piece is already on the board!❌");
            return;
        }

        const startCell = {
            red: "r1",
            green: "g1",
            blue: "b1",
            yellow: "y1"
        }[color];

        const targetCell = document.getElementById(startCell);
        targetCell.appendChild(this);
        this.dataset.position = startCell;

        pieces.forEach(p => p.removeEventListener("click", movePiece));

        nextPlayer();
    }

    pieces.forEach(piece => {
        if (!piece.dataset.position) {
            piece.addEventListener("click", movePiece);
        }
    });
}

// ----------Piece Movement ----------

function enableBoardPieceMove(color, diceValue) {
    const path = {
        red: redPath,
        green: greenPath,
        blue: bluePath,
        yellow: yellowPath
    }[color];
    const pieces = document.querySelectorAll(`.${color}-piece[data-position]`);
    function movePiece(event) {
        const piece = event.target;
        let currentPosition = piece.dataset.position;
        let currentIndex = path.indexOf(currentPosition);
        let nextIndex = currentIndex + diceValue;

        if (nextIndex < path.length) {
            let nextPosition = path[nextIndex];
            let targetCell = document.getElementById(nextPosition)
            const opponentPiece = [...targetCell.querySelectorAll(".piece")].find(p => {
                return !p.classList.contains(`${color}-piece`);
            });

            if (opponentPiece) {
                opponentPiece.removeAttribute("data-position");

                const homeBoardId = {
                    red: "red-board",
                    green: "green-board",
                    blue: "blue-board",
                    yellow: "yellow-board"
                }[
                    [...opponentPiece.classList].find(c =>
                        ["red", "green", "blue", "yellow"].includes(c.split("-")[0])
                    ).split("-")[0]
                ];

                const homeBoard = document.getElementById(homeBoardId);
                const span = homeBoard.querySelector("span:not(:has(.piece))");
                if (span) span.appendChild(opponentPiece);

                alert("💥 Boom! You Eliminated a Player.");
            }

            targetCell.appendChild(piece);
            piece.dataset.position = nextPosition;
        } else {
            alert("You can't move this piece!❌");
        }

        // ---------------- WIN DETECTION —-------------
        const winningPosition = {
            red: "win-red",
            green: "win-green",
            yellow: "win-yellow",
            blue: "win-blue"
        }[color];

        const allPieces = document.querySelectorAll(`.${color}-piece`);
        const won = [...allPieces].every(
            piece => piece.dataset.position === winningPosition
        );

        if (won) {
            alert(`${color.toUpperCase()} wins the game! 🏆`);
            return; 
        }

        pieces.forEach(p => p.removeEventListener("click", movePiece));
    }
    pieces.forEach(piece => {
        piece.addEventListener("click", movePiece);
        // nextPlayer();
    });
}





// -------------------blinking javascript--------------------------

function updateBlinkingBoard() {
    document.querySelectorAll('.board').forEach(board => board.classList.remove('blink'));
    document.getElementById(`${currentPlayer}-board`).classList.add('blink');
}
