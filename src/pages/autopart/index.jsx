import React, { useEffect, useState } from "react";
import "@google/model-viewer";
import { QRCodeSVG } from "qrcode.react";
import gsap from "gsap";
import "../../styles/ar.scss";
const AutoPart = () => {
  const [showQR, setShowQR] = useState(false);
  const modelUrl = window.location.href;

  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer");
    if (modelViewer) {
      modelViewer.addEventListener("load", () => {
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
        src="/Camshaft.glb"
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
        ar-scale="fixed"
        camera-orbit="-1725deg 0.0000573deg 1.117m"
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

export default AutoPart;
