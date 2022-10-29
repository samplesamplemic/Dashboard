import React from "react";
import Sidebar from "./Sidebar";
import Productivity from "./Productivity";

function App() {
  return (
    <>
      <div className="flex bg gap-4 big:flex-col big:w-full ">
        <Sidebar />
        {/* <Productivity /> */}
      </div>
    </>
  );
}

export default App;
