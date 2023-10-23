import React, { ReactNode } from "react";
import s from "./marquee.module.css";
interface Props {
  children: ReactNode;
}
const Marquee = ({ children }: Props) => {
  return <div className={s.root}>{children}</div>;
};

export default Marquee;
