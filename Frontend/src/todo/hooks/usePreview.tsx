import React, { useState } from "react";

//preview and load image
const usePreview = () => {
  const [preview, setPreview] = useState<any>("");
  const handlePreview = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  return { preview, setPreview, handlePreview };
};

export default usePreview;
