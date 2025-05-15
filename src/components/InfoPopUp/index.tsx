import React from "react";
import { IoMusicalNotesSharp, IoInformationCircleSharp } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>How To Play</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoInformationCircleSharp size={130} />
          <p>
            You will be shown an album cover which is pixelated.
            <br />
            <p></p>
            Skipped or incorrect attempts, the album cover will become less
            pixelated.
            <br />
            <p></p>
            You get 4 attempts to guess the correct artist and album.
            <br />
            <p></p>
            Try to answer correctly in as few tries as possible and share your
            score!
          </p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Close
        </Button>
        <Styled.Contact>
          Contact Us - <a>rockheardle@gmail.com</a>{" "}
          <p>
            Privacy Policy -{" "}
            <a href="https://www.freeprivacypolicy.com/live/0ab2c3ab-47a1-4b7c-aba0-f448f421fde6">
              View
            </a>
          </p>
        </Styled.Contact>
      </Styled.PopUp>
    </Styled.Container>
  );
}
