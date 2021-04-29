import styled from "styled-components";

export const Link = styled.button`
  text-indent: -9999px;
  border: 1px solid #828282;
  border-radius: 50%;
  background-image: ${({ icon }) =>
    `url(${process.env.PUBLIC_URL}/images/${icon}.svg)`};
  width: 4rem;
  height: 4rem;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
`;
