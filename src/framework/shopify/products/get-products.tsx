import { ApiConfig } from "@/framework/common/types/api";
import React from "react";

export const getProducts = async (config: ApiConfig): Promise<any> => {
  console.log(config);

  return {
    product: {
      name: config.apiUrl,
    },
  };
};
