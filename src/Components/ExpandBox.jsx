import React, { useState } from "react";

const ExpandBox = (props) => {
  const [show, setShow] = useState(true);
  const hide = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="expand-box mb-3">
        <div className="expand-btn">
          <button className="expand-header" onClick={hide}>
            <div className="expand-content">
              <div className="youtube-icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="expand-text">
                <h5>{props.heading}</h5>
              </div>
              <div className="arrow">
              {show ? (
                  <i className="fa-sharp fa-solid fa-angle-up"></i>
                ) : (
                  <i className="fa-sharp fa-solid fa-angle-down"></i>
                )}
              </div>
            </div>
          </button>
        </div>
        {show ? (
          <div className="expand-container">
            <div className="iframe">
              <iframe
                src={props.src}
                allow="autoplay; fullscreen; picture-in-picture"
                className="frame"
              ></iframe>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExpandBox;
