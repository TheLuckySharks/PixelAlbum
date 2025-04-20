import styled from "styled-components";

export const Container = styled.div<{
  active: boolean;
  isCorrect: boolean | undefined;
  skipped: boolean;
}>`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isCorrect, skipped }) => {
    if (isCorrect === false || skipped) {
      return theme.red;
    } else {
      return "transparent";
    }
  }};

  border-color: ${({ theme, active, isCorrect }) => {
    if (active) {
      return theme.border;
    } else if (isCorrect === false) {
      return theme.red;
    } else {
      return theme.border100;
    }
  }};

  border-width: 1px;
  border-style: solid;

  color: ${({ theme }) => theme.text};
`;
export const Text = styled.p`
  width: 100%;
  height: max-content;

  padding: 0px 10px;

  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;
