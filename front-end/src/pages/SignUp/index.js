import React from "react";
import * as Styled from "./styles";

import LogoLink from "../../components/LogoLink";
import Form from "../../components/Form";

import InputWithIcon from "../../components/InputWithIcon";
import Button from "../../components/Button";
import Socials from "../../parts/Socials";

const SignUp = () => {
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
        <InputWithIcon icon="mail" type="email" placeholder="Email" />
        <InputWithIcon icon="lock" type="password" placeholder="Password" />
        <Button>Start coding now</Button>
      </Form>
      <Styled.TextNormal>
        or continue with these social profile
      </Styled.TextNormal>
      <Socials />

      <Styled.TextNormal>
        Already a member? <Styled.LinkTo to="/">Login</Styled.LinkTo>
      </Styled.TextNormal>
    </Styled.Container>
  );
};

export default SignUp;
