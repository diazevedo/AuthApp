import * as Styled from "./styles";

import LinkLeftIcon from "../../components/LinkLeftIcon";
import TextOne from "../../components/TextOne";
import Text from "../../components/Text";
import Form from "../../components/Form";
import InputText from "../../components/InputText";

const Edit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.Wrapper>
      <LinkLeftIcon to="/profile" icon="left">
        Back
      </LinkLeftIcon>

      <TextOne as="h2">Change Info</TextOne>
      <Text>Changes will be refected to every services</Text>

      <Form handleSubmit={handleSubmit}>
        <Styled.Label htmlFor="name"> Name</Styled.Label>
        <InputText placeholder="Enter your name..." id="name" />

        <Styled.Label htmlFor="bio">Bio</Styled.Label>
        <Styled.TextArea placeholder="Enter your bio..." id="bio" />

        <Styled.Label htmlFor="phone">Phone</Styled.Label>
        <InputText placeholder="Enter your phone..." type="tel" id="phone" />

        <Styled.Label htmlFor="email">Email</Styled.Label>
        <InputText placeholder="Enter your email..." type="email" id="email" />

        <Styled.Button type="submit">Save</Styled.Button>
      </Form>
    </Styled.Wrapper>
  );
};

export default Edit;
