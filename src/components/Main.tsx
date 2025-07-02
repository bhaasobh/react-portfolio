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
            src="https://bahaa-profile-storage.s3.il-central-1.amazonaws.com/images/profile.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIASYJCZSJ4NMFAYWMU%2F20250702%2Fil-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250702T043356Z&X-Amz-Expires=60&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaDGlsLWNlbnRyYWwtMSJIMEYCIQCWvyEEjjvaTMl5ozSYvBhKUiN66lBGfxPVKZiRicK1HAIhAKA3Nsb5nnQliJBMAfFzG85z%2BFeUeN55jEGklIsXVblmKogDCOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg5NTg4NDExMDAwIgwg0fAz5HTCPvkWQxwq3AL4g87VeDyieWpPpvhJ8SqncAEVUmmk%2Bv2RzRZidH%2BddChJr348DFwfu%2BSnaFzsj%2ByABfG3VIr6BXPWghvTavlaIftE43yGDbrTJ8ofIGSHWpcEQUui%2F6dnGaiJF28jIH1olUILiAkiUHnky13OTvKEnYLXb5rPS5pobfX9LrjKY2DBK22XdUKgWN3qFBDMejs5nuihAW8D8ScMZxIDdsRhb7ncUZuS%2Fdt%2FzyUHVQG8MBxtLRudveEpG5P4sG%2BnkqvqnnIlwuagz3I2fLFH7KbfSNsPjnQ9LDnlVCZEsdVrO7TBkDj5uXEvsCccQ8As0wdVJDooGAguOEQaOWsQFdkKICy05cWkaPJP00mW%2FfXg%2BPKQbZkStsNcKNpW4yS1WqVJoHeR1iXtpeBanCkmRPP3opuf8iQ8K1clxfa1ueSqDFRFbYoWFXik4ZPw2VlNEjGMt2vbYIoLGf13jrows%2B2SwwY6nQHymc8VlGvyvff7Z6jCLzqS5HCif5etbCZo5nSo%2BWswtu4AgpR7Z9ubgZJ4UuLSkHHP0128718JD18dT8DMQIU9UBMlPRduFU0YdWFtZ7XXqifJ2sg5Zfn7My7Kvu0EZVGnJsG1SH4X%2BGf8ALJUn0VvZgspNowa2tWUD%2Bo4rZX8rsOCfnm0v9tZnULDAWMUNBg39xLhqUrr3bUHvslU&X-Amz-Signature=7571f1decd08233709247d72e88b437880b51ee7e3196508d6f88e504c61ad67&X-Amz-SignedHeaders=host"
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
      </div>
    </div>
  );
}

export default Main;
