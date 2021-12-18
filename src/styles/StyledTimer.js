import styled from "styled-components";

export const StyledTimer = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #ffffff;
    font-size: 1.5rem;

    text-shadow: 0px 4px 7px black;
  }
`;

export const Circle = styled.div`
  border: 11px solid rgb(55, 203, 176, 0.9);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  border-radius: 50%;
  margin-top: 5rem;
  width: 15rem;
  height: 15rem;
  margin-top: 8rem;
  a {
    text-decoration: none;
  }
`;
