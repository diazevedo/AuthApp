import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export default styled(LinkRouter)`
  background-image: ${({ icon }) =>
    `url(${process.env.PUBLIC_URL}/images/${icon}.svg)`};
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: left center;
  color: #2d9cdb;
  font-size: 1.8rem;
  padding-left: 3rem;
`;
