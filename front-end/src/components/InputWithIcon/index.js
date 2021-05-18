import * as Styled from "./styles";

function InputWithIcon({
  icon = "camera",
  type = "text",
  placeholder,
  ...rest
}) {
  return (
    <Styled.Input icon={icon} placeholder={placeholder} type={type} {...rest} />
  );
}

export default InputWithIcon;
