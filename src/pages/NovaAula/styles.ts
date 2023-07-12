import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    font-size: 45px;
    color: #fff;
  }
`;

interface IBemVindo {
  color: string;
}

export const BemVindo = styled.h1<IBemVindo>`
  font-size: 50px;
  color: ${(props) => props.color};
`;
