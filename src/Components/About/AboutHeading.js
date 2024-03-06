import React from "react";
import "./AboutHeading.css";

function HeadingAbout() {
  return (


    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-700">
      <div className="mt-5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl text-yellow-300 font-bold md:text-5xl ">
          ABOUT US
          <div className="text-cyan-500">Discover Our Story</div>
        </h2>
      </div>
    </section>
  );
}

export default HeadingAbout;
