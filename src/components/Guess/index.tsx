import React from "react";
import { GuessType } from "../../types/guess";
import * as Styled from "./index.styled";

interface Props {
  guess: GuessType;
  isCorrect: boolean | undefined;
  active: boolean;
}

export function Guess({ guess, isCorrect, active }: Props) {
  const { song, skipped } = guess;

  React.useEffect(() => {
    if (song) {
      // Logic for handling correct guesses
    } else if (skipped) {
      // Logic for handling skipped guesses
    }
  }, [guess]);

  return (
    <Styled.Container active={active} isCorrect={isCorrect} skipped={skipped}>
      {/* No text to be displayed in the guess box */}
    </Styled.Container>
  );
}
