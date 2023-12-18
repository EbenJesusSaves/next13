import { ApiConfig } from "@/framework/common/types/api";
import React from "react";

const getProducts = async (config: ApiConfig): Promise<any> => {
  console.log(config);

  return {
    product: {
      name: config.apiUrl,
      slug: "Just testng ",
    },
  };
};

export default getProducts;
