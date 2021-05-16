import { NavLink } from "react-router-dom";
import * as Styled from "./styles";

import api from "../../services/api";
import history from "../../services/history";

const Menu = ({ open }) => {
  const handleButtonLogout = async () => {
    const response = await api.get("logout", { withCredentials: true });
    if (response.status === 205) history.go("/");
  };

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

        <Styled.LastLi>
          <button onClick={handleButtonLogout}>Logout</button>
        </Styled.LastLi>
      </ul>
    </Styled.Container>
  );
};

export default Menu;
