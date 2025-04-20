// import { DefaultTheme } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;

  .game-thumbnails {
    display: flex;
    align-items: flex-start; /* Align the thumbnails to the left */
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px; /* Add some gap between thumbnails */
  }
`;
// index.styled.js
export const StyledImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease; /* Add a transition for smooth scaling */
  margin-left: 50px; /* Use margin-left instead of left */

  &:hover {
    transform: scale(1.05); /* Scale the image up by 5% on hover */
  }
`;
export const PrivacyPolicyLink = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px; /* Adjust this value as needed */
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const UpdatePrefsLink = styled.a`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
