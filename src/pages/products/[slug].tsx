import { Layout } from "@/components/common";
import { getConfig } from "@/framework/shopify/api/config";
import {
  getAllProductsPaths,
  getAllProducts,
  getProducts,
} from "@/framework/shopify/products";
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

export const getStaticProps = async ({ params }: GetServerSidePropsContext<{ slug: string }>) => {

  const config = getConfig();


  const { product } = await getProducts({ config, variables: { slug: params!.slug }, });

  return {
    props: {
      product,
    },
  };
};

const ProductSlug = ({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <Layout>{product?.name} {product?.slug}</Layout>;
};

export default ProductSlug;

ProductSlug.Layout = Layout;
