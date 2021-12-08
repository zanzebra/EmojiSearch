import React, { useState, useContext } from "react";
import { filterByKeywords } from "../utils";
import { Context } from "../context/AppContext";
import {
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchButton,
} from "./styles";

const Search = () => {
  const {
    filteredEmojiList,
    setActiveEmojiHandler,
    emojiList,
    setFilteredEmojiList,
  } = useContext(Context);

  const filterKeywords = (newKeywords) => {
    const newFilteredList = filterByKeywords(emojiList || [], newKeywords);
    setFilteredEmojiList && setFilteredEmojiList(newFilteredList);
  };

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    filterKeywords && filterKeywords(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filteredEmojiList.length > 0 && setActiveEmojiHandler(filteredEmojiList[0]);
  };

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
