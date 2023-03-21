import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export interface RectProps extends PropsWithChildren {
  background?: "fill" | "transparent";
  onClick?: () => void;
}

const Wrapper = styled.div<{ $background: RectProps["background"] }>`
  cursor: pointer;
  border: thin solid black;
  margin-top: -1px;
  margin-left: -1px;

  width: max-content;
  min-width: 90px;
  height: max-content;
  min-height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.$background === "fill" ? "gray" : "none"};

  &:nth-child(3n + 1) {
    order: 1;
  }

  &:nth-child(3n + 2) {
    order: 2;
  }

  &:nth-child(3n) {
    order: 3;
  }
`;

export const Rect: FC<RectProps> = ({
  children,
  background = "transparent",
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick} $background={background}>
      {children}
    </Wrapper>
  );
};
