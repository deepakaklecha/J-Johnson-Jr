import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const MusicBox = () => {
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
                <i class="fa-brands fa-spotify"></i>
              </div>
              <div className="expand-text">
                <h5>Wishing-King Han</h5>
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
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/1R78rI7RSA3siUu4bBLw09?utm_source=generator"
                width="100%"
                height="200"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MusicBox;
