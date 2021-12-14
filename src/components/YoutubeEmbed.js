import React from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
`;
const StyledIframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  position: absolute;
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
