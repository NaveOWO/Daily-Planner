import { useState } from "react";
import styled from "styled-components";

const StyleRoot = styled.section`
  background-color: rgb(255, 255, 255, 0.5);
`;

const DailyCheckContainer = styled.section`
  height: 320px;
  margin-top: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DailyTitle = styled.h2`
  font-size: 20px;
  font-family: "Independence_hall";
  color: white;
  margin: 0;
  padding: 10px 0 10px 40px;
`;

const ListPlusBtn = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 30px;
  margin-right: 20px;
  cursor: pointer;
`;

const DailyContents = styled.ul`
  height: 70%;
  /* width: 99%; */
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`;

const DailyCheckList = styled.li`
  width: 80%;
  margin-left: 40px;
  border: none;
  display: flex;
`;

const ListMarker = styled.span``;

const DailyCheckInput = styled.input`
  width: 100%;
  font-size: 20px;
  font-family: "ParkYongJun";
  border: none;
  background-color: transparent;
  padding: 0 0 0 10px;
  &:focus {
    outline: none;
  }
`;

const DailyCheck = () => {
  const [checkList, setCheckList] = useState([]);

  const clickHandle = () => setCheckList([...checkList, ""]);

  return (
    <StyleRoot>
      <DailyCheckContainer>
        <TitleContainer>
          <DailyTitle>Daily Check</DailyTitle>
          <ListPlusBtn onClick={clickHandle}>+</ListPlusBtn>
        </TitleContainer>
        <DailyContents>
          <DailyCheckList>
            <ListMarker>✔</ListMarker>
            <DailyCheckInput />
          </DailyCheckList>
          {checkList.map((list, index) => (
            <DailyCheckList key={index}>
              <ListMarker>✔</ListMarker>
              <DailyCheckInput />
            </DailyCheckList>
          ))}
        </DailyContents>
      </DailyCheckContainer>
    </StyleRoot>
  );
};

export default DailyCheck;
