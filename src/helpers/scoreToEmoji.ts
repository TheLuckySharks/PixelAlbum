import { GuessType } from "../types/guess";

export function scoreToEmoji(guesses: GuessType[]): string {
  const emojis = {
    incorrect: "🟥",
    correct: "🟩",
    skip: "⬜",
    empty: "⬛️",
  };
  const todaysDate = new Date();
  const prefix = `pixel.RockHeardle.com - Pixel ${todaysDate.toLocaleDateString()}`;

  let scoreEmoji = "";

  // Limit the loop to iterate only 4 times or until the end of the guesses array
  for (let i = 0; i < Math.min(guesses.length, 4); i++) {
    const guess = guesses[i];
    if (guess.isCorrect === true) {
      scoreEmoji += emojis.correct;
    } else if (guess.skipped === true) {
      scoreEmoji += emojis.skip;
    } else if (guess.isCorrect === false) {
      scoreEmoji += emojis.incorrect;
    } else {
      scoreEmoji += emojis.empty;
    }
  }

  return `${prefix} ${scoreEmoji}`;
}
