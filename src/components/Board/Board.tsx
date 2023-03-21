import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  flex-flow: column wrap;

  &::before,
  &::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }

  height: calc(90px * 3);
  width: max-content;
`;
