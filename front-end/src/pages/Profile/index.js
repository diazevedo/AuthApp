import React from "react";
import TextOne from "../../components/TextOne";
import Text from "../../components/Text";
import Table from "../../components/Table";

import * as Styled from "./styles";

const Profile = () => {
  return (
    <Styled.Container>
      <TextOne>Personal Info</TextOne>
      <Text>Basic info, like your name and photo</Text>
      <Table />
    </Styled.Container>
  );
};

export default Profile;
