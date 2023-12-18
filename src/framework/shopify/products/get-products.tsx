import { ApiConfig } from "@/framework/common/types/api";
import React from "react";
import getProductQuery from "../utils/queries/get-product";

const getProducts = async (options: {
  config: ApiConfig;
  variables: any;
}): Promise<any> => {
  const { config, variables } = options;

  //this functions fetches the data for a called product clicked
  const {
    data: { productByHandle },
  } = await config.fetch({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });

  console.log(productByHandle);
  return {
    product: {
      productByHandle,
    },
  };
};

export default getProducts;
