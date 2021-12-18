import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInfoLinks = styled.div`
  background-color: #194e44;
  border-radius: 27px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  a {
    color: #fff;
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1rem;
    li {
      margin: 2rem 2rem;
    }
  }
`;

export const StyledInfoHeader = styled.div`
  margin: 2rem 5rem 0 5rem;
  h1 {
    background-color: rgb(255, 255, 255, 0.7);
    border-radius: 15px;
    margin: 1.4rem 0;
    padding: 0.5rem 1.5rem;

    text-align: center;
    color: #194e44;
    font-size: 1.5rem;

    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledIconCircle = styled(FontAwesomeIcon)`
  color: #37cbb0;
  margin-left: 1rem;
  font-size: 0.6rem;
`;
