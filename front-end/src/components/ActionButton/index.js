import * as Styled from "./styles";

const ActionButton = ({ text, background = "transparent" }) => {
  return (
    <Styled.LinkButton to="/edit" background={background}>
      {text}
    </Styled.LinkButton>
  );
};

export default ActionButton;
