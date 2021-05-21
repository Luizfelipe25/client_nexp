import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(28, 27, 27, 1) 0%,
    rgba(26, 23, 23, 1) 100%
  );
  bottom: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin-left: 60px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(autofill, minmax(200px, 1fr));
  }
`;

export const Link = styled.div`
  a {
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #1888ff;
      transition: 20ms ease-in;
    }
  }

  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #1888ff;
    transition: 20ms ease-in;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
