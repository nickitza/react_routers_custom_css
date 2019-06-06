import React from 'react';

  class PostForm extends React.Component {
    state= { title: "", body: ""};

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.id){ 
        this.props.edit({id: this.props.id, ...this.state});
        this.props.toggleEdit();}
      else{
        this.props.add(this.state);
        }
      this.setState({ title: "", body: "" })
    }

    componentDidMount() {
      // if (this.props.id)
      //   this.setState({title: this.props.title, body: this.props.body})
      // these are the exact same thing
        const {title, body, id} = this.props;
        id && this.setState({ title, body })
    };

    render(){
      return (
      <div>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Title" 
            type="text"
            label="Title" 
            name="title" 
            value={this.state.title}
            onChange={this.handleChange}>
          </input><br/>

          <input 
            placeholder="Body" 
            type="textarea"
            label="Body" 
            name="body" 
            value={this.state.body}
            onChange={this.handleChange}>
          </input><br/>

          <input 
          type="submit">
          </input><br/>

        </form>
      </div>

      )
    }
  }
export default PostForm;