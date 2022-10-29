//hook for POST, PUT, DELETE request
const useCrud = () => {
  const handleCrud = (
    method: string,
    id?: any,
    url?: string,
    data?: any,
    preview?: any
  ) => {
    if (id === "") {
      fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            title: data.todo,
            description: data.description,
            image: preview,
            checkbox: data.checkbox,
          },
        }),
      })
        .then((response) => {
          console.log(response);
        })
        .catch();
    } else {
      fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            title: data?.todo,
            description: data?.description,
            image: preview,
            checkbox: data?.checkbox,
          },
          id: id,
        }),
      });
    }
    //better??
    // async function delupdate(formData) {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Error response code: ${response.status}`);
    //   }
    // }
    // delupdate(formData);
  };
  return { handleCrud };
};

export default useCrud;
