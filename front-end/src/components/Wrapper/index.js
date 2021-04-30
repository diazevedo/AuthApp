import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 47.5rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 558px) {
    justify-content: center;
  }
`;

export default Wrapper;
