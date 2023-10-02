import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@/framework/shopify/products/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";
import { Layout } from "@/components/common";
const inter = Inter({ subsets: ["latin"] });

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>{JSON.stringify(products)}</>;
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
