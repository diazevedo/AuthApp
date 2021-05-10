import styled from "styled-components";

import icon from "../../assets/images/menu-icon.svg";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 3.2rem;
    border-radius: 8px;
    object-fit: cover;
  }

  & > a,
  & > button {
    display: none;

    @media (min-width: 558px) {
      display: block;
    }
  }
`;

export const MenuLink = styled.a`
  color: #e0e0e0;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.2rem;
  margin-left: 1rem;
  text-transform: capitalize;

  white-space: nowrap;
`;

export const Button = styled.button`
  background-image: url(${icon});
  text-indent: -9999px;
  background-repeat: no-repeat;
  background-size: 0.75rem;
  background-position: center;
  width: 20px;
  margin-left: 2rem;
`;
