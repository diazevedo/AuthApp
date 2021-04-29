import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({ type: props.type }))`
  width: 100%;
  height: 4.8rem;

  font-size: 1.6rem;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding-left: 1.8rem;
  letter-spacing: 1px;
  color: #fff;
`;
