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

const SignUp = () => {
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
      const response = await api.post("/users", details, {
        withCredentials: true,
      });

      if (response.status === 201) history.push("/");
    } else {
      console.log("erro");
    }
  };

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

      <Form handleSubmit={handleSubmit}>
        <InputWithIcon
          icon="mail"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputs}
        />
        <InputWithIcon
          icon="lock"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputs}
        />
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
