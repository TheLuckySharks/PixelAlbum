import React, { useState } from "react";
import { IoInformationCircleOutline, IoMenuOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

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
        <div style={{ position: "relative" }}></div>
        <Styled.Logo>Pixel </Styled.Logo>
        <IoInformationCircleOutline
          onClick={openInfoPopUp}
          size={30}
          style={{ marginLeft: "auto" }}
        />
      </Styled.Content>
    </Styled.Container>
  );
}
