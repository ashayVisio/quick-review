import React, { useEffect, useState } from "react";
import "@google/model-viewer";
import { QRCodeSVG } from "qrcode.react";
import "./ar.scss";
const Chair = () => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const modelUrl = window.location.href;

  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer");
    if (modelViewer) {
      setIsARSupported(modelViewer.canActivateAR);
    }
  }, []);

  // Reliable iOS check
  const isIOS = () => {
    return (
      navigator.platform.includes("iPhone") ||
      navigator.platform.includes("iPad") ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  };

  // Generate direct AR link based on device
  const getARLink = () => {
    if (isIOS()) {
      // iOS: Directly open in Quick Look
      return modelUrl;
    } else {
      return modelUrl;
      // Android: Directly open in Scene Viewer via intent
      // return `https://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(
      //   modelUrl
      // )}&mode=ar_only`;
    }
  };

  return (
    <section className="ar">
      <model-viewer
        id="model-viewer"
        src="/Chair.glb"
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
      >
        {isARSupported ? (
          ""
        ) : (
          <button className="ar-button" onClick={() => setShowQR(true)}>
            View in AR
          </button>
        )}
      </model-viewer>
      {showQR && (
        <div className="qr-popup">
          <p>Scan this QR code to view in AR</p>
          <QRCodeSVG value={getARLink()} size={200} />
          {/* <button onClick={() => setShowQR(false)}>Close</button> */}
        </div>
      )}
    </section>
  );
};

export default Chair;
