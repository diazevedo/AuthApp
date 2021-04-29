import styled from "styled-components";
import logo from "../../assets/images/logo-darkmode.svg";
import { Link as LinkRouter } from "react-router-dom";

export const Title = styled.h1`
  width: 100%;
`;

export const Link = styled(LinkRouter)`
  width: 10rem;
  height: 4rem;

  display: block;

  color: #fff;
  text-indent: -9999px;
  background-image: url(${logo});
  background-size: 14rem;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: -1rem;
`;
