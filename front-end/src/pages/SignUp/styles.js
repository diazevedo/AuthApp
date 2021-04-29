import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 47.5rem;

  @media (min-width: 558px) {
    border: 1px solid #bdbdbd;
    border-radius: 24px;
    padding: 4rem 6rem;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 90%;
  color: #e0e0e0;

  margin-top: 1.8rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin-top: 1.2rem;
  color: #e0e0e0;
`;

export const TextNormal = styled.p`
  font-weight: 400;
  color: #828282;
  font-size: 1.4rem;
  text-align: center;

  margin-top: 2rem;
`;

export const LinkTo = styled(Link)`
  color: #2f80ed;
`;
