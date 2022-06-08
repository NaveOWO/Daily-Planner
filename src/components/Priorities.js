import styled from "styled-components";

const StyleRoot = styled.section`
  background-color: rgb(255, 255, 255, 0.5);
`;

const PrioritiesContainer = styled.section`
  position: relative;
  height: 250px;
`;

const PrioritiesTitle = styled.h2`
  font-size: 20px;
  font-family: "Independence_hall";
  color: white;
  margin: 0;
  padding: 10px 0 10px 40px;
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
`;

const Priorities = () => {
  return (
    <StyleRoot>
      <PrioritiesContainer>
        <PrioritiesTitle>Priorities</PrioritiesTitle>
        <PrioritiesContents>
          <PrioritiesList>
            <ListMarker>🌙</ListMarker>
            <PrioritiesInput />
          </PrioritiesList>
        </PrioritiesContents>
      </PrioritiesContainer>
    </StyleRoot>
  );
};

export default Priorities;
