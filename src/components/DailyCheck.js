import styled from "styled-components";

const DailyCheckContainer = styled.section`
  height: 100%;
  border: solid 1px black;
  margin-top: 30px;
`;

const DailyTitle = styled.h2`
  font-size: 30px;
  margin: 0;
`;

const DailyContents = styled.input`
  height: 100%;
  width: 100%;
`;

const DailyCheck = () => {
  return (
    <>
      <DailyCheckContainer>
        <DailyTitle>Daily Check</DailyTitle>
        <DailyContents />
      </DailyCheckContainer>
    </>
  );
};

export default DailyCheck;
