import styled from "styled-components";

const PrioritiesContainer = styled.section`
  border: solid 1px black;
  height: 100%;
`;

const PrioritiesTitle = styled.h2`
  font-size: 30px;
  margin: 0;
`;

const PrioritiesContents = styled.input`
  height: 100%;
  width: 100%;
`;

const Priorities = () => {
  return (
    <>
      <PrioritiesContainer>
        <PrioritiesTitle>Priorities</PrioritiesTitle>
        <PrioritiesContents />
      </PrioritiesContainer>
    </>
  );
};

export default Priorities;
