import React from "react";
import * as Styled from "./styles";

import LogoLink from "../LogoLink";
import Menu from "../Menu";
import { useAuthState } from "../../Context/Auth";

const Header = () => {
  const {
    state: { user },
  } = useAuthState();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen((previousState) => {
      return !previousState;
    });
  };

  return (
    <Styled.Container>
      <LogoLink />
      <Styled.MenuWrapper>
        <img
          src={
            user.file.filename
              ? `${process.env.REACT_APP_API}/files/${user.file.filename}`
              : `https://picsum.photos/72`
          }
          alt="user"
        />
        <Styled.MenuLink>{user.name.toLowerCase()}</Styled.MenuLink>
        <Styled.Button onClick={handleOpenMenu} open={isMenuOpen}>
          open menu
        </Styled.Button>
        <Menu open={isMenuOpen} />
      </Styled.MenuWrapper>
    </Styled.Container>
  );
};

export default Header;
