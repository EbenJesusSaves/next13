//fetching data using fetch method
const fetchApi = async () => {
  const url = "";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return { data };
};

const getAllProducts = async (): Promise<number[]> => {
  const products = [1, 2, 3];

  return products;
};

export default getAllProducts;
