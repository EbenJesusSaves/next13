import React, { FC, ReactNode } from "react";
import s from "./Grid.module.css";
import { Key } from "react";
const Grid: FC<ReactNode> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default Grid;
