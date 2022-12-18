import React, { useState } from "react";

const FormBox = () => {
  const [submit, setSubmit] = useState(false);
  const isSubmitted = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <div>
      {submit ? (
        <div className="form-head my-4">
          <h5 style={{ color: "white", textAlign: "center" }}>
            You are now in the mix! 🥳
          </h5>
        </div>
      ) : (
        <div className="form-box my-3">
          <div className="form-text">
            <h6>Join the squad</h6>
            <p>Know when I drop merch & speed vlogs</p>
          </div>
          <div className="input-content">
            <div className="mail">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="phone">
              <input type="text" placeholder="Phone #" required />
            </div>
          </div>
          <div className="radio-btn">
            <div>
              <input type="radio" id="fan" name="user" value="I'm a Fan" />
              <label htmlFor="fan">I'm a Fan</label>
            </div>
            <div>
              <input type="radio" id="brand" name="user" value="I'm a Brand" />
              <label htmlFor="brand">I'm a Brand</label>
            </div>
            <div>
              <input type="radio" name="user" value="I'm a Creator" />
              <label htmlFor="creator">I'm a Creator</label>
            </div>
          </div>
          <div className="submit-btn">
            <input type="submit" onClick={isSubmitted} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormBox;
