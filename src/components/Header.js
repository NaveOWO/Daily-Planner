import styled from "styled-components";

const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
  font-family: "Independence_hall";
  color: white;
  opacity: 0.8;
`;
const Title = styled.h1`
  width: 70%;
  font-size: 60px;
  margin: 10px 0 0 10px;
`;
const TodayDate = styled.div`
  font-size: 50px;
  height: 100%;
  width: 30%;
  margin-top: 20px;
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
