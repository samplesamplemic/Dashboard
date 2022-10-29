import React, { useContext, useEffect, useState } from "react";
import useData from "./hooks/useData";
import useFetch from "./hooks/useFetch";
import usePost from "./hooks/usePost";
import Notes from "./Notes";
import "./style/note.css";
import $ from "jquery";

const ListNote = () => {
  const { note, mutate } = useFetch();
  const { data, handleData } = useData();
  const { handleCrud } = usePost();
  const [id, setId] = useState<number>();

  //update note
  const handleUpdate = (id: any, data: any) => {
    handleCrud(`http://localhost:1337/api/notes/${id}`, "PUT", id, data);
    setId(id);
    setTimeout(mutate, 500);
  };

  //show or hide note-list container & continue showing note opened
  const handleShow = () => {
    $(".note").toggleClass("note-show");
    $(".pls").css("display", "flex");
    //console.log("work");
  };

  return (
    <>
      <div className="flex mb-4 ">
        {/* <div className="">  */}
        <button
          onClick={() => handleShow()}
          className=" btn  "
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Show/Hide Notes"
        >
          Notes
        </button>
        <div className=" find w-fit relative mx-[4rem] ">
          {note?.data.map((el: any) => {
            return (
              <div key={el.id}>
                <Notes
                  description={el.attributes.note}
                  id={el.id}
                  handleUpdate={() => handleUpdate(el.id, data)}
                  //pass data from child to parent with callback
                  handleData={(e: any) => handleData(e)}
                />
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ListNote;
