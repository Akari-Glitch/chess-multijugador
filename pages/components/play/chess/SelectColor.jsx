import { useState } from "react";
import { SelectColorStyles } from "../../../../styles/SelectColorStyles";
import { useChess } from "../../../context/chess-context";
import Table from "./table/Table";
function SelectColor() {
  const [colorPlayer, setColorPlayer] = useState();
  return (
    <>
      {colorPlayer === undefined ? (
        <SelectColorStyles>
          <button onClick={() => setColorPlayer("white")}></button>
          <button onClick={() => setColorPlayer("black")}></button>
        </SelectColorStyles>
      ) : (
        <Table colorPlayer={colorPlayer}></Table>
      )}
      <SelectColorStyles></SelectColorStyles>
    </>
  );
}

export default SelectColor;
