import { ProductConnection } from "../schema";
import fetchApi from "../utils/fetch-api";
import { normalizeProducts } from "../utils/normalize";
import getAllProductsQuery from "../utils/queries/get-all-products";

//this function calls our api

type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProducts(product);
    }) ?? [];

  return products;
};

export default getAllProducts;
