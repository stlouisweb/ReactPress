import restful, { fetchBackend } from 'restful.js';

module.exports = {
  Posts(){
    postsCollection.getAll().then((postEntites) => {
    
      return postEntites
    });
    return postEntites
  }
}

const api = restful('http://draughtbattle.app/wp-json/wp/v2', fetchBackend(fetch));
if (localStorage.token) {
  api.header('Authorization', 'Bearer' + localStorage.token);
}
const postsCollection = api.all('posts');
