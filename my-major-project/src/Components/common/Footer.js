import React from "react";
import "./Footer.css";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <>
      <div className="parent-footer">
        <div className="sub-footer">
          <div className="subfooter-left-side">
            <div className="col-1">
              <img src={Logo} alt="website-logo" className="" />
              <h2>Company</h2>
              <div className="company-links">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div key={i}>
                      <Link className="Link" to={ele.toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="Links">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div className="extra-bottm-space"></div>
            </div>

            <div className="col-2">
              <div className="resourses">
                <h2 className="col-2-heading">Resources</h2>
                <div className="resourses-links">
                  {Resources.map((ele, i) => {
                    return (
                      <div key={i}>
                        <Link
                          className="Link"
                          link
                          to={ele.split(" ").join("-").toLowerCase()}
                        >
                          {ele}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="support">
                <h2 className="support-heading">Support</h2>
                <div className="support-link">
                  <Link className="Link" linkto={"/help-center"}>
                    Help Center
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="Plans">
                <h2 className="plans-heading">Plans</h2>
                <div className="plan-links">
                  {Plans.map((ele, i) => {
                    return (
                      <div key={i}>
                        <Link
                          className="Link"
                          linkto={ele.split(" ").join("-").toLowerCase()}
                        >
                          {ele}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="community">
                <h2 className="community-heading">Community</h2>
                <div className="community-links">
                  {community.map((ele, i) => {
                    return (
                      <div key={i}>
                        <Link
                          className="Link"
                          linkto={ele.split().join("-").toLowerCase()}
                        >
                          {ele}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="subfooter-right-side">
            <div className="col-4">
              {FooterLink2.map((ele, i) => {
                return (
                  <div className="right-side" key={i}>
                    <h2 className="right-side-heading">{ele.title}</h2>
                    <div className="ele-links">
                      {ele.links.map((link, index) => {
                        return (
                          <div key={index}>
                            <Link className="Link" linkto={link.link}>
                              {link.title}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-left">
            {BottomFooter.map((ele, i) => {
              return (
                <div key={i} className="bottom-footer">
                  <Link
                    className="Link"
                    linkto={ele.split("").join("-").toLowerCase()}
                  >
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="footer-right">
            <p>Made with ❤️ CodeHelp © 2023 Studynotion</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
