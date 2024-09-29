import React from "react";

import { HashLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      className="items-center justify-center w-screen h-screen bg-slate-950"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HashLoader color="#0ea5e9" size={75} />
    </div>
  );
};

export default Loader;
