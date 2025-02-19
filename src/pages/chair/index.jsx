import React from "react";
import "@google/model-viewer";

import "./ar.scss";
const Chair = () => {
  return (
    <section className="ar">
      <model-viewer
        id="model-viewer"
        src="/Chair.glb"
        ar
        ar-modes="scene-viewer quick-look"
        camera-controls
        touch-action="pan-y"
        alt="A 3D model of an astronaut"
        shadow-intensity="2"
        auto-rotate
        disable-pan
        skybox-image="/spruit_sunrise_1k_HDR.jpg"
        skybox-height="2m"
        max-camera-orbit="auto 90deg auto"
      ></model-viewer>
    </section>
  );
};

export default Chair;
