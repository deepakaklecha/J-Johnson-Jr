import React, { Fragment, useState } from "react";
import ModalPopup from "./ModalPopup";
import { ReactDOM } from "react";
import "../App.css";
import IosShareIcon from "@mui/icons-material/IosShare";
import Johnson from "../images/J Johnson.jpg";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import { RWebShare } from "react-web-share";
const Header = () => {
  const [showModalPopup, setshowModalPopup] = useState(false);
  const isShowPopup = (status) => {
    setshowModalPopup(status);
  };
  return (
    <>
      <div className="header">
        <div className="share">
          <RWebShare
            data={{
              text: "Web Share - Pillar",
              url: "http://localhost:3000",
              title: "Pillar",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <button className="share-btn">
              <IosShareIcon />
            </button>
          </RWebShare>
        </div>
        <div>
          <Fragment>
            <header align="center">
              <Fragment>
                <div className="nav-item" onClick={() => isShowPopup(true)}>
                  <button className="button">
                    <i className="heart fa-solid fa-heart"></i>
                    <span className="btn-text">Subscribe</span>
                  </button>
                </div>
              </Fragment>
            </header>
            <ModalPopup
              showModalPopup={showModalPopup}
              onPopupClose={isShowPopup}
            ></ModalPopup>
          </Fragment>
        </div>
      </div>
      <div className="ceo">
        <div className="ceo-image">
          <img src={Johnson} alt="" />
        </div>
        <div className="details">
          <h5 style={{ textAlign: "center" }}>
            J Johnson Jr <VerifiedSharpIcon className="verified" />
          </h5>
          <p>Created by different elements ⚛️ Athlete & CEO</p>
          <p style={{ textAlign: "center" }}>
            <i className="fa-solid fa-location-dot"></i> Raleigh, NC
          </p>
        </div>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="mailto:jhansj26@gmail.com" target="_blank">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jstayclutch/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/jstayclutch" target="_blank">
              <i className="fa-brands fa-twitch"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jstayclutch" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC1AaIjDyA6OQfD_FhDyMjVg"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/uFzKpPBhqV" target="_blank">
              <i className="fa-brands fa-discord"></i>
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/@jjohnsonjr" target="_blank">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jjohnson-jr/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/73vgx1Oe4LXUj0pMDbfmCF"
              target="_blank"
            >
              <i className="fa-brands fa-spotify"></i>
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/us/app/bepositive-relax-meditate/id1616225876?uo=2"
              target="_blank"
            >
              <i className="fa-brands fa-app-store-ios"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="header-part">
        <h5>Exclusive Content</h5>
        <h5>Get access to all the following content ⬇️</h5>
      </div>
    </>
  );
};

export default Header;
