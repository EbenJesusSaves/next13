type FetchParams = {
  query: string;
};
//fetching data using fetch method
const fetchApi = async ({ query }: FetchParams) => {
  const url = "http://localhost:4000/graphql";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const data = await res.json();
  return { data };
};

export default fetchApi;
