import { Product } from "@/framework/common/types/products";
import {
  ImageEdge,
  MoneyV2,
  ProductOption,
  Product as ShopifyProducts,
} from "../schema";

const normalizeProductOptions = ({
  id,
  values,
  name: displayName,
}: ProductOption) => {
  const normalize = {
    id,
    displayName,
    values: values.map((val) => {
      let output = { label: val };
      return output;
    }),
  };
  return normalize;
};
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
    options,
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
    options: options
      ? options
          .filter((o) => o.name !== "Title")
          .map((op) => normalizeProductOptions(op))
      : [],

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
