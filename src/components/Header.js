import styled from "styled-components";

const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
`;
const Title = styled.h1`
  color: black;
  font-size: 80px;
  margin: 0;
`;
const TodayDate = styled.div`
  font-size: 50px;
  height: 100%;
  border: solid 1px black;
  margin-top: 20px;
  margin-left: 40%;
`;

const Header = () => {
  let now = new Date();
  let today =
    `${now.getFullYear()}` +
    "." +
    `${now.getMonth()}` +
    "." +
    `${now.getDate()}`;
  return (
    <HeaderContainer>
      <Title>TODAY'S PLAN</Title>
      <TodayDate>{today}</TodayDate>
    </HeaderContainer>
  );
};

export default Header;
