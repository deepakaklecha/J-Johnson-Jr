import React, { Fragment, useState } from "react";
import "../App.css";
import ModalPopup from "./ModalPopup";

const MBox = (props) => {
  const { img, heading, para, link, btn = "Subscribe to Unlock" } = props;
  const [showModalPopup, setshowModalPopup] = useState(false);
  const isShowPopup = (status) => {
    setshowModalPopup(status);
  };
  return (
    <div>
      <div className="medium-box my-3">
        <div className="m-box-img">
          <img src={img} alt="weekly image" />
        </div>
        <div className="m-box-content">
          <h5>{heading}</h5>
          <p>{para}</p>

          <Fragment>
            <header align="center">
              <Fragment>
                <div className="nav-item" onClick={() => isShowPopup(true)}>
                  <a href={link} target="_blank">
                    <button className="m-box-btn">
                      {btn == "Subscribe to Unlock" ? (
                        <i className="heart fa-solid fa-heart"></i>
                      ) : (
                        ""
                      )}
                      <span className="m-box-btn-text">{btn}</span>
                    </button>
                  </a>
                </div>
              </Fragment>
            </header>
            <ModalPopup
              showModalPopup={showModalPopup}
              onPopupClose={isShowPopup}
            ></ModalPopup>
          </Fragment>
          {/* <a href={link} target="_blank">
            <button className="m-box-btn">
              {btn == "Subscribe to Unlock" ? (
                <i className="heart fa-solid fa-heart"></i>
              ) : (
                ""
              )}
              <span className="m-box-btn-text">{btn}</span>
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default MBox;
