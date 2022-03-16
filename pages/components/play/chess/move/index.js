export function movePiece(piece, boxToMove, lastBox) {
  boxToMove.textContent = piece;
  lastBox.textContent = "";
}
