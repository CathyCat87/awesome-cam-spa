import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
      {
          path: "https://www.google.com/search?q=todo",
          label: "ToDo"
      },
      {
          path: "https://www.google.com/search?q=todo",
          label: "ToDo"
      },
      {
          path: "https://www.google.com/search?q=todo",
          label: "ToDo"
      },
      {
          path: "https://www.google.com/search?q=todo",
          label: "ToDo"
      },
  ];

  return (
      <footer className="page-footer">
          <div className="page-footer-grid">
              <div className="page-footer-grid__info">
                  <div className="page-footer-info__message">
                      <p className="page-footer-message__headline">
                          <span>Awesome-Cam is brought to you by&nbsp;</span>
                          <PageFooterHyperlink path="https://www.google.com/search?q=todo">
                              Cathy Zeng-Earnshaw
                          </PageFooterHyperlink>
                      </p>
                  </div>
                  <div className="page-footer-info__resource-list">
                      {resourceList.map((resource) => (
                          <div
                              key={ resource.path }
                              className="page-footer-info__resource-list-item">
                              <PageFooterHyperlink path={ resource.path }>
                                  { resource.label }
                              </PageFooterHyperlink>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="page-footer-grid__brand">
                  <div className="page-footer-brand">
                      <img
                          className="page-footer-brand__logo"
                          src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
                          alt="Auth0"
                          width="20"
                          height="22.22"
                      />
                      <PageFooterHyperlink path="https://www.google.com/search?q=todo">
                          TODO Inc
                      </PageFooterHyperlink>
                  </div>
              </div>
          </div>
      </footer>

  );
};
