import styled from "styled-components";
import React from "react";
import { useState } from "react";

const ListContainer = styled.div`
  border: solid 1px black;
  height: 100%;
`;

const ListContent = styled.form`
  display: flex;
  font-size: 20px;
  border: none;
  width: 100%;
`;

const CategoryInput = styled.input`
  color: black;
  height: 100%;
  width: 20%;
  border: none;
  padding: 0;
  border-bottom: solid 1px black;
`;
const ListInput = styled.input`
  color: black;
  height: 100%;
  border: none;
  width: 70%;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  padding: 0;
`;

const SubmitBtn = styled.button`
  width: 10%;
  padding: 0;
  margin: 0;
`;

const ListTitle = styled.div`
  border-bottom: solid 1px black;
  width: 100%;
  display: flex;
`;

const Category = styled.span`
  color: black;
  width: 20%;
`;
const Contents = styled.span`
  color: black;
  border-left: solid 1px black;
  width: 80%;
`;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [category, setCategory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setCategoryValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, inputValue]);
    setCategory([...category, categoryValue]);
    setIsChecked(true);
  };

  return (
    <>
      <ListContainer>
        <ListTitle>
          <Category>Category</Category>
          <Contents>Contents</Contents>
        </ListTitle>
        <ListContent>
          <CategoryInput onChange={handleChange} />
          <ListInput onChange={handleChange} />
          <SubmitBtn onSubmit={handleSubmit} />
        </ListContent>
      </ListContainer>
    </>
  );
};

export default TodoList;
