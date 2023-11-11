import { FC } from "react";

import Link from "next/link";
import s from "./Navbar.module.css";

import { Container } from "@/components/ui";
import Usernav from "../Usernav";

const Navbar: FC = () => {
  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 flex-row items-center">
          <Link href="/">
            <div className={s.logo}>NEXT_STORE</div>
          </Link>
          <nav className="ml-6 flexv flex-1 flex-row space-x-6">
            <Link href="/">
              <div className={s.link}>All</div>
            </Link>
            <Link href="/">
              <div className={s.link}>Clothes</div>
            </Link>
            <Link href="/">
              <div className={s.link}>Accesories</div>
            </Link>
            <Link href="/">
              <div className={s.link}>Shoes</div>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
