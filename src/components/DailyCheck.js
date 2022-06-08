import styled from "styled-components";

const StyleRoot = styled.section`
  background-color: rgb(255, 255, 255, 0.5);
`;

const DailyCheckContainer = styled.section`
  height: 320px;
  margin-top: 30px;
`;

const DailyTitle = styled.h2`
  font-size: 20px;
  font-family: "Independence_hall";
  color: white;
  margin: 0;
  padding: 10px 0 0 40px;
`;

const DailyContents = styled.input`
  height: 80%;
  width: 99%;
  padding: 0;
  border: none;
  background-color: transparent;
`;

const DailyCheck = () => {
  return (
    <StyleRoot>
      <DailyCheckContainer>
        <DailyTitle>Daily Check</DailyTitle>
        <DailyContents />
      </DailyCheckContainer>
    </StyleRoot>
  );
};

export default DailyCheck;
