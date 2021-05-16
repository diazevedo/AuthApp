import styled from "styled-components";

import profile from "../../assets/images/profile.svg";
import group from "../../assets/images/group.svg";
import logout from "../../assets/images/logout.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: ${(props) =>
    ({ open }) =>
      open ? "0" : "1000rem"};
  right: 0;
  background-color: #252429;

  @media (min-width: 558px) {
    border: 1px solid #e0e0e0;
    border-radius: 12px;

    max-width: 19rem;
    max-height: 17.5rem;

    position: absolute;
    top: 5rem;

    top: ${(props) =>
      ({ open }) =>
        open ? "5rem" : "-1000rem"};
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5rem;

    padding: 1.5rem 1rem;

    width: 100%;
    height: 100%;

    @media (min-width: 558px) {
      margin-top: 0;
    }

    li {
      width: 100%;
      margin-bottom: 0.5rem;

      a {
        color: #e0e0e0;
        text-transform: capitalize;
        font-size: 1.2rem;
        background-image: url(${profile});
        background-position: 10px center;
        background-repeat: no-repeat;
        background-size: 20px;
        border-radius: 12px;

        display: block;
        padding: 1.5rem 1rem;
        padding-left: 4.5rem;

        &.active {
          color: #4f4f4f;
          background-color: #f2f2f2;
        }

        &.group {
          background-image: url(${group});
        }
      }
    }
  }
`;

export const LastLi = styled.li`
  width: 100%;
  height: 6.5rem;
  line-height: 6.5rem;

  border-top: 1px solid #e0e0e0;

  button {
    color: #eb5757;
    background-image: url(${logout});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 10px center;

    padding-top: 0;
    padding-left: 4.5rem;
    padding-bottom: 0;
  }
`;
