import React, { Fragment, useState } from "react";
import RequestPopup from "./RequestPopup";

const RequestBox = (props) => {
  const [showModalPopup, setshowModalPopup] = useState(false);
  const isShowPopup = (status) => {
    setshowModalPopup(status);
  };
  return (
    <div>
      <div className="request-box my-3">
        <div className="comment">
          <i
            style={{ fontSize: "2rem" }}
            className="fa-sharp fa-solid fa-comments"
          ></i>
        </div>
        <div className="request-box-content">
          <h6>{props.heading}</h6>
          <p>{props.para}</p>
          <p style={{ marginTop: "-7px" }}>{props.price}</p>
        </div>
        <div className="request-btn">
          <Fragment>
            <header align="center">
              <Fragment>
                <div className="nav-item" onClick={() => isShowPopup(true)}>
                  <button>Request Me</button>
                </div>
              </Fragment>
            </header>
            <RequestPopup
              showModalPopup={showModalPopup}
              onPopupClose={isShowPopup}
              prop={props}
            ></RequestPopup>
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default RequestBox;
