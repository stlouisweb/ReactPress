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
    console.log(cb);
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

function Login(username, password, cb) {
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

function login(res, cb) {
  cb({
    authenticated: true,
    token: res.token
})
}

function wpAuth(username, password, cb) {
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
    })), cb);
}
function handleAuth(loginPromise, cb) {
   return loginPromise
     .then(function(response) {
       var res = JSON.parse(response.response);
       console.log(res.token);
       if (response.status == 200) {
         cb({
            authenticated: true,
            token: res.token
          })
          return true;
       } else {
         return 'error';
       }


     });
 }
