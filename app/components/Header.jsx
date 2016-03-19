import React from 'react';

toggleMenu: function() {
  console.log(this);
}
export default () =>
  <div className="jm_header container-fluid">
    <nav className="jm_main-nav navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="jm_logo navbar-brand" href="#">John Marshall<span id="tagline"> &mdash; Georgia Golf Instructor</span></a>
        </div>
        <div id="navbar" className="collapse navbar-collapse navbar-right">
          <ul className="nav navbar-nav">
            <li><a href="#"><i className="fa fa-phone"></i> (404) 405-1403</a></li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.toggleMenu}>Menu <i className="fa fa-bars"></i></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>;
