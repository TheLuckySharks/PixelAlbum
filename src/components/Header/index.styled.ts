import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-color: ${({ theme }) => theme.border};
  border-bottom-width: 0.5px;
  border-bottom-style: solid;

  margin-bottom: 15px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;

  width: 40%;

  @media (max-width: 768px) {
    width: 95%;
  }

  max-width: 650px;

  svg:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-family: "Common Pixel", sans-serif;
  text-transform: uppercase;
  text-align: center;

  -webkit-touch-callout: none;
  user-select: none;
`;

export const Menu = styled.ul`
  position: absolute;
  top: 50px;
  width: 200px;
  background-color: ${({ theme }) => theme.background100};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  z-index: 1;
`;

export const MenuItem = styled.li`
  margin-bottom: 8px;
  font-size: 16px;
  list-style-type: none;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    display: block;
    padding: 8px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      background-color: #c0c0c0;
    }
  }
`;
