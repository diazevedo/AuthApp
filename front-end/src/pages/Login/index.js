import { useState } from "react";
import * as yup from "yup";
import * as Styled from "./styles";

import LogoLink from "../../components/LogoLink";
import Form from "../../components/Form";

import InputWithIcon from "../../components/InputWithIcon";
import Button from "../../components/Button";
import Socials from "../../parts/Socials";

import api from "../../services/api";
import history from "../../services/history";

const Login = () => {
  const [details, setDetails] = useState({});

  const handleInputs = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const schema = yup.object().shape({
      password: yup.string().required(),
      email: yup.string().email().required().min(6),
    });

    if (await schema.isValid(details)) {
      try {
        await api.post("/login", details, {
          withCredentials: true,
        });

        history.go("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Styled.Container>
      <LogoLink />

      <Form handleSubmit={handleSubmit}>
        <Styled.Fieldset>
          <Styled.Legend>Login</Styled.Legend>
          <InputWithIcon
            icon="mail"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInputs}
          />
          <InputWithIcon
            icon="lock"
            type="password"
            placeholder="Password"
            onChange={handleInputs}
            name="password"
          />
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
