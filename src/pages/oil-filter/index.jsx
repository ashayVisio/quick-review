import React, { useEffect, useState } from "react";
import "@google/model-viewer";
import { QRCodeSVG } from "qrcode.react";
import gsap from "gsap";
import "../../styles/ar.scss";
const OilFilter = () => {
  const [showQR, setShowQR] = useState(false);
  const modelUrl = window.location.href;

  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer");
    if (modelViewer) {
      modelViewer.addEventListener("load", () => {
        modelViewer.scale = "0.7 0.7 0.7";
        gsap.to(".ar", 0.3, {
          opacity: 1,
          ease: "power3.inOut",
        });
      });
    }
  }, []);

  return (
    <section className="ar">
      <model-viewer
        id="model-viewer"
        src="/oil_filter.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        tone-mapping="neutral"
        touch-action="pan-y"
        alt="A 3D model of an astronaut"
        shadow-intensity="0.38"
        exposure="0.8"
        shadow-softness="0.34"
        auto-rotate
        disable-pan
        skybox-height="2m"
        max-camera-orbit="auto 90deg auto"
        camera-orbit="100.9deg 80.15deg 0.3931m"
        ar-scale="fixed"
      ></model-viewer>
      <div className="back">
        <p>x</p>
      </div>
      <button className="arbutton" onClick={() => setShowQR(true)}>
        View in your space
      </button>
      {showQR && (
        <div className="modal">
          <div className="qr-popup">
            <QRCodeSVG value={modelUrl} size={200} />
            <p>Scan this QR code to view in your space</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OilFilter;
