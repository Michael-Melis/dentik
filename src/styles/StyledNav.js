import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #d1dddb;
  color: #37cbb0;
  padding: 1.5rem 1rem;
  border-radius: 5px 5px 0 0;
`;

export const StyledNavButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 100;
    letter-spacing: 3px;
    font-size: 11px;
  }
`;
