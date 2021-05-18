import { useRef, useState } from "react";

import * as Styled from "./styles";

import LinkLeftIcon from "../../components/LinkLeftIcon";
import TextOne from "../../components/TextOne";
import Text from "../../components/Text";
import Form from "../../components/Form";
import InputText from "../../components/InputText";

import { useAuthState } from "../../Context/Auth";

import api from "../../services/api";

const Edit = () => {
  const { state, update } = useAuthState();

  const { user } = state;
  const [details, setDetails] = useState(user);

  const [hasImageChanged, setHasImageChanged] = useState(false);

  const refFile = useRef(null);
  const refImage = useRef(null);

  const handleInputs = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });

    console.log(details);
  };

  const handleInputImage = (e) => {
    e.preventDefault();
    refImage.current.src = URL.createObjectURL(refFile.current.files[0]);
    setHasImageChanged(true);
  };

  const saveImage = async () => {
    const fileForm = new FormData();
    fileForm.append("file", refFile.current.files[0]);

    const { data } = await api.post("/files", fileForm, {
      withCredentials: true,
    });

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hasImageChanged) await saveImage();

    const response = await api.put("/users", details, {
      withCredentials: true,
    });

    update({ user: response.data.user });
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
              <img
                src={
                  user.file.filename
                    ? `${process.env.REACT_APP_API}/files/${user.file.filename}`
                    : `https://picsum.photos/72`
                }
                alt="user"
                ref={refImage}
              />
              Change Photo
              <input
                type="file"
                name="file"
                id="file"
                accept="image/png, image/jpeg"
                ref={refFile}
                onChange={handleInputImage}
              />
            </Styled.Label>
          </Styled.ImageContainer>

          <Styled.Label htmlFor="name">Name</Styled.Label>
          <InputText
            name="name"
            placeholder="Enter your name..."
            id="name"
            value={details.name || "dedd"}
            onChange={handleInputs}
          />

          <Styled.Label htmlFor="bio">Bio</Styled.Label>
          <Styled.TextArea
            name="bio"
            placeholder="Enter your bio..."
            id="bio"
            value={details.bio}
            onChange={handleInputs}
          />

          <Styled.Label htmlFor="phone">Phone</Styled.Label>
          <InputText
            name="phone"
            placeholder="Enter your phone..."
            type="tel"
            id="phone"
            value={details.phone || ""}
            onChange={handleInputs}
          />

          <Styled.Label htmlFor="email">Email</Styled.Label>
          <InputText
            name="email"
            placeholder="Enter your email..."
            type="email"
            id="email"
            defaultValue={details.email}
            onChange={handleInputs}
          />

          <Styled.Label htmlFor="password">Password</Styled.Label>
          <InputText
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password..."
            onChange={handleInputs}
          />

          <Styled.Button type="submit">Save</Styled.Button>
        </Form>
      </div>
    </Styled.Wrapper>
  );
};

export default Edit;
