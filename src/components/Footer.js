import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footer">
        <div className="social-links">
          <ul>
            <li className="social"><a href="http://github.com/ryancharris"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
            <li className="social"><a href="http://www.ryancharris.com"><i className="fa fa-globe" aria-hidden="true"></i></a></li>
            <li className="social"><a href="http://twitter.com/ryan_c_harris"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <p className="copyright">Ryan Harris</p>
      </div>
    );
  }
}

export default Footer;
