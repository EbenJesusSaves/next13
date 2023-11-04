import { ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "..";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={s.root}>
      <Navbar />
      <>hi</>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
