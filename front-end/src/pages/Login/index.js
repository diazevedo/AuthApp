import React from "react";
import * as Styled from "./styles";

import LogoLink from "../../components/LogoLink";
import Form from "../../components/Form";
import InputText from "../../components/InputText";

const Login = () => {
  return (
    <Styled.Container>
      <LogoLink />
      <Styled.Title>
        Join thousands of learners from around the world
      </Styled.Title>
      <Styled.Text>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </Styled.Text>

      <Form>
        <InputText />
      </Form>
    </Styled.Container>
  );
};

export default Login;
