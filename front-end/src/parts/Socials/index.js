import React from "react";
import IconLink from "../../components/IconLink";

import * as Styled from "./styles";

const data = [
  {
    link: "google",
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
  const handleClick = (provider) => {
    window.open(`${process.env.REACT_APP_API}auth/${provider}`, "_self");
  };

  return (
    <Styled.Container>
      {data.map(({ label, link, icon }) => (
        <IconLink
          key={label}
          text={link}
          handleClick={() => handleClick(link)}
          icon={icon}
        />
      ))}
    </Styled.Container>
  );
}

export default Socials;
