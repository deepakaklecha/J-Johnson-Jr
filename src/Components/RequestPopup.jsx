import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";
import johnson from "../images/J Johnson.jpg";

const RequestPopup = (props) => {
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
            <div className="req-pop-heading">
              <h4>{props.prop.heading}</h4>
              <p>{props.prop.para}</p>
            </div>
          </Modal.Header>
          <Modal.Body className="bk-gray">
            <div className="pop-price">
              <h4>{props.prop.price}</h4>
              <h5>Make the Request</h5>
            </div>
            <div className="pop-details">
              <h6>{props.prop.heading}</h6>
              <div className="pop-img">
                <img src={johnson} alt="" />
                <h5>J Johnson jr</h5> <br />
              </div>
              <div className="req-input">
                <input
                  type="text"
                  className="pop-name"
                  placeholder="Full Name"
                />
                <input type="email" className="pop-email" placeholder="Email" />
                <textarea
                  name=""
                  id=""
                  cols="58"
                  rows="4"
                  className="my-3"
                  placeholder="Add directions and any relevant details for J Johnson Jr,  including links"
                ></textarea>
              </div>
            </div>{" "}
            <br />
            <div className="payment pop-details">
              <h6>🔒 Credit Card Payment</h6>
              <div className="req-input">
                <input
                  type="text"
                  className="pop-name"
                  placeholder="💳 Card number"
                />
                <input
                  type="text"
                  className="pop-email"
                  placeholder="$ Optional tip for J Johnson Jr"
                />
              </div>
            </div>
            <div className="payment-btn">
              <button className="pay1">🛒Complete Purchase</button>
              <a href="https://link.co/en-in" target="_blank">
                <button className="pay2">Link | Pay faster 🔒</button>
              </a>
            </div>{" "}
            <br />
            <div className="delivery">
              <h6>📓 Delivery Policy</h6>
              <p>
                J Johnson Jr will have 7 days to deliver this request to you. A
                hold will be placed on your card and you will only be charged
                once delivery is completed. If they're unable to complete the
                request, the hold will be removed.
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    </div>
  );
};

export default RequestPopup;
