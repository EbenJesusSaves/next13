import { Product } from "@/framework/common/types/products";
import { ImageEdge, MoneyV2, Product as ShopifyProducts } from "../schema";

export function normalizeProducts(ProductNode: ShopifyProducts): Product {
  //normalizer gets the products from the node and returns what we need instead of all the products

  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageCollection,
    priceRange,
    ...rest
  } = ProductNode;
  const product = {
    id,
    name,
    vendor,
    description,

    path: `/${handle}`,
    slug: handle.replace(/^\/+\/+$/g, ""),
    images: normalizeProductsImages(imageCollection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};
const normalizeProductsImages = ({ edges }: { edges: ImageEdge[] }) => {
  //destructure within destructure
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
};
