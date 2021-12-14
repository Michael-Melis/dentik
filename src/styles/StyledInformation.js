import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3rem 0;
    width: 50%;
    text-align: center;
    color: #fff;
    font-size: 2rem;
  }
`;

export const StyledInfoLinks = styled.div`
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 15px;
  a {
    color: #194e44;
    list-style: disc;
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

export const Dot = styled.div`
  border: 1px solid white;
  background: whiter;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
`;
