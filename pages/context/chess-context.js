import React, { useState, useMemo } from "react";

const ChessContext = React.createContext();

export function ChessProvider(props) {
  const [colorPlayer, setColorPlayer] = useState(undefined);
  const value = useMemo(() => {
    return { colorPlayer, setColorPlayer };
  }, [colorPlayer]);

  return (
    <ChessContext.Provider value={value} {...props}></ChessContext.Provider>
  );
}

export function useChess() {
  const context = React.useContext(ChessContext);

  if (!context) {
    throw new Error("error");
  }
  return context;
}
