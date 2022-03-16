import { whitePieces, blackPieces } from "../dataTable";
import { movePiece } from "./move";
const colorSelect = "#F6F669";
const colorWhite = "rgb(238, 238, 210)";
const colorBlack = "rgb(118, 150, 86)";
let pieceSelect = false;
let colorBack = undefined;
let lastBox = undefined;

export function selectBox(box) {
  if (!pieceSelect) {
    const isWhiteOrBlack = whitePieces.find(
      (whitePiece) => whitePiece === box.textContent
    );
    pieceSelect =
      whitePieces.includes(box.textContent) ||
      blackPieces.includes(box.textContent);
    const colorPiece = isWhiteOrBlack ? "white" : "black";
    colorBack = box.className == "boxW" ? colorWhite : colorBlack;
    lastBox = box;
    if (pieceSelect) box.style.backgroundColor = colorSelect;
  } else if (pieceSelect) {
    lastBox.style.backgroundColor = colorBack;
    if (pieceSelect) movePiece(lastBox.textContent, box, lastBox);
    pieceSelect = false;
    selectBox(box);
  }
}
