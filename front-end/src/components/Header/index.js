import React from "react";
import * as Styled from "./styles";

import LogoLink from "../LogoLink";
import Menu from "../Menu";
import { useAuthState } from "../../Context/Auth";

const Header = () => {
  // const { user, isPending } = useAuthState();
  const { user } = useAuthState();

  return (
    <Styled.Container>
      <LogoLink />
      <Styled.MenuWrapper>
        {/* <Menu /> */}
        <img src="https://i.pravatar.cc/120?img=11" alt="" />
        <Styled.MenuLink>{user.name.toLowerCase()}</Styled.MenuLink>
        <Styled.Button>open menu</Styled.Button>
      </Styled.MenuWrapper>
    </Styled.Container>
  );
};

export default Header;
