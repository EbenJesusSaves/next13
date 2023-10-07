import React, { FC, ReactNode } from "react";
import s from "./Grid.module.css";
import { Key } from "react";
const Grid = ({ children }: { children: ReactNode }) => {
  return <div className={s.root}>{children}</div>;
};

export default Grid;
