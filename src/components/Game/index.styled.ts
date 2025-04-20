import styled from "styled-components";

export const Buttons = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%; /* Adjust this value to control the width of the buttons container */

  @media (max-width: 768px) {
    width: 100%; /* Change the width for smaller screens */
  }
`;
export const GuessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
