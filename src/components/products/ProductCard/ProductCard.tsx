import { Product } from "@/framework/common/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./ProductCard.module.css";
interface Props {
  product: Product;
  variant?: "Slim" | "simple";
}

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <div className={s.root}>
      {variant === "Slim" ? (
        <div className="flex flex-col">
          <div>
            <span className="text-white p-3 font-bold">{product.name}</span>
          </div>
          {product.images && (
            <Image
              className={s.productImage}
              width={320}
              height={320}
              layout="fixed"
              alt={product.name ?? "product image"}
              src={product.images[0].url}
            />
          )}
        </div>
      ) : (
        <>
          <div className={s.productBg}></div>
          <Link href={`product.slug/${product.slug}`}>
            <div className={s.productTag}>
              <h3 className={s.productTitle}>
                <span>{product.name} </span>
              </h3>
              <span className={s.productPrice}>
                {product.price.value} {product.price.currencyCode}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                width={540}
                height={540}
                layout="responsive"
                alt={product.name ?? "product image"}
                src={product.images[0].url}
              />
            )}
          </Link>
        </>
      )}
    </div>
  );
};

export default ProductCard;
