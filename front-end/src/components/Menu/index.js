import { NavLink } from "react-router-dom";
import * as Styled from "./styles";

const Menu = ({ open }) => {
  return (
    <Styled.Container open={open}>
      <ul>
        <li>
          <NavLink to="/">my profile</NavLink>
        </li>
        <li>
          <NavLink to="/group" className="group">
            group chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </Styled.Container>
  );
};

export default Menu;
