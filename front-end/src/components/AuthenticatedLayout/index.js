import * as Styled from "./styles";

import Header from "../Header";

const AuthenticatedLayout = ({ children }) => {
  return (
    <Styled.Container>
      <Header />
      {children}
    </Styled.Container>
  );
};

export default AuthenticatedLayout;
