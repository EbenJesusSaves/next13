import React, { ReactNode } from "react";
import s from "./marquee.module.css";
import cn from "classnames";
import Ticker from "react-ticker";
interface Props {
  children: ReactNode[];
  variant?: "primary" | "secondary";
}

const Marquee = ({ children, variant = "primary" }: Props) => {
  const rootClassName = cn(s.root, {
    [s.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
