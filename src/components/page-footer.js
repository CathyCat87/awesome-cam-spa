import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBookOpen, faCopyright } from "@fortawesome/free-solid-svg-icons";


export const PageFooter = () => {
  const resourceList = [
      {
          path: "https://github.com/CathyCat87/awesome-cam-spa",
          label: "SPA Source",
          icon: faGithub,
      },
      {
          path: "https://github.com/CathyCat87/awesome-cam-server",
          label: "Python Server(s) Source",
          icon: faGithub,
      },
      {
          path: "https://github.com/CathyCat87/awesome-cam-pi",
          label: "PI Source",
          icon: faGithub,
      },
      {
          path: "/references",
          label: "References",
          icon: faBookOpen,
      },
  ];

  return (
      <footer className="page-footer">
          <div className="page-footer-grid">
              <div className="page-footer-grid__info">

                      <p className="page-footer-message__headline">

                      </p>



              </div>
              <div className="page-footer-info__resource-list">
                  { resourceList.map((resource) => (
                      <div
                          key={ resource.path }
                          className="page-footer-info__resource-list-item"
                      >
                          <PageFooterHyperlink path={ resource.path } icon={ resource.icon }>
                              { resource.label }
                          </PageFooterHyperlink>
                      </div>
                  ))}
              </div>
              <div className="page-footer-grid__brand">
                  <div className="page-footer-brand">
                      <img
                          className="page-footer-brand__logo"
                          src="./linked-camera.svg"
                          alt="Awesome-Cam"
                          width="20"
                          height="22.22"
                      />
                      <PageFooterHyperlink path="https://www.awesome-cam.ca">
                          Awesome-Cam
                      </PageFooterHyperlink>
                      <span>
                          &nbsp;has been brought to you by&nbsp;
                          <PageFooterHyperlink path="https://www.linkedin.com/in/cathy-zeng-earnshaw-59701283/">
                              Cathy Zeng-Earnshaw <FontAwesomeIcon icon={ faLinkedin } />
                          </PageFooterHyperlink>
                          &nbsp;&nbsp;<FontAwesomeIcon icon={ faCopyright } />2023
                      </span>
                  </div>
              </div>
          </div>
      </footer>

  );
};
