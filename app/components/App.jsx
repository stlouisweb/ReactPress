import React from 'react';
import Note from './Note.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';


export default class App extends React.Component {
  render() {
    return (
      <div id="page">
        <Header />
        <Home />
      </div>
    );
  }
}
