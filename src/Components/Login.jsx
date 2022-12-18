import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";
import johnson from "../images/J Johnson.jpg";

const Login = (props) => {
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
              <h3 className="m-3">Login</h3>
              <div className="req-input">
                <input
                  type="text"
                  className="pop-name my-3"
                  placeholder=" Email"
                />
                <input
                  type="text"
                  className="pop-name"
                  placeholder=" Password"
                />
              </div>
            </div>
            <div className="payment-btn">
              <button className="pay1 mt-5">Continue</button>
              <button className="mt5">Forgot Password</button>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    </div>
  );
};

export default Login;
