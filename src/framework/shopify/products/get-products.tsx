import { ApiConfig, Variables } from "@/framework/common/types/api";
import React from "react";
import getProductQuery from "../utils/queries/get-product";
import { Product as ShopifyProduct } from "../schema";
import { normalizeProducts } from "../utils/normalize";
import { Product } from "@/framework/common/types/products";


type FetchType = {
  productByHandle: ShopifyProduct
}
type ReturnType = {
  product: Product | null
}

const getProducts = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<ReturnType> => {
  const { config, variables } = options;

  //this functions fetches the data for a called product clicked
  const {
    data: { productByHandle },
  } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });


  return {
    product:
      productByHandle ? normalizeProducts(productByHandle) : null

  };
};

export default getProducts;
