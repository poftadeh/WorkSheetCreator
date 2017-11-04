var puzzles = [{
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/8/5p1p/6P1/2P1p3/P3P3/8 w - -",
        "Question": "Let's start with something simple. Circle all the squares each white pawn can move to. Pay attention to the captures as well as the open squares.",
        "Answer": "a3, a4, c4, f5, g5, h5"
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/pp2p3/1p2Pp2/8/8/6p1/6P1/8 b - -",
        "Question": "Now circle the squares each black pawn can move to. Keep the same principles as the previous question in mind.",
        "Answer": "a6, a5, b5, f5"
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/1pp4p/1pP4P/1P3p2/p3pPp1/P3P1P1/8 w - -",
        "Question": "Only one of our white pawns can move in this position, but which one? Circle it.",
        "Answer": "c5"
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/8/8/8/3P4/3P4/8 w - -",
        "Question": "What is it called when two pawns are stacked in the rank like this?  This is an important concept as we will see later.",
        "Answer": "Doubled pawns."
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/8/8/8/7P/P7/8 w - -",
        "Question": "Let's imagine that these two pawns are having race. Who can get to the end faster? The left pawn, the right pawn, or is it a tie?",
        "Answer": "Tie."
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/p7/1p5p/6p1/5p2/6p1/7P/8 w - -",
        "Question": "Our white pawn needs to travel to the other end of the board. How does it get there? Draw a path showing its journey.",
        "Answer": "axg3, bxf4, fxg5, gxh6, h7, h8"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "8/8/3P4/p2R2P1/8/P7/8/8 w - -",
        "Question": "Let's test some rook basics: circle all the squares this rook can move to.",
        "Answer": "a5,b5,c5,e5,f5,d4,d3,d2,d1"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "7R/8/8/3r4/8/8/8/8 b - -",
        "Question": "Which rook has more squares it can travel to? The white rook, the black rook, or are they both equal?",
        "Answer": "Both the same"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "8/8/2pPP3/2PRp3/2pPP3/8/8/8 w - -",
        "Question": "Looks like our rook is stuck. Play the only move that sets it free from this pawn prison. ",
        "Answer": "Rxe5"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "3r2r1/3p4/8/8/3R2p1/3R4/8/8 w - -",
        "Question": "Which of black's pawns should we capture with our white rook? Think of which one gives us a better trade. Now, Circle the correct pawn:",
        "Answer": "d7"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "r7/8/P7/8/R7/8/8/8 b - -",
        "Question": "Which of white's pieces are we allowed to capture with our black rook? Only the pawn, only the rook, or both?",
        "Answer": "pawn"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "8/8/8/8/8/8/4R3/4R3 w - -",
        "Question": "What do we call two rooks doubled in one rank like this? This is a powerful formation that we'll see in a lot of our games.",
        "Answer": "A battery."
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "8/1b6/8/8/8/4B3/8/8 w - -",
        "Question": "Can we ever capture black's bishop with our white bishop? Why or why not?",
        "Answer": "No."
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "8/8/8/8/8/1P4P1/P1PP1P1P/R4B1R w - -",
        "Question": "Where can we move our bishop so that it has the longest diagonal?",
        "Answer": "Bg2"
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "6r1/r3p3/5p2/2p1B3/1p6/8/8/2b5 w - -",
        "Question": "Our bishop is in trouble. Find the only square it can move to without being captured.",
        "Answer": "Bh2"
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "r6r/pbpp1pbp/1p4p1/4p3/8/1P2P2P/PBPPBPP1/R6R b - -",
        "Question": "Circle the \"fianchettoed\" bishops in this diagram from both sides. What is special about this type of bishop?",
        "Answer": "b7, g7"
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "8/p3p2p/1p1p2p1/R1P1B2B/8/8/8/8 w - -",
        "Question": "All our pieces are under attack. Which one do we save? Try ranking them from least to most valuable.",
        "Answer": "the rook."
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "r7/7P/4P3/1P6/2P1P3/1P3PP1/P2P4/1B6 w - -",
        "Question": "Bishop maze. Draw the path showing how the white bishop captures to the black rook.",
        "Answer": "Bd3, Bf1, Bh3, Bf5, Bg6, Be8, Bc6, Bxa1"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "8/pb3pb1/3p4/p5rp/1p4p1/1r6/8/1N6 w - -",
        "Question": "Mission: move the knight to the end of the board without landing on any squares attacked by black pieces.",
        "Answer": "Nd2, Nc4, Nxd6, Ne8"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "3n4/8/8/8/8/8/B7/8 w - -",
        "Question": "Move the bishop to a square that will trap enemy knight and keep it from moving without being captured. This is called 'corralling the knight'. ",
        "Answer": "Bd5"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "7R/8/8/8/8/8/8/n7 b - -",
        "Question": "Draw a path that allows the knight to capture the rook. This can be tricky, so try it on a real board first.",
        "Answer": "Nc2, Na3, Nc4, Ne5, Ng6, Nxh8"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "8/2PPPpP1/2r3r1/2R1n1R1/2r3r1/2PpPpP1/8/8 b - -",
        "Question": "What is the only square this knight is allowed to move to?",
        "Answer": "Nxd7"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "8/R1R1R1R1/3B3P/8/3P3P/PBP1P1P1/8/8 b - -",
        "Question": "Imagine that we had to place a black knight on this board. On what square would that knight attack the most white pieces?",
        "Answer": "f5"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "3N4/8/1n4n1/8/1n1n3n/3n1n2/5n2/8 w - -",
        "Question": "Mission: get the white knight all the way to the bottom of the board without landing on a square attacked by a black knight.",
        "Answer": "Nb6, Na5, Nc4, Na3, Nb1"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "1r5r/4pn2/2b5/4Q3/4P3/8/7b/4q3 w - -",
        "Question": "Circle all the pieces the white queen can capture.",
        "Answer": "b8, h8, h2, e7"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "3r3r/ppp2ppp/5n2/4p3/4P3/2N2P2/PPPQ2PP/3R4 w - -",
        "Question": "Is it a fair trade if we capture the rook with our queen?",
        "Answer": "Yes"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "b2n4/2p3b1/3p3n/r2Q2P1/7P/8/1n3q2/r7 w - -",
        "Question": "Find the only safe square for our queen. Pay attention to all the squares the black pieces are controlling.",
        "Answer": "Qb3"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "8/8/8/2PRBN2/8/8/8/8 w - -",
        "Question": "The queen can move like all of these pieces except for one. Circle the piece that can move in ways a queen cannot.",
        "Answer": "Knight"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "4r3/2p5/p5b1/8/r7/2b2n2/8/8 w - -",
        "Question": "Visualize: on what square could we place a white queen on this board so that it attacks every black piece?",
        "Answer": "c6"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "6q1/8/2q5/q7/7q/2q5/4q3/8 b - -",
        "Question": "Circle the square that is not being attacked by a black queen.",
        "Answer": "b1"
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "8/8/8/6k1/5n2/4K3/8/8 w - -",
        "Question": "Can the white king capture the black knight? Explain your answer using king move principles.",
        "Answer": "No."
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "8/8/2K4p/8/8/8/8/8 w - -",
        "Question": "Let's assume it's white's move. Could the white king capture the black pawn before it reaches the end of the board?",
        "Answer": "Yes."
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "3r1bbk/8/8/8/2K5/8/8/4q3 w - -",
        "Question": "Move our king to a safe square that's not attacked by an enemy piece.",
        "Answer": "Kb5"
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "3b4/3b4/p2r4/1pnb4/2pn4/2r5/1n6/2K1k3 w - -",
        "Question": "Making ONLY piece captures, get our king to the end of the board.",
        "Answer": "b2, c3, d4, c5, d6, d7 , d8"
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "6b1/p1qp4/4n3/8/r4n2/8/4P2r/4K3 w - -",
        "Question": "Without landing on a square attacked by an enemy piece, draw the path the white king can take to get to the top of the board.",
        "Answer": "Kd2, Ke3, Kf3, Kg4, Kf5, Kf6, Ke7, Ke8"
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "8/8/8/8/1q6/1b3BB1/8/1K4k1 w - -",
        "Question": "Which king has more legal squares? White or black?",
        "Answer": "White."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR w KQkq -",
        "Question": "What is wrong with this starting position? Carefully check every piece.",
        "Answer": "King/Queen are on the wrong square."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r1bqkb1r/pppp1ppp/2n2n2/4p1B1/4P3/2N2N2/PPPP1PPP/R2QKB1R b KQkq -",
        "Question": "Why is this position impossible?",
        "Answer": "Bishop"
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r2qr1k1/pppbbppp/2np1n2/1B6/3NP3/2N1B1P1/PPP2PBP/R2Q1RK1 w KQkq -",
        "Question": "Something is not quite right with these minor pieces. What is impossible about them?",
        "Answer": "Extra Bishop"
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r1bq1rk1/p1p2ppp/2p2n2/p2pp3/1bPP4/P1N2N2/1P2PPPP/R1BQ1RK1 b KQkq -",
        "Question": "Explain why we could never get this position in a real game. ",
        "Answer": "Extra Pawn on black side."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "rnb1k2r/ppp1qppp/5n2/1B6/8/P1P2N2/5PPP/R1BQK2R b KQkq -",
        "Question": "Examine the pieces and describe what makes this setup impossible.",
        "Answer": "Both kings in check."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r1bq1rk1/1p2pppp/p1np1n2/4b3/3NPP2/2NBB3/PPP3PP/R2Q1RK1 w KQkq -",
        "Question": "Why couldn't we arrive at this position in a real game?",
        "Answer": "black's dark-squared bishop "
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "rnbqk2r/pp3pbp/5np1/3p4/3P4/1PN2N2/P4PPP/R1B1KB1R w KQkq -",
        "Question": "Play a move that checks the black king in this position.",
        "Answer": "Bb5+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "r2qkb1r/pp3ppp/2ppbn2/8/1nBNP3/2N2Q2/PPPB1PPP/R3K2R b KQkq -",
        "Question": "What are the two ways black can check the white king in this position?",
        "Answer": "Nxc2+, Nd3+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "r1b1kbnr/ppp1pppp/2n5/8/2B1q3/5N2/PPPP1PPP/RNBQK2R w KQkq -",
        "Question": "The black queen just checked our king. Why can't we castle our king to safety? What rule does this violate?",
        "Answer": "No castles vs a check."
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "5B2/7N/4k3/8/3P4/5P2/4B1P1/RK5Q w - -",
        "Question": "There are six ways to check the black king. Can you find them all?",
        "Answer": "Ra5+, Nc5+, d5+, Bc4+, Qh3+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "4r3/2p2ppp/1p6/p3P1k1/P2P4/8/1PP2KPP/3R4 w KQkq -",
        "Question": "Find a move that delivers check in this position for either white or black.",
        "Answer": "h4+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "r1bk3r/ppp1bppp/2n2n2/4p3/4P3/2N1BN2/PPP1BPPP/R3K2R w KQkq -",
        "Question": "Find a way to move the white king and check the black king at the same time.",
        "Answer": "O-O-O+"
    },
    {
        "Level": "Knight",
        "Module": "Checkmate in One",
        "FEN": "3Brrn1/7p/4kb2/1R2np2/2P1pPpP/1K2PNP1/3Q4/7R w - -",
        "Question": "Mate the black king in one move. Try to identify the escape squares we are trying to take away.",
        "Answer": "Qd5++"
    },
    {
        "Level": "Knight",
        "Module": "Checkmate in One",
        "FEN": "rn1Q1b2/1p1b1p2/2k1p3/p1p1P1pr/P5Pp/2N5/RP2BP1P/1NB1K1R1 w - -",
        "Question": "Now checkmate using a minor piece.",
        "Answer": "Bb5++"
    },
    {
        "Level": "Knight",
        "Module": "Checkmate in One",
        "FEN": "2b1n2r/r1pqBppp/p1k2b2/2Pp3P/p1N2P2/NP1P2PR/R3P3/3K1B2 w - -",
        "Question": "Try checkmating with a knight. These are often easy to miss over the board.",
        "Answer": "Na5++"
    },
    {
        "Level": "Knight",
        "Module": "Checkmate in One",
        "FEN": "3r2n1/7r/bp1bp3/3pPkp1/2p2P1P/p3pK2/P1P3B1/NQ5R w - -",
        "Question": "Sometimes a piece moves out of the way to let another piece deliver a checkmate. Find that move.",
        "Answer": "c3++"
    },
    {
        "Level": "Knight",
        "Module": "Checkmate in One",
        "FEN": "3Q1b2/pr1b3p/1Bpkn1R1/2Nn3P/2PR1PP1/1K1P4/4r3/8 w - -",
        "Question": "Checkmate the black king by capturing a piece. (Bonus: find another capture that results in checkmate)",
        "Answer": "Qxf8++"
    },
    {
        "Level": "Knight",
        "Module": "Checkmate in One",
        "FEN": "r1bqkb1r/pp1npppp/2p2n2/8/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq -",
        "Question": "Find this special type of mate called a \"smothered mate\". Remember this for your games!",
        "Answer": "Nd6++"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR b KQkq -",
        "Question": "After the moves 1. e4 e5 2. Nf3 Nc6 3. Bc4, do we get this board position? If not, circle the piece on the wrong square.",
        "Answer": ""
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "rn1r2k1/ppp2ppp/8/3P3q/5pb1/2PP1QP1/P1P1N2P/R1B1K2R w KQkq -",
        "Question": "Play out this game by Paul Morphy then circle the pieces that are out of place on this board: \n1.e4 e5 2.f4 exf4 3.Bc4 d5 4.Bxd5 Nf6 5.Nc3 Bb4 6.d3 Nxd5 7.exd5 O-O 8.Qf3 Re8+ 9.Ne2 Bxc3+ 10.bxc3 Qh4+ 11.g3 Bg4",
        "Answer": "Rd8, Qh5"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "r1bB1rk1/pppn1pbp/6N1/8/2P3n1/5N2/PP3PPP/R2QKB1R b KQkq -",
        "Question": "Play out this game by Bobby Fischer then circle the  pieces that are out of place: 1.d4 g6 2.c4 Nf6 3.Nc3 Bg7 4.e4 O-O 5.Bg5 d6 6.Nf3 Nbd7 7.e5 dxe5 8.dxe5 Ng4 9.Nd5 Ngxe5 10.Nxe7+ Kh8 11.Nxg6+ hxg6 12.Bxd8",
        "Answer": "Kg8, Ng4"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "rnbqkb1r/pp3ppp/2p2n2/3pp3/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq -",
        "Question": "Circle the piece that moves with the notation exd5.",
        "Answer": "pawn on e4"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "8/R7/5k2/8/r2R4/8/R7/5K2 w - -",
        "Question": "There are many rooks, but circle the one that moves with the notation Rdxa4. It's important to tell similar pieces apart when you record your tournament games.",
        "Answer": "rook on d4"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "6k1/8/8/8/2p5/N7/3N4/6K1 w - -",
        "Question": "What is the notation if the knight on a3 captures the pawn on c4?",
        "Answer": "Naxc4"
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "r2qkb1r/pppb1ppp/2np1n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQ1RK1 w KQkq -",
        "Question": "Is white behind in material after Bxc6?",
        "Answer": "No."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "r2qr1k1/1p3ppp/pnnb4/3p4/3P4/2N2N2/PP1BQPPP/R3R1K1 w Qq - 0 1",
        "Question": "Does Qxe8 result in a fair trade for white?",
        "Answer": "Yes."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "8/1k6/8/8/1p2N3/2pp4/1K6/8 w - - 0 1",
        "Question": "Will we lose the game if we play Nxc3? Can we get a fair trade out of this move?",
        "Answer": "No. Yes."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "3r4/pp4pp/2p1k3/8/P4Q2/1P3P2/2PrK1PP/8 w - - 0 1",
        "Question": "Our king is in check, should we play Qxd2 and trade our queen for the two rooks?",
        "Answer": "Yes."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "3q2k1/p2r1ppp/1n1r4/3p4/5N2/1P1R4/P2R1PPP/3Q2K1 w - - 0 1",
        "Question": "Can we capture black's pawn without losing material?",
        "Answer": "No."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "r1b1r1qk/2p1bppp/p1n5/1p1p4/3P4/3Q1N2/PPB2PPP/R1B1R1K1 w - - 0 1",
        "Question": "Since our queen is protected by the bishop, can we win a pawn with Qxh7+?",
        "Answer": "No."
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq -",
        "Question": "What two moves can white play next to threaten mate on f7?",
        "Answer": "Qh5/Qf3"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
        "Question": "Has black prevented scholar's mate by playing Nf6?",
        "Answer": "Yes, at least temporarily."
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b KQkq -",
        "Question": "Defend against scholar's mate in this position as black.",
        "Answer": "Nf6/Qe7/Qf6"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
        "Question": "Play a move to stop white from mating on f7.",
        "Answer": "g6/Qe7/Qf6"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "rnbqk1nr/pppp1ppp/8/2b1p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
        "Question": "Stop Scholar's mate here. Watch out for e5.",
        "Answer": "Qe7"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "rnbqkb1r/ppp2ppp/8/3Bp2Q/4n3/2N5/PPPP1PPP/R1B1K1NR b KQkq - 0 5",
        "Question": "Prevent mate as black without also losing the knight.",
        "Answer": "Nd6"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "Question": "Play a move by black that activates a minor piece and defends the pawn.",
        "Answer": "Nc6, Nf6, Bd6?"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/4P1P1/5N2/PPPP1P1P/RNBQKB1R w KQkq -",
        "Question": "White played g4. What part of the ABC's does this violate?",
        "Answer": "All of them."
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "Question": "White played e5 creating this pawn chain. Make a move by black that immediately fights for the centre.",
        "Answer": "c5"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "r1bqk2r/pppp1ppp/2n2n2/6N1/1bB1P3/8/PB3PPP/RN1Q1RK1 b kq - 6 8",
        "Question": "White played Ng5 attacking our pawn. How should we respond according to the ABC's?",
        "Answer": "0-0"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "1rbqkb1r/pppppppp/nn6/3PP3/2P5/2N1BN2/PP3PPP/R2QKB1R b KQk - 6 8",
        "Question": "What part of the ABC's has black failed to follow?",
        "Answer": "Control the centre."
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "r1b1kb1r/ppp2ppp/2n5/3q4/3pn3/5N2/PPP2PPP/RNBQR1K1 w kq - 0 8",
        "Question": "We're down a knight and black just played Qxd5. Play a move as white that activates a piece and wins back material.",
        "Answer": "Nc3"
    },
    {
        "Level": "Rook",
        "Module": "Checkmate in Two",
        "FEN": "1k6/8/2K5/3R4/8/8/8/8 w - -",
        "Question": "We forced black's king onto the edge of the board in this endgame. Now checkmate black in two moves.",
        "Answer": "1. Ra5, Kb8 2.Ra8"
    },
    {
        "Level": "Rook",
        "Module": "Checkmate in Two",
        "FEN": "2r2r1k/6pp/pqbpQ2N/1p2b3/4P3/2P1B3/PP3PPP/R4RK1 w - -",
        "Question": "Should we take black's queen on b6, or do we have a better move here?",
        "Answer": "Qg8+"
    },
    {
        "Level": "Rook",
        "Module": "Checkmate in Two",
        "FEN": "r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 2",
        "Question": "We just lost a queen after black played Bxd1. Punish black with two moves leading to a checkmate.",
        "Answer": "Bxf7+, Ke7, Nd5++"
    },
    {
        "Level": "Rook",
        "Module": "Checkmate in Two",
        "FEN": "r4rk1/pp4pp/2p3n1/3p2N1/2P2PK1/6P1/PP5q/R1BQ1RN1 b - -",
        "Question": "This one is from a famous game played by Najdorf. Find the checkmate in two for black. (Hint: it involves a sacrifice).",
        "Answer": ""
    },
    {
        "Level": "Rook",
        "Module": "Checkmate in Two",
        "FEN": "1k6/8/1K6/5B2/1N6/8/8/8 w - - 0 1",
        "Question": "Checkmate black in two moves in this rare bishop and knight ending.",
        "Answer": "1. Na6+ Ka8 2. Be4++"
    },
    {
        "Level": "Rook",
        "Module": "Checkmate in Two",
        "FEN": "kbK5/pp6/1P6/8/8/8/8/R7 w - - 0 1",
        "Question": "This is tricky mate in two puzzle created by Paul Morphy at the age of ten. What's white's best move in this position?",
        "Answer": "Ra6!"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "r1bqk1nr/pppp1p1p/6p1/2b5/2BpP3/3P4/PPP2PPP/RNB1K2R w KQkq -",
        "Question": "Where would you place a white queen on this board? Place it on the square that gives us the biggest advantage.",
        "Answer": "Qe5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "r3k2r/pp1qn1pp/5p2/3p4/8/8/PP2QPPP/2R1R1K1 w - -",
        "Question": "Notice the pressure on black's e7 square. Where would you place a knight on this board to improve white's attack?",
        "Answer": "Nf5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "r2q1rk1/pbpn1p1p/1p2pPpQ/4P3/3P4/2NB4/PPP3PP/2KR3R b Kq -",
        "Question": "White is threatening mate on g7. Put a knight on the board to defend the position as black.",
        "Answer": "knight on e8 or h5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "5r1k/pp4pp/2p5/4q3/4P3/8/PPP2PPP/3R2K1 w - -",
        "Question": "Put a minor piece anywhere on this board that will give white the biggest advantage.",
        "Answer": "knight on f7."
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "3r4/p2q1pkp/3n1np1/8/8/1N2P3/P2BQPPP/R5K1 w - -",
        "Question": "Find the best place to put a white pawn on this board. Think back to your tactical lessons.",
        "Answer": "e5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "3r2k1/p4ppp/8/8/8/2R1P3/P3QPPP/6K1 b - -",
        "Question": "This is from a famous game by Capablanca. Of course d1 would be the best place to put a black queen, but what would be the next best square?  (Hint: look for a double or triple attack)",
        "Answer": "Qc2"
    },
    {
        Level: 'Knight',
        Module: 'Stalemate',
        FEN: '8/8/8/8/8/1k6/2q5/K7 w - -',
        Question: 'White to play.  Is this checkmate, stalemate, or neither?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Stalemate',
        FEN: '4R1k1/5pp1/p6p/1p6/3P4/2P2P2/rr3PPP/6K1 b - -',
        Question: 'Black to play.  Is this checkmate, stalemate, or neither?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Stalemate',
        FEN: 'rnb1k1nr/ppp2ppp/8/8/8/2N3b1/PPPPP3/R1BQKBNR w - -',
        Question: 'White to play.  Is this checkmate, stalemate, or neither?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Stalemate',
        FEN: 'rnbqk2r/pppp1Qpp/5n2/2b1p3/2B1P3/8/PPPP1PPP/RNB1K1NR b - -',
        Question: 'Black to play.  Is this checkmate, stalemate, or neither?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Stalemate',
        FEN: '8/8/8/8/8/1k6/6r1/K7 b - -',
        Question: 'Black to play.  Find a move that creates stalemate.  Find a move that creates checkmate.',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Stalemate',
        FEN: '4k3/8/5n2/8/8/4K1B1/8/8 w - -',
        Question: 'White to play.  Who should win this position?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Castling',
        FEN: 'r3k2r/pbp1ppbp/1pnq1np1/3p4/3P4/2NQPN2/PPPBBPPP/1R1K1R2 w - -',
        Question: 'Which side has their king and rooks properly positioned for castling?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Castling',
        FEN: 'rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w - -',
        Question: 'Which player(s) can castle in this position?  Which side can they castle on?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Castling',
        FEN: 'r1bqk2r/ppp1bppp/2n1pn2/1B1p4/3PP3/2P1BN2/PPQN1PPP/R3K2R',
        Question: 'Which player(s) can castle in this position?  Which side can they castle on?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Castling',
        FEN: 'r1bqk2r/pppp1ppp/2n5/8/2BP4/2b2N2/P4PPP/1RBQ1RK1',
        Question: 'White to play.  What move(s) can white make to prevent black from castling king side next turn?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Castling',
        FEN: 'rnbq1rk1/ppp2ppp/8/3p4/3P1B2/2N3P1/PPPQ1PBP/R3K1NR b - -',
        Question: 'Black to play.  What move(s) can black make to prevent white from castling queen side next turn?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'Castling',
        FEN: 'rnbq3r/pppp1kpp/4p3/2b5/4n3/1P3N2/P1PP1PPP/RNBQ1RK1 b - -',
        Question: 'Black to play.  If black moves their king back to e8, can they castle king-side later in the game?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'En Passant',
        FEN: 'rnbqkbnr/pp1p1ppp/8/2pPp3/4P3/8/PPP2PPP/RNBQKBNR',
        Question: 'White to play.  Black has just played c7 - c5.  List all the moves that the white pawn on d5 can make',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'En Passant',
        FEN: 'r1bqkbnr/pp2pppp/2n5/2p5/2Pp4/4PNP1/PP1P1PBP/RNBQK2R b - -',
        Question: 'Black to play.  White has just played c2 - c4.  List all the moves that the black pawn on d4 can make',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'En Passant',
        FEN: 'r1bqkbnr/pppp1ppp/2n1p3/4P3/3P4/8/PPP2PPP/RNBQKBNR b - -',
        Question: 'Black to play.  What move(s) can black make that would allow white to capture en-passant?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'En Passant',
        FEN: 'r1bqkbnr/pppp2p1/2n1p3/2P1P3/1P3p1p/P2P3P/5PP1/RNBQKBNR',
        Question: 'Circle all the pawns that are on the correct rank for capturing en-passant',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'En Passant',
        FEN: 'rnbqkb1r/ppp2ppp/8/3pP3/3Qn3/5N2/PPP2PPP/RNB1KB1R',
        Question: 'White to play.  Black just moved the pawn from d6 - d5.  Can the white pawn on e5 capture en-passant?',
        Answer: ''
    }, {
        Level: 'Knight',
        Module: 'En Passant',
        FEN: 'rnbqkbnr/ppp2ppp/8/3p4/3Pp3/8/PPP1QPPP/RNB1KBNR b - -',
        Question: 'Black to play.  White just moved the pawn from d2 - d4.  Can the black pawn on e4 capture en-passant?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Piece Value',
        FEN: '6r1/6rp/4k3/2nnpp2/2B5/5Q2/5PP1/4KR2 b - -',
        Question: 'How many points in material does white have?  How many points in material does black have?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Piece Value',
        FEN: 'r1bq1b1r/ppp1n1pp/4k3/3n2B1/2B5/5Q2/PpP2PPP/1K1R3R b - -',
        Question: 'How many points in material does white have?  How many points in material does black have?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Piece Value',
        FEN: 'rnb1kbnr/ppp2ppp/3p1q2/4p1B1/2B1P3/3P1N2/PPP2PPP/RN1QK2R',
        Question: 'White to play.  If white captures the queen on f6, how many points will white win or lose?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Piece Value',
        FEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R',
        Question: 'White to play.  If white captures the pawn on e5, how many points will white win or lose?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Piece Value',
        FEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/1P4Q1/PBPP1PPP/RN2KBNR',
        Question: 'White to play.  Can white make a positive capture on e5 here?  Which piece should white capture with first, the queen or the bishop?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Piece Value',
        FEN: 'rnb1k2r/pppp1ppp/8/2b1p3/2B1P1nq/2N4P/PPPPNPP1/R1BQ1RK1 b - -',
        Question: 'Black to play.  Can black make a positive capture on f2 here?  Which piece should black capture with first?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks',
        FEN: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1N3/5N2/PPPP1PPP/R1BQK2R b - -',
        Question: 'Black to play.  Find a pawn fork.',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks',
        FEN: '8/p2rnp1p/2p2npk/1p2p3/1P2P1PP/2P2NKB/PN1P1P2/8',
        Question: 'White to play.  Find a pawn fork.',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks',
        FEN: 'r1bqkbnr/1p1p1ppp/p1n5/2p1p3/B3P3/3Q1N2/PPPP1PPP/RNB1K2R b - -',
        Question: 'Black to play.  Can you find a two-move combination ending in a pawn fork?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks',
        FEN: 'rnb2bnr/ppp1pkpp/8/8/8/2N2N1q/PPPP1P1P/R1BQK1R1',
        Question: 'White to play.  Find a royal knight fork!',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks',
        FEN: '2r2qk1/2r2p1p/p4Pp1/1p3NQ1/8/P5P1/1PP4P/2KR2R1',
        Question: 'White to play.  Find a knight fork.',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks',
        FEN: 'r5k1/pp1Bppb1/8/3p3p/3Pq3/BP1n1R2/P6P/3Q1N1K b - -',
        Question: 'Black to play.  Does black have a way to fork the king and queen?  Look carefully!',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks II',
        FEN: 'r1bqk2r/pp1p1ppp/2p2n2/4B3/8/1P6/P1P1PPPP/R2QKB1R b - -',
        Question: 'Black to play.  Find a queen fork.',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks II',
        FEN: 'rnbq1b1r/pppppkpp/8/8/4n3/8/PPPP1PPP/RNBQK1NR',
        Question: 'White to play.  Is Qf3+ a fork that wins material?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks II',
        FEN: 'rnbq1bkr/ppppp1pp/8/7Q/4n3/8/PPPP1PPP/RNB1K1NR',
        Question: 'White to play.  Find the best move!',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks II',
        FEN: 'rnbqk1nr/pppp1ppp/8/2b1p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b - -',
        Question: 'Black to play.  What pieces are threatened by the white queen?  Can black defend all the threats?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks II',
        FEN: '2r3k1/pb2nppp/8/2p5/8/2N2PP1/PPP2K1P/3R4',
        Question: 'White to play.  Does white have a fork with the rook that wins material?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Forks II',
        FEN: '6k1/K1ppbp2/4p2p/1P6/Pq4PP/4Q3/4PP2/7R b - -',
        Question: 'Black to play.  Find the winning move!',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings',
        FEN: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - -',
        Question: 'Circle the squares that make up the centre of the board',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings',
        FEN: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
        Question: 'White to play.  Would you rather play e3 or e4 here.  Why?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings',
        FEN: 'r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R',
        Question: 'White to play. Between Na3 , Nc3 and Nd2 what is the best developing move for white\'s queen knight? ',
        Answer : ''
    }, {
        Level: 'Bishop',
        Module: 'Openings',
        FEN: 'rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b - -',
        Question: 'Black to play.  Between Bc5 and Qh4, which should black usually prefer.  Why?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings',
        FEN: 'rnbqkbnr/pppp1ppp/8/8/3QP3/8/PPP2PPP/RNB1KBNR b - -',
        Question: 'Black to play.  Find the best tempo move for black to play here.  Hint: attack the white queen!',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings',
        FEN: 'r1bqk2r/ppp2ppp/2n2n2/6N1/2BP4/2P5/P4PPP/R1BQ1RK1 b - -',
        Question: 'Black to play.  How can black defend against threats on f7 and checks along the e-file?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings II',
        FEN: 'rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPP1PPP/RNBQK1NR',
        Question: 'White to play.  To try the Scholar\'s Mate what squares can white move the queen? ',
        Answer : ''
    }, {
        Level: 'Bishop',
        Module: 'Openings II',
        FEN: 'rnb1k1nr/pppp1ppp/8/2b1p3/2B1P2q/2N5/PPPP1PPP/R1BQK1NR',
        Question: 'White to play.  What square is black threatening?  List all the moves that will defend white from checkmate.',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings II',
        FEN: 'rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b - -',
        Question: 'Black to play and mate in one move.  Hint: Remember the two move checkmate!',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings II',
        FEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R',
        Question: 'White to play.  What move creates the Ruy Lopez?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings II',
        FEN: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b - -',
        Question: 'Black to play.  What move creates the Sicilian Defense?',
        Answer: ''
    }, {
        Level: 'Bishop',
        Module: 'Openings II',
        FEN: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b - -',
        Question: 'Black to play.  What move creates the Two Knight Defense?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Mate Patterns',
        FEN: '6k1/pp2qp1p/3r2p1/2p1P3/2P5/2R2Q2/PP3PPP/6K1',
        Question: 'White to play.  Is exd6 capturing the black rook a good move? If not, why? ',
        Answer : ''
    }, {
        Level: 'Rook',
        Module: 'Mate Patterns',
        FEN: '2R2r1k/5ppp/r7/8/p7/2q2P1N/P1P3PP/3R3K',
        Question: 'Find the best move for white in this position',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Mate Patterns',
        FEN: '1r2r1k1/p4p1p/B4pp1/2pq4/8/1P5P/P1P2PPB/3R3K',
        Question: 'White to play.  Is Rxd5 capturing the black queen a good move? If not, why? ',
        Answer : ''
    }, {
        Level: 'Rook',
        Module: 'Mate Patterns',
        FEN: 'rnbq1rk1/ppp2ppp/8/3p4/2B3Q1/2B5/P4PPP/R4RK1',
        Question: 'Find the best move for white in this position',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Mate Patterns',
        FEN: 'rnb1k1nr/ppp2ppp/3b4/8/7q/2N3P1/PPPPP2P/R1BQKBNR b - -',
        Question: 'Find the best move for black in this position',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Mate Patterns',
        FEN: 'r1b1k1nr/pp3ppp/2nb4/8/2B4q/1PN5/PBP1NPPP/R2Q1RK1 b - -',
        Question: 'Find the best move for black in this position',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Pins',
        FEN: 'r1bqkbnr/pppp1ppp/2n5/8/4P3/2Q5/PPP2PPP/RNB1KBNR b - -',
        Question: 'Black to play.  Use a pin to win material',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Pins',
        FEN: 'r1b1kbnr/1pp1qp1p/p1p3p1/8/4P3/5N2/PPPP1PPP/RNBQ1RK1 b - -',
        Question: 'Black to play.  Is Qxe4 capturing the white pawn a good move? If not, why?',
        Answer : ''
    }, {
        Level: 'Rook',
        Module: 'Pins',
        FEN: 'r1bqkb1r/pp1npppp/2p2n2/8/3PN3/5N2/PPP1QPPP/R1B1KB1R',
        Question: 'White to play and mate in 1',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Pins',
        FEN: 'rnbqk2r/ppp2ppp/6n1/3N4/1b1P4/2N4P/PPP2PP1/R1BQKB1R b - -',
        Question: 'Black to play.  Is Qxd5 capturing the white knight a good move? If not, why? ',
        Answer : ''
    }, {
        Level: 'Rook',
        Module: 'Pins',
        FEN: '8/p7/2k5/3n4/8/6P1/1KP3B1/8',
        Question: 'Find the best move for white in this position',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Pins',
        FEN: 'r2qkb1r/ppp2ppp/2np1n2/4p3/3PP1b1/2N2N2/PPP2PPP/R1BQKB1R',
        Question: 'In this position which white piece is pinned? Is it absolute or relative?  Which white move in this position creates an absolute pin? Which white move creates a relative pin? ',
        Answer : ''
    }, {
        Level: 'Rook',
        Module: 'Skewers',
        FEN: '1k1r1b1r/pb3pp1/1pn2n1p/2ppq3/7B/2NPP3/PPPQN1PP/2KR1B1R',
        Question: 'White to play.  Use a skewer to win material',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Skewers',
        FEN: '7Q/8/8/5k2/3K4/8/p7/8 b - -',
        Question: 'Black to play.  Use a skewer to win material',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Skewers',
        FEN: 'r1b2rk1/ppp2pb1/3p3p/n5q1/2PP4/2N1P1N1/PPQB1P2/2KR3R',
        Question: 'White to play.  Use a skewer to win material',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Skewers',
        FEN: '2Q5/1p4qp/p4k2/6p1/P3b3/6BP/5PP1/6K1',
        Question: 'White to play.  What is the better move, Qc3+ or Be5+.  Why? Hint: Find a way to set up a skewer that wins the black queen ',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Skewers',
        FEN: '2r5/5p1p/p4np1/1pk5/8/P4N2/1P3PPP/4R1K1',
        Question: 'White to play and win material.',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Skewers',
        FEN: 'r1b1r1k1/p1pp1ppp/1p6/8/26/1P3RP1/P1P2PRP/6K1 b - -',
        Question: 'Black to play. Find the BEST move.  Hint: the BEST.',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Discovered Attack',
        FEN: 'rnbqkb1r/pppp1ppp/5n2/4N3/8/8/PPPPQPPP/RNB1KB1R',
        Question: 'White to play.  What pieces can white win here?  What is the best move?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Discovered Attack',
        FEN: 'r1b1kb1r/ppp2ppp/2n5/3q4/3pN3/5N2/PPP2PPP/R1BQR1K1',
        Question: 'White to play and win material',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Discovered Attack',
        FEN: 'r1bqk2r/pppp2p1/8/2b1P3/5P1p/6P1/PP2N1P1/RN1Q1R1K b - -',
        Question: 'Black to play and mate with discovered check',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Discovered Attack',
        FEN: '1r5k/pnp2p1p/Q1p3p1/4q2P/8/3P4/PBP2P2/1K1R3R b - -',
        Question: 'Black to play.  This is a two move combination that ends in a discovered check. Hint: What would black\'s move be if the white bishop were not on b2?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Discovered Attack',
        FEN: 'r3kr2/4p1pp/p2p4/6n1/P7/1P3PP1/6BP/3R1RK1',
        Question: 'Find the best move for white in this position.',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'Discovered Attack',
        FEN: '4k3/2Q3pr/1p5p/8/4PK2/1P3P2/1P4P1/8 b - -',
        Question: 'Find the best move for black in this position.',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Queen Mates',
        FEN: '8/7p/2q5/r7/8/6k1/8/3Q1RK1 b - -',
        Question: 'Black to play and mate in 1',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Queen Mates',
        FEN: '8/8/8/8/3k4/8/3q4/K7 b - -',
        Question: 'Black to play.  What move would you play as black, and why?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Queen Mates',
        FEN: '8/8/1p6/4K3/1PP5/3k4/8/8',
        Question: 'White to move.  What is white\'s plan and what is the first move white should make? ',
        Answer : ''
    }, {
        Level: 'Rook',
        Module: 'King & Queen Mates',
        FEN: '3k4/8/4K3/8/8/4Q3/8/8',
        Question: 'White to play and mate in 2.  Hint: Prevent black\'s king from moving to the c - file ',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Queen Mates',
        FEN: '8/8/8/8/P7/5k2/8/4K3',
        Question: 'White to play.  Can the black king catch the a-pawn before it promotes?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Queen Mates',
        FEN: '8/p7/8/4K3/7P/8/2k5/8 b - -',
        Question: 'Challenging question!  If black moves first in this position which side should win?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Rook Mates',
        FEN: '8/8/8/k1K5/8/8/8/1R6',
        Question: 'White to play and mate in 1.',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Rook Mates',
        FEN: '7k/5KR1/8/8/8/8/8/8',
        Question: 'White to play and mate in 2.',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Rook Mates',
        FEN: '8/8/8/8/8/1r6/2k5/K7 b - -',
        Question: 'Black to play.  What move stalemates the white king?  What move checkmates the white king?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Rook Mates',
        FEN: '6r1/8/8/3k4/8/8/4K3/8 b - -',
        Question: 'Black to play.  What is a good move to contain the white king?',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Rook Mates',
        FEN: '8/8/8/8/3k4/6r1/5K2/8 b - -',
        Question: 'Black to play. Protect your rook and contain the white king.',
        Answer: ''
    }, {
        Level: 'Rook',
        Module: 'King & Rook Mates',
        FEN: '8/8/8/8/4k3/2r5/1K6/8 b - -',
        Question: 'Black to play . White has just moved the king from a1 to b2.  What is black\'s best move?Hint : Don\'t give up your ground!',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames',
        FEN: '8/8/8/2k5/8/2K5/8/8 b - -',
        Question: 'Black to play.  Which side has the opposition?  Draw an X over the squares that the side with opposition controls.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames',
        FEN: '2k5/8/8/8/8/8/8/2K5 b - -',
        Question: 'Black to play.  Which side has the distant opposition?  Why?',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames',
        FEN: '8/8/8/1k6/8/8/4K3/8',
        Question: 'White to play.  Which side has the diagonal opposition?',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames',
        FEN: '1k6/8/8/8/8/8/4K3/8 b - -',
        Question: 'If it is black to play how can black gain the opposition? If it is white to play how can white gain the opposition? ',
        Answer : ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames',
        FEN: '8/8/8/8/4k3/4P3/5K2/8 b - -',
        Question: 'Black to play.  What should the result of this game be? In class activity: Try playing this position from both sides against a classmate.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames',
        FEN: '8/8/8/3k4/8/2K5/2P5/8',
        Question: 'White to play.  What should the result of this game be? In class activity: Try playing this position as both sides against a classmate ',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames II',
        FEN: 'k7/8/8/7p/8/2K5/8/8 b - -',
        Question: 'Black to play. Can the white king catch the pawn before it promotes?',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames II',
        FEN: '8/4k3/8/8/P7/8/8/3K4',
        Question: 'White to play.  Can the black king catch the pawn before it promotes?',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames II',
        FEN: '8/K1k5/8/P7/8/8/8/8',
        Question: 'White to play.  What should the result of this game be?',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames II',
        FEN: '8/8/8/4k3/p7/6K1/8/5B2 b - -',
        Question: 'Black to play and win.  Hint: Think what defensive move white will try.  How can you block it?',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames II',
        FEN: '4k3/8/8/8/8/8/4P3/4K3 b - -',
        Question: 'Black to play. What should the result of this game be? In class activity: Try playing this position from both sides against a classmate.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'King & Pawn Endgames II',
        FEN: '7k/8/8/8/8/4P3/8/4K3 b - -',
        Question: 'Black to play. What should the result of this game be? In class activity: Try playing this position from both sides against a classmate.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Deflections',
        FEN: 'rnbqkb1r/ppp2ppp/8/4p3/2B5/2P5/PPP2PPP/R1BQK2R',
        Question: 'White to play and win material using a deflection',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Deflections',
        FEN: '3r1bnr/pkq5/1p4p1/2pP1b2/2Pn4/1P3NQ1/6PP/R1N1KB1R',
        Question: 'White to play and win material using a deflection',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Deflections',
        FEN: 'Q2q2k1/p3r1bp/5np1/5p2/PP6/6P1/2RP1PBP/1N4K1 b - -',
        Question: 'Black to play and win material using a deflection',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Deflections',
        FEN: '3r1bkr/ppp4p/2n1p1p1/2q2N2/4P3/2Q3P1/PPP2PBP/3R1R1K',
        Question: 'White to play and win material using a deflection',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Deflections',
        FEN: '3q1rk1/r5p1/2bpn1P1/p1pN1p2/P1PnP2p/3PBP1P/5Q1K/1R1B1R2',
        Question: 'Tough question!  White to play and win. Hint: If the black queen on d8 were removed what could white do? How can white drive away the queen on d8? ',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Deflections',
        FEN: '6k1/q5pp/p1p2p2/3p1P1P/8/1P5R/P1P1rr2/3Q1R1K b - -',
        Question: 'Tough question!  Black to play and win. Hint: If the white rook on h3 were removed what could black do? How can black drive away the rook on h3? ',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Decoys',
        FEN: 'r4rk1/2qpbp1p/p1b3pQ/1p2p3/4PnP1/P1NBB3/1PPP1P1P/R3R1K1 b - -',
        Question: 'Black to play.  How can black lure the white queen to a square to set up a royal fork? ',
        Answer : ''
    }, {
        Level: 'Queen',
        Module: 'Decoys',
        FEN: 'r5k1/3p2p1/p1q2pP1/1p3n1Q/8/6BP/PP4RK/2r5 b - -',
        Question: 'Black to play.  How can black lure the white king to a square to set up a royal fork?',
        Answer : ''
    }, {
        Level: 'Queen',
        Module: 'Decoys',
        FEN: '8/2P5/6p1/8/2r1k3/7K/8/R7',
        Question: 'White to play.  How can white lure the black rook away from defending against the pawn promotion? ',
        Answer : ''
    }, {
        Level: 'Queen',
        Module: 'Decoys',
        FEN: '3r2k1/1p2R1p1/p1q2pQp/8/8/1P4P1/PB3P1P/3b2K1 b - -',
        Question: 'Challenging question!  Black to play and checkmate in 3.  Hint: If the black bishop were on f3, black could checkmate in 1 with Rc1++.Find a way to get the bishop on f3 with tempo!',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Decoys',
        FEN: '7K/6P1/4k3/8/7Q/2q5/8/8',
        Question: 'White to play.  Lure the black queen to a square where it can be captured by skewer.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Decoys',
        FEN: 'rnb1kb1r/pp3ppp/2p5/4q3/4n3/3Q4/PPPB1PPP/2KR1BNR',
        Question: 'White to play and checkmate in 3',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Clearance Sacrifice',
        FEN: 'r3r1k1/ppp2ppp/3qbnn1/4p1B1/Pb1pP1P1/1P1P1N1P/2P1BP2/R2Q1KNR b - -',
        Question: 'Black to play.  What clearance move could black make to protect the knight on f6 with the queen?',
        Answer : ''
    }, {
        Level: 'Queen',
        Module: 'Clearance Sacrifice',
        FEN: '2r1r1k1/2p3pR/1p6/p1nPP3/2P5/2Nq1p2/PP6/2K1Q2R b - -',
        Question: 'Black to play and win material using a clearance sacrifice.  Hint: What piece is blocking black from performing a royal fork?',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Clearance Sacrifice',
        FEN: '1r4k1/2pR4/p1q1r2p/4pRp1/7P/1P1Q4/P1P3PK/8',
        Question: 'White to play.  What could white do if the rook on f5 were not blocking the way? What is a good clearance move to make for white? ',
        Answer : ''
    }, {
        Level: 'Queen',
        Module: 'Clearance Sacrifice',
        FEN: '2bq1nkb/2p4p/2pp3Q/r4NpN/p2PP3/2P5/PP4PP/5RK1',
        Question: 'White to play and mate in 2.  Hint: If the queen were not on h6, white could checkmate black in 1 move with Nh6++.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Clearance Sacrifice',
        FEN: '2br1rk1/1p2bpp1/p1p2n1p/q3Np2/PnBPP3/2N3B1/1P2Q1PP/R4RK1',
        Question: 'White to play.  Can you find a clearance sacrifice to win the black queen? Hint: If white could play Nc4 the black queen would be trapped',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Clearance Sacrifice',
        FEN: 'r2qkb1r/2p1nppp/p2p4/np1NN3/4P3/1BP5/PP1P1PPP/R1BbK2R',
        Question: 'White to play and mate in 2.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Tactical Combinations',
        FEN: 'r1bqkb1r/pppp1ppp/5nn1/1B6/2N1P3/3P4/PPP2PPP/RNBQK2R b - -',
        Question: 'Black to play.  Find a two move combination ending in a pawn fork.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Tactical Combinations',
        FEN: 'rn1qkb1r/ppp1pppp/5n2/8/2BP2b1/2P2N2/PP4PP/RNBQK2R',
        Question: 'White to play.  Find a combination that ends in a fork of the king and bishop.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Tactical Combinations',
        FEN: 'r1b1kbnr/pppp1Npp/8/8/2BnP3/8/PPPP1PqP/RNBQKR2 b - -',
        Question: 'Black to play and win.  Black can win the queen or checkmate in 2 moves.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Tactical Combinations',
        FEN: 'r1b1kb1r/ppqp1ppp/2n1p3/8/2B1P1n1/2N2N1P/PP2QPP1/R1B2RK1 b - -',
        Question: 'Black to play and win.  Hint: Find a decoy move to get rid of a key defender.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Tactical Combinations',
        FEN: 'rnbq1rk1/pppp1ppp/8/8/2B5/2B5/P4PPP/R2Q1RK1',
        Question: 'White to play and mate in 2.',
        Answer: ''
    }, {
        Level: 'Queen',
        Module: 'Tactical Combinations',
        FEN: 'rnb2k1r/ppp2ppp/3p4/6q1/1BB5/8/P4PPP/R2QR1K1',
        Question: 'White to play and mate in 2.  Hint: Find a way to force the black king back to g8 for back - rank mate.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Mating Patterns',
        FEN: '8/5k2/8/8/8/7q/7b/7K b - -',
        Question: 'Black to play and mate in 3',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Mating Patterns',
        FEN: '8/8/8/8/1q6/1Pk5/P1P5/1K6 b - -',
        Question: 'Black to play and mate in 2',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Mating Patterns',
        FEN: '4qrk1/6p1/5pP1/8/8/8/1PP5/1KQ2R1R',
        Question: 'White to play and mate in 5!  Hint: This is easier than it looks.  Imagine if the white queen were on h1 and it was white\'s turn to play.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Mating Patterns',
        FEN: '8/1n3k2/5p2/8/8/8/1rr5/R4RK1 b - -',
        Question: 'Black to play and mate in 3',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Mating Patterns',
        FEN: 'r4rk1/p4p1p/5p2/8/8/8/1B6/R3K2R',
        Question: 'White to play and mate in 2.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Mating Patterns',
        FEN: 'r3k1r1/pb6/1p6/8/8/P7/5PPP/5RK1 b - -',
        Question: 'Black to play and mate in 5! ',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King',
        FEN: 'rnbqkbnr/pppp2pp/5p2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R',
        Question: 'White to play.  What is a winning move that exploits black\'s king side position?',
        Answer : ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King',
        FEN: 'rnbqk1nr/ppppbppp/8/8/2B1P3/2p5/PP3PPP/RNBQK1NR',
        Question: 'White to play.  Find an unstoppable threat for white',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King',
        FEN: 'r1bqk2r/pppp1ppp/1bn5/4P3/2B1n3/2P2N2/PP3PPP/RNBQK2R',
        Question: 'White to play and win material.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King',
        FEN: 'rnbqkb1r/pppp1ppp/8/4P3/6n1/7P/PPPNPPP1/R1BQKBNR b - -',
        Question: 'Black to play.  Black can either win the queen or checkmate by force here. Hint: Find a way to expose the e1 - h4 diagonal.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King',
        FEN: 'rnbqk2r/ppp2ppp/3b4/8/2P1n3/P5P1/1P2PP1P/RNBQKBNR b - -',
        Question: 'Black to play and win material.  Hint: Find a way to decoy the white king away from the queen\'s defence, and then exploit that!',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King',
        FEN: 'rn1qkb1r/ppp1pppp/5n2/8/2B3b1/2N2N2/PPPP1PPP/R1BQK2R',
        Question: 'White to play.  White can either win material or checkmate with an amazing move here.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King II',
        FEN: 'r1b1kbnr/1pp1qppp/p1p5/8/4P3/5N2/PPPP1PPP/RNBQ1RK1 b - -',
        Question: 'Black to play.  Is taking the pawn on e4 a good idea?  Why or why not?',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King II',
        FEN: 'r3k2r/ppp1nppp/8/3q4/3P4/5N2/PP3PPP/R2Q1RK1',
        Question: 'White to play.  What move can white make to put pressure on the black king and prevent castling? ',
        Answer : ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King II',
        FEN: 'r1bqk2r/pppp1ppp/2n5/8/2BP4/2b2N2/P4PPP/R1BQ1RK1',
        Question: 'White to play.  What move can white make to prevent black from castling next turn? Does white need to defend the rook on a1? ',
        Answer : ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King II',
        FEN: '3r1k1r/p1p1qppp/b4n2/3B4/1bPQ4/1PN3P1/P3PP1P/R1B1K2R b - -',
        Question: 'Black to play and win material.  Hint: The pawn on c4 can be considered pinned. Why?',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King II',
        FEN: 'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R',
        Question: 'White to play. Find a strong move for white here.  Explain your choice of move.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Uncastled King II',
        FEN: 'r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b - -',
        Question: 'Black to play and mate in 1',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King',
        FEN: 'r4rk1/2p2ppp/pq1pb3/1p6/4P3/P4PQP/1PP3P1/R1BR2K1',
        Question: 'White to play and win material. ',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King',
        FEN: 'r4rk1/ppp2ppp/8/3P4/2P1Nnq1/5bB1/PPP2PPP/R3QRK1 b - -',
        Question: 'Black to play and mate in 2',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King',
        FEN: 'r1bq1rk1/pp1n1ppp/2nb4/8/3NPPQ1/2N1B3/P1P1B1PP/R4RK1',
        Question: 'White to play and win material ',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King',
        FEN: '3r1rnk/pp1n3p/1qp2pp1/5NQ1/4P3/1B1R4/PP3PPP/2R3K1',
        Question: 'White to play and mate',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King',
        FEN: 'r4rk1/pp3ppp/2p2n2/3p4/3P4/5P2/qPPQPP1P/2KR2R1',
        Question: 'White to play and mate in 4',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King',
        FEN: 'r1br2k1/ppp2pp1/5q1p/4p3/4Pn2/N1PB4/P1PQ1PPP/R4RK1 b - -',
        Question: 'Black to play and win the white queen in 3 moves.A tough one! Hint: Gain some tempo by threatening mate ',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King II',
        FEN: 'r1bq1rk1/p1p1bppp/4p3/8/3P4/2PB1N2/PP2QPPP/R4RK1',
        Question: 'White to play and win material',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King II',
        FEN: 'r4rk1/1p2qpp1/p1n1pn1p/6N1/1P6/P3P3/1BQ2PP1/R4R1K',
        Question: 'White to play.  What is the best move for white?  Which important defender can be eliminated?',
        Answer : ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King II',
        FEN: 'r2qk2r/ppp2p2/2nbp3/3p3p/3P2p1/P1N1PP2/1PP1B1PP/R2Q1RK1 b - -',
        Question: 'Black to play.  What move begins an unstoppable mate in 4?',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King II',
        FEN: '1r1q1rk1/p2b1pp1/n1p1p3/b3P1N1/3P4/8/P2B1PPP/R2Q1RK1',
        Question: 'White to play.  Can white begin an unstoppable mating attack or does the black king have a way to escape?',
        Answer : ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King II',
        FEN: '1br2rk1/pb3pp1/1pq1pn1B/8/3P4/2NB2PP/PPPQPP2/2RR2K1',
        Question: 'White to play.  Is Qg5 a good move or white?  Why or why not? ',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Attack on Castled King II',
        FEN: '5rk1/pp4pp/4p3/2R3Q1/3n4/6qr/P1P2PPP/5RK1',
        Question: 'Genius level puzzle! Show why white cannot capture the black queen on g3 without losing material or being mated.',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Defensive Puzzles',
        FEN: 'rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b - -',
        Question: 'Black to play.  What is white threatening?  What moves can black play to defend against this threat?',
        Answer : ''
    }, {
        Level: 'King',
        Module: 'Defensive Puzzles',
        FEN: '8/5R2/3nk3/3p4/8/8/3PK1B1/8 b - -',
        Question: 'Black to play.  White has just played Rxf7.  How should black recapture on f7?  Why? ',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Defensive Puzzles',
        FEN: 'r1bq1rk1/ppp1nppp/1b1p1n1B/8/2B1P3/1PP3Q1/P3NPPP/RN2K2R b - -',
        Question: 'Black to play.  What is white threatening?  What is the best defensive move for black in this position?',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Defensive Puzzles',
        FEN: 'r2q1r2/pbpn1ppk/1p1bp3/8/3P4/2P2N2/PP3PPP/RNBQK2R b - -',
        Question: 'Black to play.  What move is white threatening?  How can black stop white\'s attack in is tracks? ',
        Answer : ''
    }, {
        Level: 'King',
        Module: 'Defensive Puzzles',
        FEN: 'r3k2r/p1pb1ppp/2p5/2b1P3/7q/2N2N2/PPP2nPP/R1BQ1R1K',
        Question: 'White to play.  How can white make the best of this situation?',
        Answer: ''
    }, {
        Level: 'King',
        Module: 'Defensive Puzzles',
        FEN: '7K/8/k1P5/7p/8/8/8/8',
        Question: 'White to play and draw the game',
        Answer: ''
    },
]