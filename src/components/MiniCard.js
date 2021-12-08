import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import PropTypes from "prop-types";
import { StyledMiniCard } from "./styles";

const MiniCard = ({ emoji }) => {
  const { setActiveEmojiHandler, activeEmoji } = useContext(Context);
  const handleEmojiClick = () => {
    setActiveEmojiHandler(emoji);
  };
  return (
    <StyledMiniCard
      onClick={handleEmojiClick}
      active={activeEmoji.title === emoji.title}
    >
      {emoji.symbol}
    </StyledMiniCard>
  );
};

MiniCard.propTypes = {
  emoji: PropTypes.object.isRequired,
};
export default MiniCard;
