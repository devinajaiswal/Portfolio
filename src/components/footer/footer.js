import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
     
     <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">

            </ul>
            <ul className="copyright">
              <li>© Copyright 2020 All rights reserved</li>
              <li><a href="https://www.facebook.com/devina.jaiswal.2002"><i className="fa fa-facebook" /></a></li>
              <li><a href="http://www.linkedin.com/in/devinajaiswal"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/devinajaiswal/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/devinajaiswal"><i className="fa fa-github"></i></a></li>
           
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}