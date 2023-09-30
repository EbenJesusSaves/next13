import { Product } from "@/framework/common/types/products";
import { ProductConnection } from "../schema";
import { normalizeProducts } from "../utils/normalize";
import getAllProductsQuery from "../utils/queries/get-all-products";
import { ApiConfig } from "@/framework/common/types/api";

//this function calls our api

type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProducts(product);
    }) ?? [];

  return products;
};

export default getAllProducts;
