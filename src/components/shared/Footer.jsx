import React from 'react'; 

import 'stylesheets/components/shared/Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="created-by">
        <span>Simplist.</span> Created By <a href="https://www.behance.net/ryanmmchen5ffb" target="_blank" rel="noopener noreferrer">Me</a>.</div>
      <ul className="social-links">
        <li>
          <a
            href="https://twitter.com/Develonaut"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-twitter-with-circle"
          >
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/pub/ryan-mchenry/3a/632/41/"
            rel="noopener noreferrer"
            target="_blank"
            className="icon-linkedin-with-circle"
          >
           <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Develonaut"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-github-with-circle"
          >
            <span>Github</span>
          </a>
        </li>
      </ul>
    </footer>
  ); 
}