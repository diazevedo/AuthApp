import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 2rem;

  @media (min-width: 558px) {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
  }

  h2 {
    margin: 4rem 0 2rem;

    @media (min-width: 558px) {
      font-size: 2.4rem;
    }
  }

  > p {
    line-height: 1.8rem;
    margin-top: 1rem;

    @media (min-width: 558px) {
      font-size: 1.4rem;
    }
  }

  form {
    margin-top: 2.5rem;

    input {
      margin-bottom: 3rem;
    }
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  color: #e0e0e0;
  margin-bottom: 1rem;
  display: block;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 9rem;

  font-size: 1.6rem;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding-left: 1.8rem;
  letter-spacing: 1px;
  color: #fff;
`;

export const Button = styled.button`
  border-radius: 12px;
  padding: 1rem 3.2rem;
  border: #e0e0e0 1px solid;
  color: #e0e0e0;
  font-size: 1.6rem;
  box-sizing: border-box;
  background: #2f80ed;
`;
