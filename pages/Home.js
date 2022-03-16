import Content from "./components/Content.jsx";
import Table from "./components/play/table/Table.jsx";
import { HomeStyles } from "../styles/HomeStyles";
function Home() {
  return (
    <Content>
      <HomeStyles>
        <Table></Table>
      </HomeStyles>
    </Content>
  );
}

export default Home;
