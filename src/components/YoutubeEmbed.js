import React from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
const StyledIframe = styled.iframe`
  height: 80%;
  width: 80%;

  border-radius: 15px;
`;

const YoutubeEmbed = ({ embedId }) => (
  <StyledVideo>
    <StyledIframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </StyledVideo>
);

export default YoutubeEmbed;
