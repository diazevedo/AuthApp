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
  const handleClick = () => {
    window.open("http://localhost:3333/auth/google", "_self");
  };

  return (
    <Styled.Container>
      {data.map(({ label, link, icon }) => (
        <IconLink
          key={label}
          text={link}
          handleClick={handleClick}
          icon={icon}
        />
      ))}
    </Styled.Container>
  );
}

export default Socials;
