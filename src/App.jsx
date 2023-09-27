import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white mt-10 rounded-xl w-11/12 text-center py-2 px-8 text-4xl font-bold">
        RANDOM GIFS
      </h1>

      <div className="flex flex-col w-full items-center gap-y-4 mt-7">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
