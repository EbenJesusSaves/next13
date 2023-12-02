import { FC } from "react";
import s from "./Usernav.module.css";
import Link from "next/link";

// import { useUI } from "@components/ui/context";
import { LineItem } from "@/framework/common/types/cart";
import { Heart, Bag as Cart } from "@/components/icons";
import { useUI } from "@/components/ui/context";

const Usernav: FC = () => {
  // const { openSidebar } = useUI();
  // const { data } = useCart();

  // const itemsCount =
  //   data?.lineItems.reduce((count: number, item: LineItem) => {
  //     return count + item.quantity;
  //   }, 0) ?? 0;
  const { openSidebar } = useUI();
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
          {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <div>
              {" "}
              <Heart />{" "}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
