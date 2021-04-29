import * as Styled from "./styles";

function InputWithIcon({ icon = "camera", type = "text", placeholder }) {
  return <Styled.Input icon={icon} placeholder={placeholder} type={type} />;
}

export default InputWithIcon;
