import * as Styled from "./styles";

function InputText({ placeholder = "Email", type = "text", ...rest }) {
  return <Styled.Input placeholder={placeholder} type={type} {...rest} />;
}

export default InputText;
