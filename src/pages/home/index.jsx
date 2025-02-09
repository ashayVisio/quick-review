import React, { useEffect, useRef, useState } from "react";
import {
  Circle,
  CommentsIcon,
  Draw,
  FullScreen,
  GradientProgress,
  Line,
  Logo,
  MinScreen,
  ReviewCursor,
  Settings,
  Square,
  ZoomIn,
  ZoomOut,
} from "../../svgIcons/icons";

import "./home.scss";

const Home = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [showMarkup, setShowMarkup] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInsideImage, setIsInsideImage] = useState(false);
  const [annotations, setAnnotations] = useState([]);
  const [hover, setHover] = useState(null);

  const settingsRef = useRef(null);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setIsInsideImage(true);
  const handleMouseLeave = () => setIsInsideImage(false);

  const handleImageClick = (e) => {
    setShowMarkup(true);
    const container = e.currentTarget.getBoundingClientRect();

    // Calculate relative X and Y positions
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;

    // Add new annotation
    if (!showMarkup) {
      setAnnotations([
        ...annotations,
        { x, y, number: annotations.length + 1 },
      ]);
    }
  };

  // Function to handle clicks outside of settings modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };

    if (showSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSettings]);

  return (
    <section className="project">
      <div className="projectContainer">
        <div
          className="projectContent"
          style={{ maxHeight: fullScreen ? "100%" : "calc(100vh - 102px)" }}
        >
          <div
            className="projectImage"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: showMarkup ? "default" : "none" }}
          >
            <img
              src="/images/review/reviewlion.png"
              alt="review"
              onClick={handleImageClick}
              //   onClick={() => setShowMarkup(true)}
            />
            {isInsideImage && !showMarkup ? (
              <div
                className="customCursor"
                style={{ top: cursorPos.y, left: cursorPos.x }}
              >
                <ReviewCursor />
              </div>
            ) : (
              ""
            )}
            {showMarkup ? (
              <div className="projectMarkup">
                <div className="projectMarkupTools">
                  <div className="projectMarkupShapes">
                    <p>
                      <Draw />
                    </p>
                    <p className="selected">
                      <Line />
                    </p>
                    <p>
                      <Circle />
                    </p>
                    <p>
                      <Square />
                    </p>
                  </div>
                  <div className="projectMarkupColors">
                    <span className="yellow selected"></span>
                    <span className="blue"></span>
                    <span className="orange"></span>
                  </div>
                </div>
                <div className="projectMarkupCopy">
                  <h3>Leave a comment</h3>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    placeholder="Write your comment"
                  ></textarea>
                  <div className="projectMarkupSubmit">
                    <button onClick={() => setShowMarkup(false)}>
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {annotations.map((annotation, index) => (
              <h4
                key={index}
                className="annotation"
                style={{
                  top: `calc(${annotation.y}% - 13px)`,
                  left: `calc(${annotation.x}% - 13px)`,
                }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                {annotation.number}
                <GradientProgress hover={hover} index={index} />
              </h4>
            ))}
          </div>
          {showComments && !fullScreen ? (
            <div className="projectCommentContainer">
              <div className="projectComments">
                <div className="projectCommentsCard">
                  <label>01</label>
                  <h2>
                    Tom <span>2d</span>
                  </h2>
                  <p>
                    The features in ICE magazine were brought to life by an
                    all-women crew; Medrano behind the lens, with Nikki Nelms on
                    hair, Raisa Flowers on makeup, and Marika-Ella Ames on
                    styling. “In this industry.
                  </p>
                </div>
                <div className="projectCommentsCard">
                  <label>01</label>
                  <h2>
                    Tom <span>2d</span>
                  </h2>
                  <p>
                    The features in ICE magazine were brought to life by an
                    all-women crew; Medrano behind the lens, with Nikki Nelms on
                    hair, Raisa Flowers on makeup, and Marika-Ella Ames on
                    styling. “In this industry.
                  </p>
                </div>
                <div className="projectCommentsCard">
                  <label>01</label>
                  <h2>
                    Tom <span>2d</span>
                  </h2>
                  <p>
                    The features in ICE magazine were brought to life by an
                    all-women crew; Medrano behind the lens, with Nikki Nelms on
                    hair, Raisa Flowers on makeup, and Marika-Ella Ames on
                    styling. “In this industry.
                  </p>
                </div>
                <div className="projectCommentsCard selected">
                  <label>01</label>
                  <h2>
                    Tom <span>2d</span>
                  </h2>
                  <p>
                    The features in ICE magazine were brought to life by an
                    all-women crew; Medrano behind the lens, with Nikki Nelms on
                    hair, Raisa Flowers on makeup, and Marika-Ella Ames on
                    styling. “In this industry.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {!fullScreen ? (
          <div className="projectTool">
            <div className="projectToolLogo">
              <Logo />
            </div>
            <div className="projectToolContent">
              <div className="projectToolSetting">
                <span onClick={() => setShowSettings(!showSettings)}>
                  <Settings />
                </span>
                {showSettings ? (
                  <ul className="projectSettings" ref={settingsRef}>
                    <li>
                      Fit <label>F</label>
                    </li>
                    <li>
                      Fill <label>F</label>
                    </li>
                    <li>
                      Zoom In{" "}
                      <label>
                        <ZoomIn />
                      </label>
                    </li>
                    <li>
                      Zoom Out{" "}
                      <label>
                        <ZoomOut />
                      </label>
                    </li>
                    <li>
                      Zoom to 100% <label>0</label>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                <div className="projectToolZoom">
                  <span>
                    <ZoomOut />
                  </span>
                  <span>50%</span>
                  <span>
                    <ZoomIn />
                  </span>
                </div>
              </div>
              <p onClick={() => setFullScreen(true)}>
                <FullScreen />
              </p>
            </div>
            <div className="projectToolBtns">
              <button>Make Decision</button>
              <p onClick={() => setShowComments(!showComments)}>
                <CommentsIcon />
                <span>3</span>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {fullScreen ? (
          <div className="min" onClick={() => setFullScreen(false)}>
            <MinScreen />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Home;
