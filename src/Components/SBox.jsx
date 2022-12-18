import React from "react";

const SBox = (props) => {
  return (
    <div>
      <div className="s-box my-3">
        <a href={props.link} target="_blank">
          <div className="s-main">
            <div className="youtube">{props.icon1}</div>
            <div className="s-box-content">
              <h6>{props.heading}</h6>
              <p>{props.para}</p>
            </div>
            <div className="youtube">{props.icon2}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SBox;
