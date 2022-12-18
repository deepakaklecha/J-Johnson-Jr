import React from "react";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <span>Powered by</span>
        <a href="https://pillar.io/register" target="_blank">
          <span className="logo">
            <MoreVertSharpIcon />
            PilLar
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
