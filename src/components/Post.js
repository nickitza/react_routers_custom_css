import React from 'react';
import PostForm from './PostForm';

class Post extends React.Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({editing: !this.state.editing});
  };


  render() {
    return (
      <div style={styles.segment}>
      {
        this.state.editing ?
        <PostForm { ...this.props } edit={this.props.edit} toggleEdit={this.toggleEdit} />
        :
        <div>
          <h3> { this.props.title } </h3>
          <p> { this.props.body } </p>
        </div>}

        <div>
          <br/>
          <button style={{backgroundColor: '#00cec9'}} onClick={this.toggleEdit}>Edit</button><br/><br/>
          <button style={{backgroundColor: '#d63031'}} onClick={this.toggleEdit}>Delete</button>
        </div>

      </div>
    );
  };
};
const styles = {
  segment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}
//styling can be stated outside the class, if it's inside you need to say this.styles

export default Post;