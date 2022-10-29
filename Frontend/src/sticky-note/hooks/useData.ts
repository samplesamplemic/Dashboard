import React, { useEffect, useState } from "react";
const useData = () => {
  const [data, setData] = useState<{}>({});
  const handleData = (e: any) => {
    setData((prev) => ({ ...prev, note: e.target.value }));
  };

  return { handleData, data, setData };
};

export default useData;

//pass this hook to parent,
//then pass this handleData() from parent(ListNote) to child(Notes) as callback
//to controlling textarea value that it is situated in the child(Notes)
