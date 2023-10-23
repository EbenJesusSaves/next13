import { NextComponentType } from "next";
import React, { FC, ReactNode, HTMLAttributes, ComponentType } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: Container = "div" }) => {
  return <Container className="px-6 mx-auto ">{children}</Container>;
};

export default Container;
