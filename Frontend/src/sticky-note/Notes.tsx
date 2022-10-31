import React, { ReactNode, useEffect, useState } from "react";
import Draggable from "react-draggable";
import usePost from "./hooks/usePost";
import useFetch from "./hooks/useFetch";
import Icon from "@mdi/react";
import { mdiWindowMinimize } from "@mdi/js";
import { mdiContentSave } from "@mdi/js";
import { mdiWindowClose } from "@mdi/js";
import { mdiDragVariant } from "@mdi/js";
import "./style/note.css";

const Notes = (props: any) => {
  const { mutate } = useFetch();
  const { handleCrud } = usePost();
  const [show, setShow] = useState<boolean>(false);
  //delete note
  const handleDelete = () => {
    handleCrud(
      `http://localhost:1337/api/notes/${props.id}`,
      "DELETE",
      props.id,
      ""
    );
    setTimeout(mutate, 500);
  };

  //show or hide note
  const handleShow = () => {
    setShow(false);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className=" note opacity-1 transition-[opacity] duration-[0.33s] btn !p-[0.1rem] my-2 mx-1 flex flex-col "
      >
        {props.description == null ? "add" : props.description}
      </button>
      {show ? (
        <Draggable key={props.id} cancel={".close, .del, .save, .desc"}>
          <div
            // onClick={(e) => {
            //   if (e.target instanceof HTMLElement) {
            //     console.log(e.target);
            //   }
            // }}
            className=" pls ml-0 absolute mt-[-2.9rem] left-48 min-w-[10rem] min-h-[11rem] max-w-[11rem] max-h-[15rem] flex flex-col rounded-md overflow-hidden"
          >
            <div className=" !w-full !p-1 justify-end flex gap-2 bg rounded-b-none !min-h-fit">
              <button
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Drag"
                className=" mr-[1rem] btn-notes btn !rounded-full active:cursor-grabbing !p-[0.11rem] border-none"
              >
                <Icon
                  path={mdiDragVariant}
                  size={0.7}
                  vertical
                  horizontal
                  rotate={180}
                />
              </button>
              <button
                className=" save mr-[.1rem] btn-notes btn !rounded-full  !p-[0.11rem] border-none"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Save"
                onClick={() =>
                  //pass data from child to parent with callback
                  props.id && props.handleUpdate()
                }
              >
                <Icon
                  path={mdiContentSave}
                  size={0.7}
                  vertical
                  horizontal
                  rotate={180}
                />
              </button>
              <button
                //onClick={(e) => handleShow(e)}
                onClick={() => handleShow()}
                className="close btn-notes btn !rounded-full !p-[0.11rem] border-none "
              >
                <Icon path={mdiWindowMinimize} size={0.7} horizontal vertical />
              </button>
              <button
                onClick={() => handleDelete()}
                className="del btn-notes btn !rounded-full !p-[0.11rem] border-none"
              >
                <Icon
                  path={mdiWindowClose}
                  size={0.7}
                  vertical
                  horizontal
                  rotate={180}
                />
              </button>
            </div>
            <textarea
              placeholder="note..."
              className=" desc glass-component !p-2 flex-grow resize-none !w-full rounded-t-none"
              onChange={(e) => props.handleData(e)}
              defaultValue={props.description}
            ></textarea>
          </div>
        </Draggable>
      ) : null}
    </>
  );
};

export default Notes;
