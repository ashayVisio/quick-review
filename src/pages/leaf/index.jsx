import React from "react";
import "@google/model-viewer";

import "./ar.scss";
const Leaf = () => {
  return (
    <section className="ar">
      <model-viewer
        src="/boom_2_.glb"
        ar
        ar-placement="wall"
        camera-controls
        touch-action="pan-y"
        alt="A 3D model of some wall art"
      ></model-viewer>
    </section>
  );
};

export default Leaf;
