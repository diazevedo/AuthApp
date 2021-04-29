import styled from "styled-components";

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  max-width: 47.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 558px) {
    justify-content: center;
  }
`;

export default Wrapper;
