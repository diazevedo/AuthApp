import styled from "styled-components";

export const Container = styled.div`
  padding-top: 3rem;
  max-width: 82.5rem;

  margin: 0 auto;

  > h1,
  > p {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  > div {
    margin-top: 3.5rem;

    @media (min-width: 558px) {
      margin-top: 4.5rem;
    }
  }
`;
