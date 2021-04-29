import React from "react";
import IconLink from "../../components/IconLink";

import * as Styled from "./styles";

const data = [
  {
    link: "login with google",
    label: "login with google",
    icon: "google",
  },
  {
    link: "facebook",
    label: "login with facebook",
    icon: "facebook",
  },
  {
    link: "twitter",
    label: "login with twitter",
    icon: "twitter",
  },
  {
    link: "github",
    label: "login with github",
    icon: "github",
  },
];

function Socials() {
  return (
    <Styled.Container>
      {data.map(({ label, link, icon }) => (
        <IconLink
          key={label}
          text={link}
          handleClick={() => console.log({ label })}
          icon={icon}
        />
      ))}
    </Styled.Container>
  );
}

export default Socials;
