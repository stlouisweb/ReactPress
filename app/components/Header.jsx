import React from 'react';
import { Link } from 'react-router'

export default () =>
<div className="header container-fluid">
  <p>Header</p>
    <ul role="nav">
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/validate">Validate Token</Link></li>    
  </ul>
</div>;
