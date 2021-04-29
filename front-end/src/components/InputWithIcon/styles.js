import styled from "styled-components";

import { Input as InputText } from "../InputText/styles";

export const Input = styled(InputText)`
  background-image: ${(props) =>
    `url(${process.env.PUBLIC_URL}/images/${props.icon}.svg)`};
  background-position: 1.4rem center;
  background-size: 2.1rem;
  padding-left: 5rem;
  background-repeat: no-repeat;
`;
