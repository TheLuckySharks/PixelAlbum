import React, { useState, useEffect } from "react";
import { GuessType } from "../../types/guess";
import { Song } from "../../types/song";
import { Button, Guess, Search, Result } from "../";
import * as Styled from "./index.styled";

interface Props {
  guesses: GuessType[];
  todaysSolution: Song;
  currentTry: number;
  didGuess: boolean;
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
  skip: () => void;
  guess: () => void;
}

export function Game({
  guesses,
  todaysSolution,
  currentTry,
  didGuess,
  setSelectedSong,
  skip,
  guess,
}: Props) {
  const [skippedPictures, setSkippedPictures] = useState<string[]>([]);
  const remainingGuesses = 4 - currentTry;

  useEffect(() => {
    if (!didGuess && currentTry > 0 && !guesses[currentTry - 1].isCorrect) {
      const nextSkippedPictureIndex = (currentTry - 1) % 4;
      const nextSkippedPicture =
        todaysSolution.skippedPictures[nextSkippedPictureIndex];
      setSkippedPictures((prevSkippedPictures) => [
        ...prevSkippedPictures,
        nextSkippedPicture,
      ]);
    }
  }, [currentTry, didGuess, guesses, todaysSolution.skippedPictures]);

  const handleSkip = () => {
    const nextSkippedPictureIndex = currentTry % 4;
    const nextSkippedPicture =
      todaysSolution.skippedPictures[nextSkippedPictureIndex];
    setSkippedPictures((prevSkippedPictures) => [
      ...prevSkippedPictures,
      nextSkippedPicture,
    ]);
    skip();
  };

  if (didGuess || currentTry === 4) {
    return (
      <Result
        didGuess={didGuess}
        currentTry={currentTry}
        todaysSolution={todaysSolution}
        guesses={guesses}
      />
    );
  }

  return (
    <>
      <Styled.Container>
        <div>
          {skippedPictures.length > 0 ? (
            <img
              src={skippedPictures[skippedPictures.length - 1]}
              alt="Skipped Album Cover"
            />
          ) : (
            <img src={todaysSolution.coverUrl} alt="Album Cover" />
          )}
        </div>
        <Styled.GuessContainer>
          {guesses.slice(0, 4).map((guess: GuessType, index) => (
            <Guess
              key={index}
              guess={guess}
              isCorrect={guess.isCorrect}
              active={index === currentTry}
            />
          ))}
        </Styled.GuessContainer>

        <Search currentTry={currentTry} setSelectedSong={setSelectedSong} />
      </Styled.Container>

      <Styled.Buttons>
        <Button onClick={handleSkip}>
          {remainingGuesses === 1 ? "Give Up?" : `Skip`}
        </Button>
        <Button variant="green" onClick={guess}>
          Guess
        </Button>
      </Styled.Buttons>
    </>
  );
}
