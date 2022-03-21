import Content from "./components/Content.jsx";
import { HomeStyles } from "../styles/HomeStyles";
import SelectColor from "./components/play/chess/SelectColor.jsx";
import Table from "./components/play/chess/table/Table";
import { ChessProvider } from "./context/chess-context";
function Home() {
  return (
    <Content>
      <ChessProvider>
        <HomeStyles>
          <SelectColor></SelectColor>
        </HomeStyles>
      </ChessProvider>
    </Content>
  );
}

export default Home;
