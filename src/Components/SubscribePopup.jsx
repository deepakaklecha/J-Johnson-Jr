import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import Login from "./Login";
import "../App.css";
import johnson from "../images/J Johnson.jpg";

const SubscribePopup = (props) => {
  const [showModalPopup, setshowModalPopup] = useState(false);
  const isShowPopup = (status) => {
    setshowModalPopup(status);
  };
  const [showModal, setshowModal] = useState(false);
  const isShowModal = (status) => {
    handleClose();
    setshowModal(status);
  };
  const handleClose = () => {
    props.onPopupClose(false);
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
          <Modal.Header closeButton className="bk-gray">
            <div className="pop-head">
              <div className="pop">
                <div className="pop-wrap">
                  <div className="pop-img">
                    <img src={johnson} alt="" />
                    <h5>J Johnson jr</h5>
                  </div>
                  <div className="pop-price">
                    <h6 style={{ backgroundColor: "gray", color: "white " }}>
                      $15/mo
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className="bk-gray">
            <div className="payment pop-details">
              <h6>🔒 Secure Payment</h6>
              <div className="req-input">
                <input
                  type="text"
                  className="pop-name"
                  placeholder="💳 Card number      MM/YY/CVC"
                />
                <p style={{ fontSize: ".7rem" }}>
                  Secure payment powered by <b>stripe</b>
                </p>
              </div>
            </div>
            <div className="payment-btn">
              <button className="pay1 mt-5">Subscribe for $15</button>
              <a href="https://link.co/en-in" target="_blank">
                <button className="pay2">Link | Pay faster 🔒</button>
              </a>
            </div>{" "}
            <br />
            <div className="login text-center">
              <Fragment>
                <header align="center">
                  <Fragment>
                    <div className="nav-item" onClick={() => isShowPopup(true)}>
                      <button>Login</button>
                    </div>
                  </Fragment>
                </header>
                <Login
                  showModalPopup={showModalPopup}
                  onPopupClose={isShowPopup}
                  prop={props}
                ></Login>
              </Fragment>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    </div>
  );
};

export default SubscribePopup;
