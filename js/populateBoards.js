var boards = document.querySelectorAll(".chessboard");
var ps = document.querySelectorAll(".row p");
numPuzzles = 0;
pieceDict = {
    Pawn: 'wP.png',
    Bishop: 'wB.png',
    Knight: 'wN.png',
    Rook: 'wR.png',
    Queen: 'wQ.png',
    King: 'wK.png'
}

function generateSheet() {


    document.getElementById('piece').src = './img/chesspieces/wikipedia/' + pieceDict[puzzles[numPuzzles].Level];
    document.querySelector('h2 span:nth-of-type(1)').textContent = puzzles[numPuzzles].Level;
    document.querySelector('h2 span:nth-of-type(2)').textContent = puzzles[numPuzzles].Module;

    for (var i = 0; i < boards.length; i++) {
        boardNum = 'board' + ((numPuzzles % boards.length) + 1);
        board = document.querySelector('#' + boardNum);


        try {
            ChessBoard(boardNum, {
                position: puzzles[numPuzzles].FEN,
            });
        } catch (err) {
            alert("no more puzzles!");
        }

        ps[i].textContent = puzzles[numPuzzles].Question;

        if (puzzles[numPuzzles].FEN.match(/ b /)) {
            board.classList = "chessboard";
            document.querySelector('#' + boardNum).classList.add("black-to-move");
        } else {
            board.classList = "chessboard";
            document.querySelector('#' + boardNum).classList.add("white-to-move");
        }
        numPuzzles++;
    }

    if (numPuzzles === puzzles.length) {
        numPuzzles = 0;
    }

}