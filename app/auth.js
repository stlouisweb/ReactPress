// Need to set up auth to make a POST request to this endpoint:
// http://draughtbattle.app/wp-json/jwt-auth/v1/token
// Form-data
// username
// passwordword
import request from 'reqwest';
import when from 'when';
module.exports = {
  login(username, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    wpAuth(username, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(username, password, cb) {
  setTimeout(() => {
    if (username === 'joe@example.com' && password === 'passwordword1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}

function wpAuth(username, password) {
  console.log(username);
  console.log(password);
  return handleAuth(when(request({
      url: 'http://draughtbattle.app/wp-json/jwt-auth/v1/token',
      method: 'POST',
      crossOrigin: true,
      type: 'form-data',
      data: {
        username, password
      }
    })));
}
function handleAuth(loginPromise) {
   return loginPromise
     .then(function(response) {
       var jwt = response;
       console.log(response);
      // LoginActions.loginUser(jwt);
       return true;
     });
 }
