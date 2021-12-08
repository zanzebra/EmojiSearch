import React, { useState, useContext } from "react";
import { Context } from "../context/AppContext";
import {
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchButton,
} from "./styles";

const Search = () => {
  const { filteredEmojiList, filterKeywords, setActiveEmojiHandler } =
    useContext(Context);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    filterKeywords(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveEmojiHandler(filteredEmojiList[0]);
  };
  console.log("searchValue");
  return (
    <StyledSearchContainer onSubmit={handleSubmit}>
      <StyledSearchInput
        placeholder="Happy"
        type="text"
        onChange={(e) => handleChange(e)}
        value={searchValue}
      />
      <StyledSearchButton>Search</StyledSearchButton>
    </StyledSearchContainer>
  );
};

export default Search;
