import React, { useState } from "react";
import styled from "styled-components";
import ReactDom from "react-dom";
//import data from "../data";

const Button = styled.button`
  background-color: #19e66e;
  font-size: 26px;
  padding: 12px;
  margin: 10px;
  font-weight: bold;
  border-radius: 12px;
`;

const Input = styled.input`
  font-size: 26px;
  padding: 12px;
  margin: 10px;
  font-weight: bold;
  border-radius: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 26%;
`;

const Ul = styled.ul`
  box-shadow: 5px 5px 5px;
  margin: 5px;
`;

const Suggestion = styled.li`
  font-size: 20px;

  &:hover {
    background-color: #f5f0e1;
  }
`;

const P = styled.p`
  font-size: 15px;
  color: #4ad5ff;
`;
const Typehead = ({ suggestions, handleSelect, categories }) => {
  //Those arguments are defined in App.js
  // We have array of books and a function(handleSelect)
  console.log(suggestions);
  const [value, setValue] = useState(""); //default state of the value

  //Declaration below will filter the search based on input provided using filter & innludes
  const matchedSuggestions = suggestions.filter((book) => {
    if (value.length > 2) {
      return book.title.toLowerCase(value).includes(value.toLowerCase());
    }
  });
  //console.log(matchedSuggestions);
  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)} //This function automatically updates value
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      ></Input>
      <Button onClick={() => setValue("")}>Clear</Button>
      {matchedSuggestions.length > 0 && (
        <Wrapper>
          {matchedSuggestions.map((suggestion) => {
            let index = suggestion.title.search(value);
            let firstHalf = suggestion.title.slice(0, index + 1 + value.length);
            let secondHalf = suggestion.title.slice(index + 1 + value.length);
            return (
              <Suggestion
                key={suggestion.id}
                onClick={() => handleSelect(suggestion.title)}
              >
                <span>
                  {firstHalf} <strong>{secondHalf}</strong>
                </span>
                <span>
                  <P>{categories[suggestion.categoryId].name}</P>
                </span>
              </Suggestion>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

export default Typehead;
