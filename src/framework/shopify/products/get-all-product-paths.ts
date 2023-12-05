import { ApiConfig } from "@/framework/common/types/api";
import { Product } from "@/framework/common/types/products";

type ReturnType = {
  products: Pick<Product, "slug">[];
};

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  return {
    products: [
      { slug: "cool-hat" },
      { slug: "lightweight-jacket" },
      { slug: "t-shirt" },
    ],
  };
};
