import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';


export default class App extends React.Component {
  render() {
    return (
      <div id="page">
        <Header />
        {this.props.children || <Home/>}
        <Footer />
      </div>
    );
  }
}
