import React, { useEffect } from "react";
import "@google/model-viewer";
import WebXRPolyfill from "webxr-polyfill";

import "./ar.scss";
const ChairXr = () => {
  useEffect(() => {
    new WebXRPolyfill(); // Enables WebXR on unsupported browsers
  }, []);

  return (
    <section className="ar">
      <model-viewer
        id="model-viewer"
        src="/Chair.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        touch-action="pan-y"
        alt="A 3D model of a chair"
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

export default ChairXr;
