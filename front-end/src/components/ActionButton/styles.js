import styled from "styled-components";

import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  border-radius: 12px;
  padding: 1rem 3.2rem;
  border: #e0e0e0 1px solid;
  color: #e0e0e0;
  font-size: 1.6rem;
  box-sizing: border-box;
  background: ${({ background }) => background};

  /* height: 3.8rem;
  line-height: 3.8rem; */
`;
