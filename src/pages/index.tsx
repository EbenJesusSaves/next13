import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@/framework/shopify/products/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";
import { Layout } from "@/components/common";
import { ProductCard } from "@/components/products";
import { Grid, Hello, Marquee } from "@/components/ui";
const inter = Inter({ subsets: ["latin"] });

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((products) => (
          <ProductCard product={products} key={products.id} />
        ))}
      </Grid>{" "}
      <Hello headline="Come here" description="Just testing" />
      <Marquee>
        {products.slice(0, 3).map((products) => (
          <ProductCard variant="Slim" product={products} key={products.id} />
        ))}
      </Marquee>
    </>
  );
}

export async function getStaticProps() {
  const config = getConfig();

  const products = await getAllProducts(config);

  return {
    props: { products },
    revalidate: 4 * 60,
  };
}

Home.Layout = Layout;
