let chess_Piece = "king";
let chessPiece = chess_Piece.toLowerCase();


switch (chessPiece) {
  case "pawn".toLowerCase():
    console.log("The pawn moves in front");
    break;
  case "rook":
    console.log("The rook moves horizontally or vertically");
    break;
  case "knight":
    console.log("it may move two squares vertically and one square horizontally");
    break;
  case "bishop":
    console.log("diagonals");
    break;
  case "queen":
    console.log("The queen can be moved vertically, horizontally, or diagonally.");
    break;
  case "king":
    console.log("the king can move one square in any direction (horizontally, vertically, or diagonally)");
    break;
    
  default:
    console.log("mensagem não identificada")
}
