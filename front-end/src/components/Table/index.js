import React from "react";
import * as Styled from "./styles";
import TextOne from "../TextOne";
import Text from "../Text";

import EditButton from "../ActionButton";
import { useAuthState } from "../../Context/Auth";

const Table = () => {
  const {
    state: { user },
  } = useAuthState();

  return (
    <Styled.Wrapper>
      <Styled.Table>
        <Styled.Caption>
          <Styled.CaptionContainer>
            <div>
              <TextOne as="p">Profile</TextOne>
              <Text>Some info may be visible to other people</Text>
            </div>

            <EditButton text="Edit" />
          </Styled.CaptionContainer>
        </Styled.Caption>

        <Styled.TBody>
          <Styled.FirstTr>
            <th>Photo</th>
            <td>
              <img
                src={
                  user.file.filename
                    ? `${process.env.REACT_APP_API}/files/${user.file.filename}`
                    : `https://picsum.photos/72`
                }
                alt={`${user.name}'s profile`}
              />
            </td>
          </Styled.FirstTr>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>bio</th>
            <td>
              {user.bio ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti cupiditate laboriosam id reprehenderit! Id laboriosam accusamus modi doloremque aliquid, facilis harum sint quis perspiciatis temporibus aliquam molestiae sapiente."}
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email || ""}</td>
          </tr>
          <tr>
            <th>password</th>
            <td>************</td>
          </tr>
        </Styled.TBody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default Table;
