import { Product } from "@/framework/common/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./ProductCard.module.css";
interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className={s.root}>
      <Link href={`product.slug/${product.slug}`}>
        <div className={s.productTag}>
          <h3 className={s.productTitle}>
            <span>{product.name} </span>
          </h3>
          <span className={s.productPrice}>Sandy Asare</span>
        </div>
        {product.images && (
          <Image
            width={540}
            height={540}
            layout="responsive"
            alt={product.name ?? "product image"}
            src={product.images[0].url}
          />
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
