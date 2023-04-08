import React from "react";
export const AwesomeCamFeature = ({ title, description, resourceURL, icon }) =>(
  <a href={ resourceURL }
     className="awesome-cam-feature"
     target="_blank"
     rel="noopener noreferrer">
      <h3 className="awesome-cam-feature__headline">
          <img className="awesome-cam-feature__icon"
               src={ icon }
               alt="external link icon"/>
          { title }
      </h3>
      <p className="awesome-cam-feature__description">{ description }</p>
  </a>
);
