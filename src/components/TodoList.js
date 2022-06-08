import styled from "styled-components";
import React from "react";
import { useState } from "react";

const StyleRoot = styled.section`
  background-color: rgb(255, 255, 255, 0.5);
`;

const ListContainer = styled.div`
  height: 100%;
  padding: 10px;
`;

const ListContent = styled.form`
  display: flex;
  font-size: 20px;
  border: none;
  width: 100%;
  height: 30px;
  border-bottom: solid 1px black;
`;

const CategoryInput = styled.input`
  color: black;
  font-size: 20px;
  background-color: transparent;
  height: 100%;
  width: 20%;
  border: none;
  padding: 0;
  border-bottom: solid 1px black;
  font-family: "ParkYongJun";
  text-align: center;
`;
const ListInput = styled.input`
  color: black;
  background-color: transparent;
  height: 100%;
  border: none;
  width: 70%;
  border-left: solid 1px black;
  padding: 0 0 0 10px;
  font-size: 20px;
  font-family: "ParkYongJun";
`;

const CheckInput = styled.input`
  background-color: transparent;
  border: none;
  width: 10%;
  padding: 0;
`;

const ListTitle = styled.div`
  border-bottom: solid 1px black;
  width: 100%;
  display: flex;
  text-align: center;
  color: white;
`;

const Category = styled.span`
  width: 20%;
  font-family: "Independence_hall";
  font-size: 20px;
`;
const Contents = styled.span`
  border-left: solid 1px black;
  width: 80%;
  padding: 0 0 0 10px;
  font-family: "Independence_hall";
  font-size: 20px;
`;

const TodoList = () => {
  return (
    <StyleRoot>
      <ListContainer>
        <ListTitle>
          <Category>Category</Category>
          <Contents>Contents 🗒</Contents>
        </ListTitle>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
        <ListContent>
          <CategoryInput />
          <ListInput />
          <CheckInput />
        </ListContent>
      </ListContainer>
    </StyleRoot>
  );
};

export default TodoList;
