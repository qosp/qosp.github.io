import React from 'react';
import './Footer.scss';
import {DEV_GITHUB_URL} from "../../utils/Constants";
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
      <div className="footer">
          <p>
              Copyright © 2021 <a target="_blank" rel="noreferrer" href={DEV_GITHUB_URL}>Michael Soultanidis</a>
              <br/><br/>
              <Link to={"/privacy"} className={"link"}>Privacy Policy</Link>
              <br/><br/>
          </p>
      </div>
  );
}

