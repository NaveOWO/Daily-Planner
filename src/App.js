import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Memo from "./components/Memo";
import Priorities from "./components/Priorities";
import DailyCheck from "./components/DailyCheck";

const Leftside = styled.section`
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Rightside = styled.section`
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Main = styled.section`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <Leftside>
          <TodoList />
          <Memo />
        </Leftside>
        <Rightside>
          <Priorities />
          <DailyCheck />
        </Rightside>
      </Main>
    </>
  );
}

export default App;
