import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 mt-[15px] gap-y-5 rounded-lg flex flex-col items-center border border-black">
      <h1 className="mt-4 font-bold text-2xl uppercase underline">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="random-gif" width="450" />}

      <input
        type="text"
        className="w-10/12 bg-white text-lg font-bold uppercase py-2 rounded-lg text-center"
        onChange={(event) => {
          setTag(event.target.value);
        }}
        value={tag}
      />

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

export default Tag;
