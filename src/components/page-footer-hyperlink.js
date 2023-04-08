import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const PageFooterHyperlink = ({ children, path, icon }) =>{
  return (
      <a
          className="page-footer__hyperlink"
          href={ path }
          target="_blank"
          rel="noopener noreferrer">
          { children }
          { icon && (
              <>
                  &nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={icon} />
              </>
          )}
      </a>
  );
};
