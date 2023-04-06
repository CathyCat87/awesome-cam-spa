import React from "react";
export const AwesomeCamFeature = ({ title, description, resourceURL, icon }) =>(
  <a href={ resourceURL }
     className="auth0-feature"
     target="_blank"
     rel={"noopener noferrer"}>
      <h3 className="auth0-feature__headline">
          <img className="auth0-feature__icon"
               src={ icon }
               alt="external link icon"/>
          { title }
      </h3>
      <p className="auth0-feature__description">{ description }</p>
  </a>
);
