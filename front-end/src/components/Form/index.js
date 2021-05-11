import * as Styled from "./styles";

function Form({ children, handleSubmit }) {
  return <Styled.Form onSubmit={handleSubmit}>{children}</Styled.Form>;
}

export default Form;
