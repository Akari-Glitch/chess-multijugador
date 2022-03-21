import { useEffect } from "react";
import { TableStyles } from "../../../../../styles/TableStyles";
import { selectBox } from "../SelectPiece.js";
import { setTableBoxes, letters, lettersReverse } from "../../dataTable";

function Table(props) {
  const colorPlayer = props.colorPlayer;
  const idBoxes = setTableBoxes(colorPlayer === "white" ? true : false);
  const orderLetters = colorPlayer === "white" ? letters : lettersReverse;

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
        {idBoxes.map((row, index) => {
          return (
            <tr id={"row" + (index + 1)}>
              <td className="rowNumber">{index + 1}</td>

              {row.map((column) => {
                return (
                  <>
                    <td className={column.color} id={column.id}>
                      {column.content}
                    </td>
                  </>
                );
              })}
            </tr>
          );
        })}
        <tr>
          <td></td>
          {orderLetters.map((letter) => {
            return <td className="letter">{letter}</td>;
          })}
        </tr>
      </tbody>
    </TableStyles>
  );
}

export default Table;
