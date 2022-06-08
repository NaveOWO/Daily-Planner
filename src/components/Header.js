import styled from "styled-components";

const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
  font-family: "Independence_hall";
  color: white;
`;
const Title = styled.h1`
  width: 70%;
  font-size: 40px;
  margin: 30px 0 0 20px;
`;
const TodayDate = styled.div`
  font-size: 30px;
  height: 100%;
  width: 30%;
  margin-top: 40px;
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
