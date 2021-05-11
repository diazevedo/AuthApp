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
      <div>
        <TextOne as="h2">Change Info</TextOne>
        <Text>Changes will be refected to every services</Text>

        <Form handleSubmit={handleSubmit}>
          <Styled.ImageContainer>
            <Styled.Label htmlFor="file">
              <img src="https://i.pravatar.cc/120?img=11" alt="" />
              Change Photo
              <input
                type="file"
                name="file"
                id="file"
                accept="image/png, image/jpeg"
              />
            </Styled.Label>
          </Styled.ImageContainer>

          <Styled.Label htmlFor="name"> Name</Styled.Label>
          <InputText placeholder="Enter your name..." id="name" />

          <Styled.Label htmlFor="bio">Bio</Styled.Label>
          <Styled.TextArea placeholder="Enter your bio..." id="bio" />

          <Styled.Label htmlFor="phone">Phone</Styled.Label>
          <InputText placeholder="Enter your phone..." type="tel" id="phone" />

          <Styled.Label htmlFor="email">Email</Styled.Label>
          <InputText
            placeholder="Enter your email..."
            type="email"
            id="email"
          />

          <Styled.Button type="submit">Save</Styled.Button>
        </Form>
      </div>
    </Styled.Wrapper>
  );
};

export default Edit;
