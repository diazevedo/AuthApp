import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  border-radius: 24px;
  padding: 2rem;

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

  &:last-child {
    margin-bottom: 8rem;
  }
`;

export const LinkTo = styled(Link)`
  color: #2f80ed;
`;

export const Fieldset = styled.fieldset`
  font-size: 1.8rem;
  color: #e0e0e0;

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const Legend = styled.legend`
  margin-bottom: 3rem;
`;
