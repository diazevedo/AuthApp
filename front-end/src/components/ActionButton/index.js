import * as Styled from "./styles";

const ActionButton = ({ text }) => {
  return <Styled.LinkButton to="/edit">{text}</Styled.LinkButton>;
};

export default ActionButton;
