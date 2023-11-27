import { ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "..";
import { useUI } from "@/components/ui/context";
import { Sidebar } from "@/components/ui";
import CartSidebar from "@/components/cart/CartSidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const ui = useUI();

  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar isOpen={ui.isSideBarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
