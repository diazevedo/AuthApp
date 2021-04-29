import styled from "styled-components";

export const Input = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 4.8rem;

  font-size: 1.6rem;

  background-color: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding-left: 1.8rem;

  &::placeholder {
    color: #828282;
  }
`;
