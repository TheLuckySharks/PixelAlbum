import React, { useState } from "react";
import { IoInformationCircleOutline, IoMenuOutline } from "react-icons/io5";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
}

export function Header({ openInfoPopUp }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
    setIsMenuOpen(false);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <div style={{ position: "relative" }}>
          <IoMenuOutline onClick={handleMenuToggle} size={30} />
          {isMenuOpen && (
            <Styled.Menu>
              <Styled.MenuItem>
                <a
                  href="https://rockheardle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rock Heardle Games
                </a>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <a
                  href="https://www.freeprivacypolicy.com/live/0ab2c3ab-47a1-4b7c-aba0-f448f421fde6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </Styled.MenuItem>
            </Styled.Menu>
          )}
        </div>
        <Styled.Logo>Pixel </Styled.Logo>
        <IoInformationCircleOutline
          onClick={openInfoPopUp}
          size={30}
          style={{ marginLeft: "auto" }}
        />
        {activeMenuItem === "Rock Heardle"}
        {activeMenuItem === "Privacy Policy"}
      </Styled.Content>
    </Styled.Container>
  );
}
