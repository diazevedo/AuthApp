import React from "react";
import * as Styled from "./styles";

import LogoLink from "../LogoLink";
// import Menu from "../Menu";
import { useAuthState } from "../../Context/Auth";

const Header = () => {
  const {
    state: { user },
  } = useAuthState();

  console.log("header");
  console.log(user);

  return (
    <Styled.Container>
      <LogoLink />
      <Styled.MenuWrapper>
        {/* <Menu /> */}
        <img
          src={`${process.env.REACT_APP_API}/files/${user.file.filename}`}
          alt="user"
        />
        <Styled.MenuLink>{user.name.toLowerCase()}</Styled.MenuLink>
        <Styled.Button>open menu</Styled.Button>
      </Styled.MenuWrapper>
    </Styled.Container>
  );
};

export default Header;
