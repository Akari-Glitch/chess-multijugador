export const whitePieces = ["♙", "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖", "♙"];
export const blackPieces = ["♟", "♜", "♞", "♝", "♚", "♛", "♝", "♞", "♜", "♟"];
export const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const lettersReverse = ["h", "g", "f", "e", "d", "c", "b", "a"];

export function setTableBoxes(colorPlayer) {
  let idBoxes = [[], [], [], [], [], [], [], []];
  let count = colorPlayer ? 1 : 64;
  let color = false;

  for (let j = 0; j <= 7; j++) {
    color = !color;

    for (let i = 0; i <= 7; i++) {
      idBoxes[j].push({
        id: "box" + count,
        color: color === true ? "boxW" : "boxB",
        content: "",
      });

      colorPlayer ? count++ : count--;
      color = !color;
    }
  }

  for (let i = 0; i <= 7; i++) {
    if (colorPlayer) {
      idBoxes[7][i].content = whitePieces[i + 1];
      idBoxes[6][i].content = whitePieces[0];
      idBoxes[0][i].content = blackPieces[8 - i];
      idBoxes[1][i].content = blackPieces[0];
    } else {
      idBoxes[7][i].content = blackPieces[i + 1];
      idBoxes[6][i].content = blackPieces[0];
      idBoxes[0][i].content = whitePieces[8 - i];
      idBoxes[1][i].content = whitePieces[0];
    }
  }

  return idBoxes;
}
