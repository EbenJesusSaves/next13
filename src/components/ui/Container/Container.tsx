import { NextComponentType } from "next";
import React, { FC, ReactNode, HTMLAttributes, ComponentType } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: Container = "div" }) => {
  return <Container>{children}</Container>;
};

export default Container;
