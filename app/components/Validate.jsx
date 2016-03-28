import React from 'react';
import auth from '../auth';
import restful, { fetchBackend } from 'restful.js';
import $ from 'jquery';

export default React.createClass({
  getInitialState() {
    return {
      validToken: 'Click the button to test authentication'
    }
  },
  serverRequest() {
    $.ajax({
      method: "POST",
      url: "http://draughtbattle.app/wp-json/jwt-auth/v1/token/validate",
      headers: { Authorization: "Bearer " + localStorage.token }
    })
      .done(function( msg ) {
        if (msg.data.status == 200){
          this.setState({
          validToken: msg.code
          });
        }
        else {
          this.setState({
          validToken: 'error'
          });
        }
      }.bind(this));
  },

  render() {
    return (
      <div className="validate">
        <h1>Validate Token</h1>
        <button onClick={this.serverRequest}>Validate Token</button>
        <p>{this.state.validToken}</p>
      </div>
    )
  }
})
