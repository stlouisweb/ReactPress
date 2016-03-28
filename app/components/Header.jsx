import React from 'react';
import { Link } from 'react-router'
import auth from '../auth'

export default React.createClass({
  render: function() {
    var loggedIn = auth.loggedIn();
    var loginButton;
    if (loggedIn) {
      loginButton = <li><a href="#" onClick={logout}>logout</a></Link></li>;
    } else {
      loginButton = <li><Link to="/login">login</Link></li>;
    }
    console.log(loggedIn);
    return (
      <div classNameName="header container-fluid">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">ReactPress</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                {loginButton}
                <li><Link to="/validate">Validate Token</Link></li>
                <li><Link to="/posts">Posts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

});
