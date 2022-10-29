//POST, DELETE, PUT method to note
const usePost = () => {
  const handleCrud = (url: string, method: string, id?: any, data?: any) => {
    if (id !== "") {
      fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      });
    } else {
      //const newData =
      fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data, id: id }),
      });
    }
  };
  return { handleCrud };
};

export default usePost;
