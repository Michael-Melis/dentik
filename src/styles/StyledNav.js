import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #6ad6bc;
  color: #194e44;
  padding: 1.5rem 1rem;
  border-radius: 5px 5px 0 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  a {
    text-decoration: none;
    color: #194e44;
  }
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
