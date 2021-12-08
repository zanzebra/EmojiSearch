import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import MiniCard from "./MiniCard";
import { StyledMiniCardList } from "./styles";

const MiniCardList = () => {
  const { filteredEmojiList } = useContext(Context);
  return (
    <StyledMiniCardList>
      {filteredEmojiList.map((emoji) => (
        <MiniCard key={emoji.title} emoji={emoji} />
      ))}
    </StyledMiniCardList>
  );
};

export default MiniCardList;
