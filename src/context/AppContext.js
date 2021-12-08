import React, { useState, useEffect } from "react";
import { emojiList as emojiData } from "../data";

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

  return (
    <Context.Provider
      value={{
        emojiList,
        activeEmoji,
        setActiveEmojiHandler,
        filteredEmojiList,
        setFilteredEmojiList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
