import React from "react";

import * as Styled from "./styles";

function IconLink({ text, handleClick, icon = "google" }) {
  return (
    <Styled.Link onClick={() => handleClick()} icon={icon}>
      {text}
    </Styled.Link>
  );
}

export default IconLink;
