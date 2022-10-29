import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
const useFetch = () => {
  const { data, error, mutate } = useSWR(
    "http://localhost:1337/api/todos",
    fetcher
  );
  console.log(data);

  return { loading: !data && !error, data: data?.data, mutate };
};

export default useFetch;
