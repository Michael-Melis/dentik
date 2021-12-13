import React, { useState, useEffect } from "react";
import { StyledNews } from "../styles/STyledNews";

const News = ({ array }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    console.log(messageIndex);
    if (messageIndex < array.length - 1) {
      setTimeout(() => setMessageIndex(messageIndex + 1), 10000);
    }
  }, [array, messageIndex]);

  const handleClick = () => {
    setMessageIndex(
      messageIndex === array.length - 1
        ? messageIndex - messageIndex
        : messageIndex + 1
    );
  };
  return (
    <StyledNews>
      <h4 onClick={handleClick}>{array[messageIndex]}</h4>
    </StyledNews>
  );
};

export default News;
