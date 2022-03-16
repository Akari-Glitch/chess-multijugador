import { useState, useEffect } from "react";
import { TableStyles } from "../../../../styles/TableStyles";
import { selectBox } from "../chess/SelectPiece.js";
import { whitePieces, blackPieces } from "../dataTable";
import { idBoxes } from "../dataTable";
function Table() {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const colorPlayer = "black";
  const idBoxesTable = colorPlayer === "white" ? idBoxes : idBoxes.reverse();
  const orderLetters = colorPlayer === "white" ? letters : letters.reverse();
  const whitePiecesReverse = whitePieces.reverse();
  const blackPiecesReverse = blackPieces.reverse();
  const piecesTop = colorPlayer !== "white" ? whitePiecesReverse : blackPieces;
  const piecesBottom =
    colorPlayer === "white" ? whitePieces : blackPiecesReverse;

  useEffect(() => {
    const tbody = document.getElementById("tbody");

    tbody.addEventListener("click", (e) => {
      const isBoxOfTable = Number(e.target.id.slice(3)) > 0;
      if (isBoxOfTable) selectBox(e.target, e.id);
    });

    return () => {
      tbody.removeEventListener("click", null);
    };
  }, []);

  return (
    <TableStyles>
      <tbody id="tbody">
        <tr id="row1">
          <td className="rowNumber">8</td>
          <td className="boxW corner-left-top" id={idBoxesTable[0]}>
            {piecesTop[1]}
          </td>
          <td className="boxB" id={idBoxesTable[1]}>
            {piecesTop[2]}
          </td>
          <td className="boxW" id={idBoxesTable[2]}>
            {piecesTop[3]}
          </td>
          <td className="boxB" id={idBoxesTable[3]}>
            {piecesTop[4]}
          </td>
          <td className="boxW" id={idBoxesTable[4]}>
            {piecesTop[5]}
          </td>
          <td className="boxB" id={idBoxesTable[5]}>
            {piecesTop[6]}
          </td>
          <td className="boxW" id={idBoxesTable[6]}>
            {piecesTop[7]}
          </td>
          <td className="boxB corner-right-top" id={idBoxesTable[7]}>
            {piecesTop[8]}
          </td>
        </tr>
        <tr id="row2">
          <td className="rowNumber">7</td>
          <td className="boxB" id={idBoxesTable[8]}>
            {piecesTop[0]}
          </td>
          <td className="boxW" id={idBoxesTable[9]}>
            {piecesTop[0]}
          </td>
          <td className="boxB" id={idBoxesTable[10]}>
            {piecesTop[0]}
          </td>
          <td className="boxW" id={idBoxesTable[11]}>
            {piecesTop[0]}
          </td>
          <td className="boxB" id={idBoxesTable[12]}>
            {piecesTop[0]}
          </td>
          <td className="boxW" id={idBoxesTable[13]}>
            {piecesTop[0]}
          </td>
          <td className="boxB" id={idBoxesTable[14]}>
            {piecesTop[0]}
          </td>
          <td className="boxW" id={idBoxesTable[15]}>
            {piecesTop[0]}
          </td>
        </tr>
        <tr id="row3">
          <td className="rowNumber">6</td>
          <td className="boxW" id={idBoxesTable[16]}></td>
          <td className="boxB" id={idBoxesTable[17]}></td>
          <td className="boxW" id={idBoxesTable[18]}></td>
          <td className="boxB" id={idBoxesTable[19]}></td>
          <td className="boxW" id={idBoxesTable[20]}></td>
          <td className="boxB" id={idBoxesTable[21]}></td>
          <td className="boxW" id={idBoxesTable[22]}></td>
          <td className="boxB" id={idBoxesTable[23]}></td>
        </tr>
        <tr id="row4">
          <td className="rowNumber">5</td>
          <td className="boxB" id={idBoxesTable[24]}></td>
          <td className="boxW" id={idBoxesTable[25]}></td>
          <td className="boxB" id={idBoxesTable[26]}></td>
          <td className="boxW" id={idBoxesTable[27]}></td>
          <td className="boxB" id={idBoxesTable[28]}></td>
          <td className="boxW" id={idBoxesTable[29]}></td>
          <td className="boxB" id={idBoxesTable[30]}></td>
          <td className="boxW" id={idBoxesTable[31]}></td>
        </tr>
        <tr id="row5">
          <td className="rowNumber">4</td>
          <td className="boxW" id={idBoxesTable[32]}></td>
          <td className="boxB" id={idBoxesTable[33]}></td>
          <td className="boxW" id={idBoxesTable[34]}></td>
          <td className="boxB" id={idBoxesTable[35]}></td>
          <td className="boxW" id={idBoxesTable[36]}></td>
          <td className="boxB" id={idBoxesTable[37]}></td>
          <td className="boxW" id={idBoxesTable[38]}></td>
          <td className="boxB" id={idBoxesTable[39]}></td>
        </tr>
        <tr id="row6">
          <td className="rowNumber">3</td>
          <td className="boxB" id={idBoxesTable[40]}></td>
          <td className="boxW" id={idBoxesTable[41]}></td>
          <td className="boxB" id={idBoxesTable[42]}></td>
          <td className="boxW" id={idBoxesTable[43]}></td>
          <td className="boxB" id={idBoxesTable[44]}></td>
          <td className="boxW" id={idBoxesTable[45]}></td>
          <td className="boxB" id={idBoxesTable[46]}></td>
          <td className="boxW" id={idBoxesTable[47]}></td>
        </tr>
        <tr>
          <td className="rowNumber">2</td>
          <td className="boxW" id={idBoxesTable[48]}>
            {piecesBottom[0]}
          </td>
          <td className="boxB" id={idBoxesTable[49]}>
            {piecesBottom[0]}
          </td>
          <td className="boxW" id={idBoxesTable[50]}>
            {piecesBottom[0]}
          </td>
          <td className="boxB" id={idBoxesTable[51]}>
            {piecesBottom[0]}
          </td>
          <td className="boxW" id={idBoxesTable[52]}>
            {piecesBottom[0]}
          </td>
          <td className="boxB" id={idBoxesTable[53]}>
            {piecesBottom[0]}
          </td>
          <td className="boxW" id={idBoxesTable[54]}>
            {piecesBottom[0]}
          </td>
          <td className="boxB" id={idBoxesTable[55]}>
            {piecesBottom[0]}
          </td>
        </tr>
        <tr id="row7">
          <td className="rowNumber">1</td>
          <td className="boxB corner-left-bottom" id={idBoxesTable[56]}>
            {piecesBottom[1]}
          </td>
          <td className="boxW" id={idBoxesTable[57]}>
            {piecesBottom[2]}
          </td>
          <td className="boxB" id={idBoxesTable[58]}>
            {piecesBottom[3]}
          </td>
          <td className="boxW" id={idBoxesTable[59]}>
            {piecesBottom[4]}
          </td>
          <td className="boxB" id={idBoxesTable[60]}>
            {piecesBottom[5]}
          </td>
          <td className="boxW" id={idBoxesTable[61]}>
            {piecesBottom[6]}
          </td>
          <td className="boxB" id={idBoxesTable[62]}>
            {piecesBottom[7]}
          </td>
          <td className="boxW corner-right-bottom" id={idBoxesTable[63]}>
            {piecesBottom[8]}
          </td>
        </tr>
        <tr className="rowLetters">
          <td></td>
          <td className="letter">{orderLetters[0]}</td>
          <td className="letter">{orderLetters[1]}</td>
          <td className="letter">{orderLetters[2]}</td>
          <td className="letter">{orderLetters[3]}</td>
          <td className="letter">{orderLetters[4]}</td>
          <td className="letter">{orderLetters[5]}</td>
          <td className="letter">{orderLetters[6]}</td>
          <td className="letter">{orderLetters[7]}</td>
        </tr>
      </tbody>
    </TableStyles>
  );
}

export default Table;
