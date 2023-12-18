import { ApiConfig } from "@/framework/common/types/api";
import { Product } from "@/framework/common/types/products";
import getAllProductsPathsQuery from "../utils/queries/get-all-products-paths";
import { ProductConnection } from "../schema";

type ReturnType = {
  // the pick keyword in typescript makes it possible to use a specific type from an interface for an object
  products: Pick<Product, "slug">[];
};

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    url: config.apiUrl,
    query: getAllProductsPathsQuery,
  });

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });
  return {
    products,
  };
};

export default getAllProductsPaths;
// will continue and finish soon
