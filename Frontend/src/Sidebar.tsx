import Icon from "@mdi/react";
import { mdiBriefcase } from "@mdi/js";
import { mdiControllerClassic } from "@mdi/js";
import { mdiCalendarEdit } from "@mdi/js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Productivity from "./Productivity";
import App from "./App";
import { NewsArea } from "./news_area";

const Sidebar = () => {
  return (
    <>
      <Router>
        <div className="glass-component !p-1 !rounded-none w-fit flex flex-col big:w-full big:flex-row big:justify-between big:mb-4">
          <div className="big:w-10">
            <svg
              width="68"
              height="67"
              viewBox="0 0 68 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="m-4 big:m-1 big:h-10 big:w-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] "
            >
              <g filter="url(#filter0_i_109_58)">
                <ellipse
                  cx="34"
                  cy="33.5"
                  rx="34"
                  ry="33.5"
                  fill="white"
                  fillOpacity="0.2"
                />
                <ellipse
                  cx="34"
                  cy="33.5"
                  rx="34"
                  ry="33.5"
                  fill="white"
                  fillOpacity="0.2"
                />
              </g>
              <path
                d="M67.9 33.5C67.9 51.9449 52.7239 66.9 34 66.9C15.2761 66.9 0.1 51.9449 0.1 33.5C0.1 15.0551 15.2761 0.1 34 0.1C52.7239 0.1 67.9 15.0551 67.9 33.5Z"
                stroke="#E4E3DF"
                strokeOpacity="0.3"
                strokeWidth="0.2"
              />
              <g filter="url(#filter1_d_109_58)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.8832 48.493C18.2447 50.2827 18.3435 53.0022 18.1409 57.9459C18.1177 58.5119 18.9066 58.6808 19.1129 58.1532L24.6667 43.9463L7.63978 44.4866C7.05869 44.505 6.98493 45.2784 7.55452 45.395C12.2826 46.3625 15.5899 46.7931 16.8832 48.493Z"
                  fill="#5D5D5D"
                />
                <path
                  d="M39.7545 5.4265C39.8537 4.82585 38.9937 4.59498 38.7854 5.16704L24.6667 43.9463L63.0018 23.6372C63.5411 23.3514 63.1842 22.5325 62.6026 22.7173C37.1211 30.8141 35.723 29.8252 39.7545 5.4265Z"
                  fill="#5D5D5D"
                />
                <path
                  d="M24.6667 43.9463L19.1129 58.1532C18.9066 58.6808 18.1177 58.5119 18.1409 57.9459C18.3435 53.0022 18.2447 50.2827 16.8832 48.493C15.5899 46.7931 12.2826 46.3625 7.55452 45.395C6.98493 45.2784 7.05869 44.505 7.63978 44.4866L24.6667 43.9463ZM24.6667 43.9463L38.7854 5.16704C38.9937 4.59498 39.8537 4.82585 39.7545 5.4265C35.723 29.8252 37.1211 30.8141 62.6026 22.7173C63.1842 22.5325 63.5411 23.3514 63.0018 23.6372L24.6667 43.9463Z"
                  stroke="#5D5D5D"
                  strokeWidth="0.1"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_109_58"
                  x="0"
                  y="0"
                  width="68"
                  height="71"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_109_58"
                  />
                </filter>
                <filter
                  id="filter1_d_109_58"
                  x="3.11365"
                  y="4.78833"
                  width="64.2037"
                  height="61.7334"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_109_58"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_109_58"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-24 items-center h-full big:flex-row big:gap-8 big:mr-1">
            <Link
              to="/productivity"
              className=" btn-notes btn !rounded-full active:cursor-grabbing !p-[0.5rem] border-none"
            >
              <Icon
                className="w-8"
                path={mdiBriefcase}
                size={2}
                vertical
                horizontal
                rotate={180}
              />
            </Link>
            <Link
              to="/news"
              className=" btn-notes btn !rounded-full active:cursor-grabbing !p-[0.5rem] border-none"
            >
              <Icon
                path={mdiControllerClassic}
                size={2}
                vertical
                horizontal
                rotate={180}
              />
            </Link>
            <button className=" btn-notes btn !rounded-full active:cursor-grabbing !p-[0.5rem] border-none">
              <Icon
                path={mdiCalendarEdit}
                size={2}
                vertical
                horizontal
                rotate={180}
              />
            </button>
          </div>
        </div>
        <Routes>
          <Route path="/productivity" element={<Productivity />}></Route>
          <Route path="/news" element={<NewsArea />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Sidebar;
