import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/AppContext";
import {
  StyledCardLarge,
  CardContent,
  CardEmojiContent,
  CardTextContent,
} from "./styles";

const Card = ({ pos, zIndex, size, content }) => {
  const { activeEmoji } = useContext(Context);
  return (
    <StyledCardLarge pos={pos} zIndex={zIndex} width={size} height={size}>
      {content && (
        <CardContent>
          <CardEmojiContent>{activeEmoji.symbol ?? ""}</CardEmojiContent>
          <CardTextContent>{activeEmoji.title ?? ""}</CardTextContent>
        </CardContent>
      )}
    </StyledCardLarge>
  );
};

Card.defaultProps = {
  zIndex: 1,
  size: 300,
  content: false,
};
Card.propTypes = {
  pos: PropTypes.number.isRequired,
  zIndex: PropTypes.number,
  size: PropTypes.number,
  content: PropTypes.bool,
};

export default Card;
