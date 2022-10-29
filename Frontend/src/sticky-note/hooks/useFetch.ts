import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const useFetch = () => {
  const { data, error, mutate } = useSWR(
    "http://localhost:1337/api/notes",
    fetcher
  );

  return {
    loading: !data && !error,
    note: data,
    mutate,
  };
};

export default useFetch;

// import React, { useEffect, useState } from "react";
// const useFetch = () => {
//   const [note, setNote] = useState<[]>([]);
//   async function getData() {
//     const res = await fetch("http://localhost:1337/api/notes");
//     const data = await res.json();
//     setNote(data.data);
//     console.log(data.data);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return { loading: !note, note, newFetch: getData };
// };

// export default useFetch;
