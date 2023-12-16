import { ApiConfig } from "@/framework/common/types/api";
import { Product } from "@/framework/common/types/products";
import getAllProductsPathsQuery from "../utils/queries/get-all-products-paths";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: Pick<Product, "slug">[];
};

export const getAllProductsPaths = async (
  config: ApiConfig
): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    url: config.apiUrl,
    query: getAllProductsPathsQuery,
  });
  console.log(data);

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });
  return {
    products,
  };
};

// will continue and finish soon
