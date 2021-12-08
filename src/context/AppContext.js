import React, { useState, useEffect } from "react";
import { emojiList as emojiData } from "../data";
import { filterByKeywords } from "../utils";

export const Context = React.createContext({});

const AppContext = ({ children }) => {
  const [emojiList, setEmojiList] = useState(emojiData);
  const [filteredEmojiList, setFilteredEmojiList] = useState([]);
  const [activeEmoji, setActiveEmoji] = useState({});

  useEffect(() => {
    setEmojiList(emojiData);
  }, []);

  const setActiveEmojiHandler = (value) => {
    setActiveEmoji(value);
  };

  const filterKeywords = (newKeywords) => {
    const newFilteredList = filterByKeywords(emojiList, newKeywords);
    setFilteredEmojiList(newFilteredList);
  };

  return (
    <Context.Provider
      value={{
        emojiList,
        activeEmoji,
        setActiveEmojiHandler,
        filteredEmojiList,
        filterKeywords,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
