import styled from "styled-components";

const StyleRoot = styled.section`
  background-color: rgb(255, 255, 255, 0.5);
  /* border: solid 2px white; */
`;

const MemoContainer = styled.section`
  margin-top: 30px;
  height: 150px;
`;

const MemoTitle = styled.h2`
  font-size: 20px;
  font-family: "Independence_hall";
  color: white;
  margin: 0;
  padding: 10px 0 0 40px;
`;

const MemoContents = styled.input`
  font-family: "ParkYongJun";
  border: none;
  padding: 0;
  margin-top: 30px;
  margin-left: 40px;
  width: 80%;
  height: 20%;
  background-color: transparent;
  font-size: 20px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Memo = () => {
  return (
    <StyleRoot>
      <MemoContainer>
        <MemoTitle>Memo</MemoTitle>
        <MemoContents />
      </MemoContainer>
    </StyleRoot>
  );
};

export default Memo;
