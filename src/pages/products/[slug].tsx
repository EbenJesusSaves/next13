import { Layout } from "@/components/common";
import { getConfig } from "@/framework/shopify/api/config";
import { getAllProductsPaths } from "@/framework/shopify/products/get-all-product-paths";
import { getProducts } from "@/framework/shopify/products/get-products";
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from "next";

import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProducts(config);

  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};

const ProductSlug = ({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <Layout>{product.slug}</Layout>;
};

export default ProductSlug;

ProductSlug.Layout = Layout;
