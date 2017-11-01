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
        try {
            ChessBoard('board' + ((numPuzzles % boards.length) + 1), {
                position: puzzles[numPuzzles].FEN,
                //showNotation: false,
            });
        } catch(err) {
            alert("no more puzzles!");
        }
        ps[i].textContent = puzzles[numPuzzles].Question;
        numPuzzles++;
    }

    if (numPuzzles === puzzles.length) {
        numPuzzles = 0;
    }

}

// while (numPuzzles < boards.length) {
//     var row = document.createElement('div');
//     row.classList.add("row");
//     containerDiv.appendChild(row);

//     for (var j = 0; j < MAX_BOARDS_PER_ROW; j++) {
//         addPuzzle();
//     }
// }

// function addPuzzle() {
//     containerDiv.lastElementChild.innerHTML += '<div class="col-xs-12 col-md-6 col-lg-4">' +
//     '<p>'+ (numPuzzles+ 1) + '. ' + puzzles[numPuzzles].Question + '</p>' + '<div id=' + 'board' + numPuzzles + ' style="width: 300px"></div>' +
//     '<p>(Level: ' + puzzles[numPuzzles].Level + '; Module: ' + puzzles[numPuzzles].Module + ')</p>'+'</div>';

//     ChessBoard('board' + numPuzzles, {
//         //draggable: true,
//         position: puzzles[numPuzzles].FEN,
//         showNotation: false,
//     });

//     numPuzzles++;
// }