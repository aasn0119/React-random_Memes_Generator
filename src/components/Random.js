import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 mt-[15px] gap-y-5 rounded-lg flex flex-col items-center border border-black">
      <h1 className="mt-4 font-bold text-2xl uppercase underline">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="random-gif" width="450" />}

      <button
        className="w-10/12 bg-slate-300 text-lg font-bold uppercase py-2 rounded-lg mb-5"
        onClick={() => {
          fetchData();
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
