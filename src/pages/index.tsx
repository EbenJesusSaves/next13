import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@/framework/shopify/products/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";
import { Footer, Layout, Navbar } from "@/components/common";
import { ProductCard } from "@/components/products";
import { Grid, Hero, Marquee, Sidebar } from "@/components/ui";
import CartSidebar from "@/components/cart/CartSidebar";
const inter = Inter({ subsets: ["latin"] });

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>

      <Grid>
        {products.slice(0, 3).map((products) => (
          <ProductCard product={products} key={products.id} />
        ))}
      </Grid>
      <Hero headline="Come here" description="Just testing" />
      <Marquee>
        {products.slice(0, 3).map((products) => (
          <ProductCard variant="Slim" product={products} key={products.id} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((products) => (
          <ProductCard product={products} key={products.id} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((products) => (
          <ProductCard variant="Slim" product={products} key={products.id} />
        ))}
      </Marquee>
      <Footer />
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
