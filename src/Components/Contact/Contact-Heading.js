import React from "react";
import "./Contact-Heading.css";

function Heading() {
  return (
  //   <section className="mx-auto max-w-7xl px-4 py-12 text-slate-700">
  //   <div class="container-heading main-container">
  //     <div class="flex-container column-container items-start justify-content-between gap-4 md-flex-row md-items-end md-padding-container">
  //       <h2 class="max-width-text text-size-large text-color-yellow font-bold md-text-size-extra-large">
  //       ABOUT US
  //       <div className="text-cyan-500">Discover Our Story</div>

  //       </h2>

  //     </div>
  //   </div>
  // </section>

    <section className="mx-auto max-w-7xl px-4 py-2 text-slate-700">
      <div className="mt-5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl text-yellow-300 font-bold md:text-5xl ">
        CONTACT US
          <div className="text-cyan-500">Reach Out Today</div>
        </h2>
      </div>
    </section>
  );
}

export default Heading;
