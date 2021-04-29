import React from "react";

import * as Styled from "./styles";

function LogoLink({ text = "Auth App" }) {
  return (
    <Styled.Title>
      <Styled.Link to="/" title="Auth App">
        {text}
      </Styled.Link>
    </Styled.Title>
  );
}

export default LogoLink;
