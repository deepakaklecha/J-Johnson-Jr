import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import SubscribePopup from "./SubscribePopup";
import "../App.css";
import johnson from "../images/J Johnson.jpg";

const ModalPopup = (props) => {
  const [showModal, setshowModal] = useState(false);
  const isShowModal = (status) => {
    handleClose();
    setshowModal(status);
  };
  const handleClose = () => {
    props.onPopupClose(false);
  };
  const [showModalPopup, setshowModalPopup] = useState(false);
  const isShowPopup = (status) => {
    setshowModalPopup(status);
  };
  return (
    <div>
      <Fragment>
        <Modal
          className="modal"
          show={props.showModalPopup}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="pop-header">
            <div className="pop-head">
              <div className="pop">
                <div className="pop-wrap">
                  <div className="pop-img">
                    <img src={johnson} alt="" />
                    <h5 style={{ color: "white" }}>J Johnson jr</h5>
                  </div>
                  <div className="pop-price">
                    <h5 style={{ backgroundColor: "gray", color: "white " }}>
                      $15/mo
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="pop-main text-center">
              <div className="main-head text-center">
                <h5>
                  Ready for exclusive content & products? Subscribe today.
                </h5>
              </div>
              <div className="pop-list">
                <ul>
                  <li>Access to all exclusive content</li>
                  <li>Never miss a creator update</li>
                  <li>Cancel your subscription anytime</li>
                </ul>
              </div>
              <div className="pop-input">
                <input type="text" placeholder=" Email" />
                {/* <span>not you?</span> */}
              </div>
            </div>
            <div className="pop-btn">
              <Fragment>
                <header align="center">
                  <Fragment>
                    <div className="nav-item" onClick={() => isShowPopup(true)}>
                      <button>Subscribe for $15</button>
                    </div>
                  </Fragment>
                </header>
                <SubscribePopup
                  showModalPopup={showModalPopup}
                  onPopupClose={isShowPopup}
                  prop={props}
                ></SubscribePopup>
              </Fragment>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    </div>
  );
};

export default ModalPopup;
