import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Riga } from "./Riga";
import { RigaSegnalibri } from "./RigaSegnalibri";
import { UseFetch } from "./UseFetch";
import "./RigaSegnalibri.css";

const youtubeAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKy1dAqELo0zrOtPkf0eTMw&maxResults=25&q=gameplay&type=videos&key=AIzaSyDhPH23ufZOAMTtdBCH53bBg2y_PkxVzRs`;

export function YoutubeNews() {
  const { data, error } = UseFetch(youtubeAPI);
  const [modal, setModal] = useState(false);
  const [segnalibri, setSegnalibri] = useState([]);

  // check if mobile
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  function fetchSet() {
    fetch("//localhost:1337/api/segnalibros")
      .then((res) => res.json())
      .then((res) => setSegnalibri(res.data));
  }

  function getData(e, segnalibro, type) {
    e.stopPropagation();
    if (type === "DELETE") {
      fetch(`//localhost:1337/api/segnalibros/${segnalibro.id}`, {
        method: "DELETE",
      }).then(setTimeout(fetchSet, 500));
      return;
    }
    fetch("//localhost:1337/api/segnalibros", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: segnalibro }),
    }).then(setTimeout(fetchSet, 500));
  }

  useEffect(() => {
    fetchSet();
  }, []);

  function toggle(e) {
    e.stopPropagation();
    setModal(!modal);
  }

  if (error)
    return (
      <div>
        failed to load: {error.message} {error.status}
      </div>
    );
  if (!data) return <div>loading...</div>;

  return (
    <div className="max-w-[900px] max-h-[50rem] flex flex-col items-center mt-9 glass-component md:flex-[50%] relative">
      {segnalibri && (
        <div className="mb-6 flex justify-center flex-wrap gap-2 static">
          <button onClick={toggle} className="btn">
            SEGNALIBRI
          </button>
        </div>
      )}
      {modal && (
        <div
          className="h-fit z-10 m-4 absolute top-0 flex justify-start flex-col glass-component glass-opaco overflow-y-scroll"
          onClick={toggle}
        >
          <FaWindowClose
            className="absolute right-0 top-0 p-1 w-8 h-8 cursor-pointer hover:opacity-50"
            onClick={toggle}
          />
          {segnalibri &&
            segnalibri.map((segnalibro) => (
              <RigaSegnalibri
                getData={getData}
                isMobile={isMobile}
                saved={false}
                key={segnalibro.attributes.Titolo}
                el={segnalibro}
              />
            ))}
        </div>
      )}
      <div className="overflow-y-scroll">
        {data &&
          data.items.map((el, index) => {
            //if (segnalibri.map(e => e.attributes.Titolo).indexOf(el.snippet.title) !== -1) {
            if (
              segnalibri.some((e) => e.attributes.Titolo === el.snippet.title)
            ) {
              return <Riga saved={true} key={el.snippet.title} el={el} />;
            }
            return (
              <Riga
                getData={getData}
                isMobile={isMobile}
                fetchSet={fetchSet}
                saved={false}
                key={el.snippet.title}
                el={el}
              />
            );
          })}
      </div>
    </div>
  );
}
