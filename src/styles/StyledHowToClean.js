import styled from "styled-components";

export const StyledHowToClean = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;
  margin-bottom: 10vh;
  h1 {
    padding: 0.5rem 1rem;
    color: #194e44;
    border-radius: 15px;
    font-size: 1.5rem;
    text-align: center;
    margin: 2rem auto 2rem auto;
    width: 80%;
    background-color: rgb(255, 255, 255, 0.7);
  }
  h2 {
    color: #fff;
    background: #194e44;
    width: 70%;
    font-size: 1rem;
    margin: 0 auto;
    border-radius: 15px;
    text-align: center;
    padding: 0.3rem 1rem;
  }
  h3 {
    text-align: center;
    margin: 1rem 3rem;
    font-size: 1rem;
  }
  img {
    width: 80%;
    margin: 1rem auto;
  }
  p {
    margin: 2rem 3rem;
    color: #fff;
    span {
      font-style: italic;
      margin-left: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    text-align: center;
  }
`;

export const Line = styled.div`
  margin: 1rem 2rem;
  box-shadow: 2px 2px 4px black;
  border-bottom: 2px solid rgb(255, 255, 255, 0.7);
`;

export const FloatingBtn = styled.button`
  position: sticky;
  width: 50%;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  top: 80%;
  left: 90%;
  background: #fff;
  border: 1px solid white;

  a {
    text-decoration: none;
    color: #37cbb0;
  }
`;
