import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://bahaa-profile-storage.s3.il-central-1.amazonaws.com/images/profile.jpg"
            alt="Bahaa Sobeh Avatar"
            className="profile-image"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/bhaasobh" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/bahaa-sobh/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Bahaa Sobeh</h1>
          <p>Software Engineering student specializing in Cyber Security & Web Development</p>


          <div className="mobile_social_icons">
            <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/bahaa-sobh/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
          {/* קוד QR לקובץ קורות חיים */}
        <div className="qr-section">
          <h3>Download My CV</h3>
          <p>Scan the QR code to download:</p>
          <img
            src="https://bahaa-profile-storage.s3.il-central-1.amazonaws.com/images/cv-code.jpg"
            alt="QR Code to download CV"
            className="qr-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
