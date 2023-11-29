import { Layout } from "@/components/common";
import { GetStaticPaths } from "next";
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

export const getStaticProps = () => {};

const ProductSlug = () => {
  return (
    <Layout>
      <div>[slug] apnkye krakra asoro ne fum</div>
    </Layout>
  );
};

export default ProductSlug;

ProductSlug.Layout = Layout;
