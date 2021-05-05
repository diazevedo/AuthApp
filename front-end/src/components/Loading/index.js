import * as Styled from "./styles";

import loadingImage from "../../assets/images/loading.svg";

const Loading = () => {
  return (
    <Styled.Container>
      <img src={loadingImage} alt="spinner" />
    </Styled.Container>
  );
};

export default Loading;
