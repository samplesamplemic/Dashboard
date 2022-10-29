import React, { useEffect, useState } from "react";
import useData from "./hooks/useData";
import useFetch from "./hooks/useFetch";
import usePost from "./hooks/usePost";
import $ from "jquery";
//create note
const BtnNote = () => {
  const { handleCrud } = usePost();
  const { mutate } = useFetch();
  const { data, handleData } = useData();

  const handleCreate = () => {
    handleCrud("http://localhost:1337/api/notes", "POST", "", data);

    //update note list
    setTimeout(mutate, 500);

    //when create note set the class to show or hide content and notes
    setTimeout(function () {
      if ($(".note-show").length) {
        $(".note").removeClass("note-show");
      } else {
        // $(".note").last().addClass("note-show");
      }
    }, 600);
  };

  return (
    <>
      <div>
        <button className="btn !p-2" onClick={() => handleCreate()}>
          Add note
        </button>
      </div>
    </>
  );
};

export default BtnNote;
