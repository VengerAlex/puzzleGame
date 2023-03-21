import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  background-color: #262e36;
  border-radius: 8px;
  color: #fff;
  transition: all 0.1s linear;

  &:hover {
    background-color: #214b74;
  }

  &:disabled {
    background-color: #dce0eb;
    color: #262e36;
  }
`;
