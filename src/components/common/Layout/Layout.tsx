import { ReactNode } from "react";
import s from "./Layout.module.css";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className={s.root}>{children}</main>
    </>
  );
};

export default Layout;
