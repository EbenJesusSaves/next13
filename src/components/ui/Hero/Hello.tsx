import React, { FC } from "react";
import s from "./Hello.module.css";
import Link from "next/link";
import { Container } from "..";
interface Props {
  headline: string;
  description: string;
}

const Hello: FC<Props> = ({ headline, description }) => {
  return (
    <Container>
      <div className="bg-black  ">
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
        </div>
        <div className={s.description}>
          <p>{description}</p>
        </div>
        <Link className={s.link} href={"/"}>
          read it here dude
        </Link>
      </div>
    </Container>
  );
};

export default Hello;
