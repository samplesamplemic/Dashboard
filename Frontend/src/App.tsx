import React from "react";
import Sidebar from "./Sidebar";
import Productivity from "./Productivity";

function App() {
  return (
    <>
      <div className="flex bg gap-4 big:flex-col ">
        {/* big:w-[100vw] h-[100vh] */}
        <Sidebar />
        {/* <Productivity /> */}
      </div>
    </>
  );
}

export default App;
