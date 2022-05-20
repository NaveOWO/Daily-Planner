import styled from "styled-components";

const MemoContainer = styled.section`
  border: solid 1px black;
  margin-top: 30px;
  height: 100%;
`;

const MemoTitle = styled.h2`
  font-size: 30px;
  margin: 0;
`;

const MemoContents = styled.input`
  width: 100%;
  height: 100%;
`;

const Memo = () => {
  return (
    <>
      <MemoContainer>
        <MemoTitle>Memo</MemoTitle>
        <MemoContents />
      </MemoContainer>
    </>
  );
};

export default Memo;
