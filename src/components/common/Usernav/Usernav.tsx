import { FC } from "react";
import s from "./Usernav.module.css";
import Link from "next/link";

// import { useUI } from "@components/ui/context";
import { LineItem } from "@/framework/common/types/cart";
import { Heart, Bag as Cart } from "@/components/icons";

const Usernav: FC = () => {
  // const { openSidebar } = useUI();
  // const { data } = useCart();

  // const itemsCount =
  //   data?.lineItems.reduce((count: number, item: LineItem) => {
  //     return count + item.quantity;
  //   }, 0) ?? 0;

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart />
          {/* {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>} */}
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
