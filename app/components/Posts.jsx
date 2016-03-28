import React from 'react';
import restful, { fetchBackend } from 'restful.js';

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
       return (
           <div>
               {posts}
           </div>
       );
   }
});
