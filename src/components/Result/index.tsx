import React from "react";
import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";
import { Button } from "../Button";
import * as Styled from "./index.styled";
import styled from "styled-components";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const hoursToNextDay = Math.floor(
    (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000 /
      60 /
      60
  );
  const [isCopied, setIsCopied] = React.useState(false);
  const textForTry = [
    "Crystal Clear!",
    "Sharp Eye!",
    "Blurry Win!",
    "Pixel Phew!",
  ];

  const copyResult = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses));
    setIsCopied(true);
  }, [guesses]);

  if (didGuess) {
    const triesConjugation = currentTry === 1 ? "attempt" : "attempts";

    return (
      <>
        <Styled.ResultTitle>{textForTry[currentTry - 1]}</Styled.ResultTitle>
        <Styled.SongTitle>
          Today's album is {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.Tries>
          You guessed it in {currentTry} {triesConjugation}
        </Styled.Tries>
        <img src={todaysSolution.ClearcoverUrl} alt="Album Cover" />
        <ButtonContainer>
          <Button onClick={copyResult} variant="green">
            Copy results
          </Button>
        </ButtonContainer>
        {isCopied && <Styled.Text>Copied to clipboard!</Styled.Text>}
        <Styled.TimeToNext>
          New album tomorrow: {hoursToNextDay} hours!
        </Styled.TimeToNext>
      </>
    );
  } else {
    return (
      <>
        <Styled.ResultTitle>Better luck next time...</Styled.ResultTitle>
        <Styled.SongTitle>
          Today's album is {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <img src={todaysSolution.ClearcoverUrl} alt="Album Cover" />
        <ButtonContainer>
          <Button onClick={copyResult} variant="green">
            Copy results
          </Button>
        </ButtonContainer>

        {isCopied && <Styled.Text>Copied to clipboard!</Styled.Text>}
        <Styled.TimeToNext>
          Try again tomorrow: {hoursToNextDay} hours!
        </Styled.TimeToNext>
      </>
    );
  }
}
const ButtonContainer = styled.div`
  margin-top: 20px;
`;
