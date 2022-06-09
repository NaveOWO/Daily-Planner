import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { useEffect } from "react";

const StyleRoot = styled.section`
  background-color: rgb(255, 255, 255, 0.5);
`;

const PrioritiesContainer = styled.section`
  position: relative;
  height: 250px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrioritiesTitle = styled.h2`
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

const PrioritiesContents = styled.ul`
  height: 70%;
  /* width: 99%; */
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`;

const PrioritiesList = styled.li`
  width: 80%;
  margin-left: 40px;
  border: none;
  display: flex;
`;

const ListMarker = styled.span``;

const PrioritiesInput = styled.input`
  width: 100%;
  font-size: 20px;
  font-family: "ParkYongJun";
  border: none;
  background-color: transparent;
  padding: 0 0 0 10px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

const PrioritiesText = styled.div`
  width: 100%;
  font-size: 20px;
  font-family: "ParkYongJun";
  background-color: transparent;
  padding: 0 0 0 10px;
  margin-bottom: 10px;
`;

const Priorities = () => {
  const [priorityList, setPriorityList] = useState([]);
  let listCnt = 0;

  const clickHandle = () => setPriorityList([...priorityList, ""]);
  return (
    <StyleRoot>
      <PrioritiesContainer>
        <TitleContainer>
          <PrioritiesTitle>Priorities</PrioritiesTitle>
          <ListPlusBtn onClick={clickHandle}>+</ListPlusBtn>
        </TitleContainer>
        <PrioritiesContents>
          <PrioritiesList>
            <ListMarker>🌙</ListMarker>
            <PrioritiesInput />
          </PrioritiesList>
          {priorityList.map((list, index) => (
            <PrioritiesList key={index}>
              <ListMarker>🌙</ListMarker>
              <PrioritiesInput />
            </PrioritiesList>
          ))}
        </PrioritiesContents>
      </PrioritiesContainer>
    </StyleRoot>
  );
};

export default Priorities;
