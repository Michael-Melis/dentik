import styled from "styled-components";

export const StyledLogo = styled.div`
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 0 0 5px 5px;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  h1 {
    border-radius: 25px;
    padding: 0.2rem 2rem;
    margin-bottom: 0.2rem;
    color: rgb(55, 203, 176, 0.7);
    font-weight: 100;
    background: linear-gradient(
      to bottom,
      #fff 0%,
      #dcf6f1 80%,
      #b8ede3 90%,
      #37cbb0 100%
    );
  }
`;
