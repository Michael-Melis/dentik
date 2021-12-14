import styled from "styled-components";

export const StyledTimer = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #ffffff;
    font-size: 1.5rem;

    text-shadow: 1px 1px 2px black;
  }
`;

export const Circle = styled.div`
  border: 11px solid rgb(55, 203, 176, 0.9);
  box-shadow: 1px 2px 20px black;
  border-radius: 50%;
  margin-top: 5rem;
  width: 15rem;
  height: 15rem;
  margin-top: 8rem;
  a {
    text-decoration: none;
  }
`;
