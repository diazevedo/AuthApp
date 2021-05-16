import styled, { css } from "styled-components";

import icon from "../../assets/images/menu-icon.svg";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;

  max-width: 135rem;
  margin: 0 auto;

  @media (min-width: 970px) {
    padding: 0 8rem;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 558px) {
    position: relative;
  }

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 8px;
    object-fit: cover;
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

  z-index: 2;

  ${(props) =>
    props.open &&
    css`
      transform: rotate(180deg);
    `}
`;
