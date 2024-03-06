import React from "react";
import "./Heading.css";

function HeadingGallery() {
  return (
    // <section className="mx-auto max-w-7xl px-4 py-12 text-slate-700">
    //   <div class="container-heading main-container">
    //     <div class="flex-container column-container items-start justify-content-between gap-4 md-flex-row md-items-end md-padding-container">
    //       <h2 class="max-width-text text-size-large text-color-yellow font-bold md-text-size-extra-large">
    //         OUR TEAM
    //       <div className="text-cyan-500">Meet the Makers</div>

    //       </h2>
    //     </div>
    //   </div>
    // </section>

    
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-700">
      <div className="mt-5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl text-yellow-300 font-bold md:text-5xl ">
        GALLERY
          <div className="text-cyan-500">Beautiful Memories..</div>
        </h2>
      </div>
    </section>
  );
}

export default HeadingGallery;
