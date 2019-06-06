import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

class Blog extends React.Component {
  state = {
    posts: [
      {id: 1, title: "Space", body: "Space is the coolest. I need more space. There are 8 planets in our solar system, unless you count Pluto, which I do."},
      {id: 2, title: "Hippos", body: "Hippos can be cute but they can also be really scary. They have giant, pointy tusks that are clearly for killing things. Woah. "},
      {id: 3, title: "WTF", body: "React. WTF. Srsly."}
    ]
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addPost = (postData) => {
    const { posts, } = this.state;
    //const posts = this.state.posts is the same exact thing
    const post = { id: this.getId(), ...postData, };
    this.setState({ posts: [post, ...posts] })
    
  };

  editPost = (postData) => {
    const posts = this.state.posts.map(post => {
      if (post.id === postData.id)
        return postData;
      return post;
    });
    this.setState({ posts, })
  }

  renderPosts = () => {
    return this.state.posts.map(post => <Post key={post.id} {...post} edit={this.editPost} />);
    //spread operator being used to spread over array and turn attributes into props?
    //spread operator gets rid of curly brackets in object and converts them to props
    //now we have a prop called id, title and body
  };

  render(){
    return (
      <div>
        <h1>Blogz</h1>
        { this.renderPosts() }
        <PostForm add={this.addPost} />
        {/* this is how you pass a function in Blog to be accessible in PostForm */}
        {/* as a prop called add */}
      </div>
    )
  }

}


export default Blog;