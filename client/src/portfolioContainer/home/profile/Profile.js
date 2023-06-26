import React from "react";
import './profile.css';
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://github.com/tiakavousi">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/tia-kavousi/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I am <span className="highlighted-text">Tia</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="pimary-text">
              <span className="profile-role-tagline">
                Front-end developer
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={()=>ScrollService.ScrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{" "}
            </button>
            <a href="resume.pdf" download="resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>

        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
