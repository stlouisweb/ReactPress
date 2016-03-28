import React from 'react';
import PostService from '../services/PostService';
import restful, { fetchBackend } from 'restful.js';
import Post from './Post.jsx';

export default React.createClass({
   loadCategoriesFromServer: function() {
       var self = this;

       restful('http://draughtbattle.app/wp-json/wp/v2', fetchBackend(fetch))
           .all('posts')
           .getAll()
           .then(function(posts) {
               self.setState({
                   posts: posts.body()
               });
           });
   },

   getInitialState: function() {
       return { posts: [] };
   },

   componentDidMount: function() {
       this.loadCategoriesFromServer();
   },

   render: function() {
     var self = this;
       var posts  = this.state.posts.map(function(post) {
           var data = post.data();
           var content = data.content.rendered;
           return <div key={data.id}><h2>{data.title.rendered}</h2><div dangerouslySetInnerHTML={{__html: content}} /></div>;
       });
      //  var self = this;
      //  var postEntities = this.state.posts;
      //  console.log(postEntities);
      //  var posts = [];
      //  postEntities.forEach((postEntity) => {
      //    const post = postEntity.data();
      //    console.log(post);
      //    posts.push(post);
      //  });
      //  console.log(posts);
      //  posts.map(function(post){
      //    console.log(post)
      //    return <li key={post.id}>{post.title.rendered}</li>
      //   return <Post className="post" id={post.id} key={post.id} />
      // });
      //  var posts  = this.state.posts.map(function(post) {
      //      console.log(post.one());
      //      var data = post.data();
       //
      //      return <li key={data.id}>{data.title}</li>;
      //  });

       return (
           <div>
               {posts}
           </div>
       );
   }
});

// export default React.createClass({
//   getInitialState() {
//     return {
//       posts: null
//     }
//   },
//   componentDidMount: function() {
//     var posts = PostService.Posts.then
//
//   },
//
//   render() {
//     return (
//       <div className="posts">
//         <h1>Posts</h1>
//
//       </div>
//     )
//   }
// })
