import styled from "styled-components";

import camera from "../../assets/images/camera.svg";

export const Wrapper = styled.div`
  padding: 4rem 2rem;

  max-width: 82.5rem;

  margin: 4rem auto;

  h2 {
    margin: 4rem 0 2rem;

    @media (min-width: 558px) {
      font-size: 2.4rem;
    }
  }

  > p {
    line-height: 1.8rem;
    margin-top: 1rem;

    @media (min-width: 558px) {
      font-size: 1.4rem;
    }
  }

  > div {
    @media (min-width: 558px) {
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 0 5rem 5rem;
      margin-top: 4rem;
    }
  }

  form {
    margin-top: 2.5rem;

    input {
      margin-bottom: 3rem;
      height: 5.2rem;

      @media (min-width: 558px) {
        max-width: 41.7rem;
      }
    }
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  color: #e0e0e0;
  margin-bottom: 1rem;
  display: block;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 9rem;

  font-size: 1.6rem;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding-left: 1.8rem;
  letter-spacing: 1px;
  color: #fff;

  @media (min-width: 558px) {
    max-width: 41.7rem;
  }
`;

export const Button = styled.button`
  display: block;
  border-radius: 12px;
  padding: 1rem 3.2rem;
  border: #e0e0e0 1px solid;
  color: #e0e0e0;
  font-size: 1.6rem;
  box-sizing: border-box;
  background: #2f80ed;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 12px;
    opacity: 0.2;
    margin-right: 30px;
  }

  background-repeat: no-repeat;
  background-size: 72px;

  position: relative;

  label {
    text-transform: uppercase;
    text-indent: 30px;

    display: flex;
    align-items: center;
  }

  input {
    border: 2px solid black;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &:after {
    content: "";

    width: 7.2rem;
    height: 7.2rem;

    position: absolute;
    top: 0.5rem;
    left: 0;

    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${camera});

    border-radius: 12px;
  }
`;
