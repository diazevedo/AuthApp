import React from "react";
import * as Styled from "./styles";

import LogoLink from "../../components/LogoLink";
import Form from "../../components/Form";

import InputWithIcon from "../../components/InputWithIcon";
import Button from "../../components/Button";
import Socials from "../../parts/Socials";

const Login = () => {
  return (
    <Styled.Container>
      <LogoLink />

      <Form>
        <Styled.Fieldset>
          <Styled.Legend>Login</Styled.Legend>
          <InputWithIcon icon="mail" type="email" placeholder="Email" />
          <InputWithIcon icon="lock" type="password" placeholder="Password" />
          <Button>Login</Button>
        </Styled.Fieldset>
      </Form>
      <Styled.TextNormal>
        or continue with these social profile
      </Styled.TextNormal>

      <Socials />

      <Styled.TextNormal>
        Don't have an account yet?{" "}
        <Styled.LinkTo to="/register">Register</Styled.LinkTo>
      </Styled.TextNormal>
    </Styled.Container>
  );
};

export default Login;
