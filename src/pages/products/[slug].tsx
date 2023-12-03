import { Layout } from "@/components/common";
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from "next";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "cool-hat" } },
      { params: { slug: "lightweight-jacket" } },
      { params: { slug: "t-shirt" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
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
