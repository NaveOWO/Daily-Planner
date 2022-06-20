import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Memo from "./components/Memo";
import Priorities from "./components/Priorities";
import DailyCheck from "./components/DailyCheck";
import bgImg from "./assets/space.jpeg";

const StyleRoot = styled.section`
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const Leftside = styled.section`
  width: 70%;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-left: 10px;
  margin-right: 10px;
`;

const Rightside = styled.section`
  width: 30%;
  height: 100%;
  margin: 0;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  margin-left: 10px;
`;

const Main = styled.section`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <StyleRoot>
      <Header />
      <Main>
        <Leftside>
          <TodoList styled={{ height: "50%" }} />
          <Memo />
        </Leftside>
        <Rightside>
          <Priorities />
          <DailyCheck />
        </Rightside>
      </Main>
    </StyleRoot>
  );
}

export default App;
