import { Layout } from "@/components/common";
import { GetServerSidePropsContext, GetStaticPaths } from "next";
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
}: GetServerSidePropsContext<{ slug: string }>) => {};

const ProductSlug = () => {
  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export default ProductSlug;

ProductSlug.Layout = Layout;
