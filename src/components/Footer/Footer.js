import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // fonw awesome icon
  const copyRight = <FontAwesomeIcon icon={faCopyright} />;
  return (
    <div>
      {/* footer section */}
      <div className="text-center my-5 p-5 mb-0 rounded bg-info">
        <h1>FITNESS. RECOVERY. PERFORMANCE.</h1>
        <h3>
          WHATEVER YOUR AGE OR ATHLETIC EXPERIENCE, GET GAME-CHANGING RESULTS
          WITH SPORTS ZONE.
        </h3>
      </div>
      <div className="text-center bg-dark text-white rounded p-2">
        <p>{copyRight} 2021 Sports Zone Performance. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
